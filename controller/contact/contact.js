import contact from "../../models/contact.js";

export const getContact = async (req, res) => {
  const dataServer = req.body.payload;

  try {
    if (!dataServer) res.json({ success: true, message: "data is entity" });

    const newData = await new contact({
      name: dataServer.name,
      email: dataServer.email,
      message: dataServer.message,
    });

    newData.save();

    res.json({ success: true, data: newData });
  } catch (error) {}
};
