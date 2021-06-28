import certificate from "../../models/certificater.js";
import convertVn from "../../convert/convertVN.js";

export const getCertificate = async (req, res) => {
  const dataServer = req.query.search;
  const convert = convertVn(dataServer).toLowerCase();
  try {
    const dataSearch = await certificate.find({});
    let search = [];
    dataSearch.forEach((item) => {
      let string = convertVn(item.title).toLowerCase();
      if (string.indexOf(convert) > -1) {
        search.push(item);
      }
    });

    if (!search) {
      res.json({ success: false, data: search });
    }

    res.json({ success: true, data: search });
  } catch (error) {
    console.log(error);
  }
};

//add

export const addCertificate = async (req, res) => {
  const dataServer = req.body;
  try {
    const newData = new certificate({
      img: dataServer.img,
      title: dataServer.title,
    });

    newData.save();
    res.json({ success: true, data: data });
  } catch (error) {
    console.log(error);
  }
};

//get by id

export const getCertificateById = async (req, res) => {
  const id = req.params.id;

  try {
    const dataServer = await certificate.findById({ _id: id });
    if (!dataServer) res.json({ success: false, message: "data Is entity" });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

//get all certificate

export const getAllCertificate = async (req, res) => {
  try {
    const dataServer = await certificate.find();
    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

// add certificate ADMIN

export const addCertificateAdmin = async (req, res) => {
  const dataServer = req.body.payload;

  try {
    const newData = new certificate({
      title: dataServer.title,
      img: dataServer.img,
      status: dataServer.status,
    });

    newData.save();

    res.json({ success: true, data: newData });
  } catch (error) {
    console.log(error);
  }
};

//delete certificate

export const deleteCertificate = async (req, res) => {
  const id = req.params.id;

  try {
    const newData = await certificate.findByIdAndDelete({ _id: id });

    if (!newData) {
      res.json({ success: true, message: "Is not delete data" });
    }

    res.json({ success: true, data: newData });
  } catch (error) {
    console.error(error);
  }
};

//get all

export const getAllCertificateByLimit = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await certificate.find().sort({ _id: -1 }).limit(Number(id));

    res.status(200).json({ data: data, success: true });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false });
  }
};
