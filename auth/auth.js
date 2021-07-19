import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) res.json({ success: false, message: "token is empty" });

  try {
    const tokenVeification = jwt.verify(token, process.env.SECRET_KEY_TOKEN);
    if (!tokenVeification)
      res.json({ success: false, message: "token is not valid" });

    req.user = { username: tokenVeification.username, id: tokenVeification.id };

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, error: error });
  }
};

export default auth;
