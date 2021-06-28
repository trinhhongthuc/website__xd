import user from "../../models/user.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
// luuw refreshToken vao trong mang der so sanh sau do tra ve token moi mai lm nha
export const loginAdmin = async (req, res) => {
  const data = req.body.payload;

  try {
    const admin = await user.findOne({ username: data.username.trim() });
    if (admin === null) {
      res.status(400).json({ message: "username is not found" });
    } else {
      if (
        await argon2.verify(
          admin.password,
          JSON.stringify(data.password.trim())
        )
      ) {
        const token = await jwt.sign(
          { username: admin.username, id: admin._id },
          process.env.SECRET_KEY_TOKEN,
          { expiresIn: "1h" }
        );

        const refreshToken = jwt.sign(
          { username: admin.username, id: admin._id },
          process.env.REFRESH_SECRET_KEY_TOKEN,
          { expiresIn: "2h" }
        );

        const refresh = await user.findByIdAndUpdate(
          { _id: admin._id },
          {
            refreshTokens: [refreshToken],
          }
        );

        res.json({
          success: true,
          data: {
            username: admin.username,
            id: admin._id,
            token: token,
            refreshToken: refreshToken,
          },
        });
      } else {
        res.status(400).json({ success: true, message: "Invalid password" });
      }
    }
  } catch (error) {
    console.log(error);
    // res.status(400).json({ success: true, message: "Invalid password" });
  }
};

// register admin

export const registerAdmin = async (req, res) => {
  const data = req.body;

  try {
    const admin = new user({
      username: data.username,
      password: await argon2.hash(JSON.stringify(data.password.trim())),
    });

    admin.save();
    res.json({ success: true, data: admin });
  } catch (error) {}
};

// change password

export const changePass = async (req, res) => {
  const { payload } = req.body;
  const userLogin = req.user;

  try {
    const findUser = await user.findById({ _id: userLogin.id });

    if (!findUser) res.status(400).json({ message: "find nots user" });
    if (
      await argon2.verify(
        findUser.password,
        JSON.stringify(payload.oldpassword.trim())
      )
    ) {
      const newData = await user.findByIdAndUpdate(
        { _id: userLogin.id },
        {
          password: await argon2.hash(JSON.stringify(payload.newpassword)),
        },
        {
          new: true,
        }
      );

      res.status(200).json({ success: true });
    } else res.status(400).json({ message: "password not match" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

// refresh token

export const refreshToken = async (req, res) => {
  const refreshtoken = req.headers.refreshtoken.split(" ")[1];

  try {
    if (!refreshtoken)
      res.json({ success: false, message: "refresh token is required" });
    const tokenVerification = await jwt.verify(
      refreshtoken,
      process.env.REFRESH_SECRET_KEY_TOKEN
    );
    if (!tokenVerification)
      res.json({ success: false, message: "refresh token not is match" });

    const listRefreshToken = await user.findOne({
      refreshTokens: { $in: [refreshtoken] },
      _id: tokenVerification.id,
    });

    if (listRefreshToken) {
      const token = jwt.sign(
        { username: tokenVerification.username, id: tokenVerification.id },
        process.env.SECRET_KEY_TOKEN,
        { expiresIn: "1h" }
      );

      const tokenRefresh = jwt.sign(
        { username: tokenVerification.username, id: tokenVerification.id },
        process.env.REFRESH_SECRET_KEY_TOKEN,
        { expiresIn: "2h" }
      );
      const newUserToken = await user.findOneAndUpdate(
        { _id: listRefreshToken._id },
        {
          refreshTokens: [...listRefreshToken.refreshTokens, tokenRefresh],
        }
      );

      res.json({
        success: true,
        data: { token: token, refreshToken: tokenRefresh },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
