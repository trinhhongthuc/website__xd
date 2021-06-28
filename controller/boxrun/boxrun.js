import boxRun from "../../models/boxRun.js";

///////////// ADMIN /////////////////////
export const getAllBoxRun = async (req, res) => {
  try {
    const dataServer = await boxRun.find({});

    if (!dataServer) res.json({ message: "box run is empty", success: true });

    res
      .status(200)
      .json({ success: true, message: "box run success", data: dataServer });
  } catch (error) {
    console.error(error);
  }
};

// add
export const addBoxRun = async (req, res) => {
  const dataServer = req.body;

  try {
    if (!dataServer.payload)
      res.json({ success: true, message: "data is entity" });

    const newDataServer = await new boxRun({
      title: dataServer.payload.title,
      number: Number(dataServer.payload.number),
      status: dataServer.payload.status,
    });

    newDataServer.save();

    res.json({ success: true, data: newDataServer });
  } catch (error) {
    console.log(error);
  }
};

//delete

export const deleteBoxRun = async (req, res) => {
  const id = req.params.id;

  try {
    const dataServer = await boxRun.findByIdAndDelete({ _id: id });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

//get by id

export const getBoxRunById = async (req, res) => {
  const id = req.params.id;

  try {
    const dataServer = await boxRun.findById({ _id: id });

    if (!dataServer)
      res.json({ success: false, message: "id is not available" });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

// update

export const updateBoxRun = async (req, res) => {
  const dataServer = req.body.payload;
  try {
    if (!dataServer)
      res.json({ success: false, message: "data update is not available" });

    const newDataServer = await boxRun.findByIdAndUpdate(
      {
        _id: dataServer.id,
      },
      {
        title: dataServer.title,
        number: dataServer.number,
        status: dataServer.status,
      },
      {
        new: true,
      }
    );

    res.json({ success: true, data: newDataServer });
  } catch (error) {
    console.log(error);
  }
};

////////////////////// HOME ?/////////////////

export const getBoxRunHome = async (req, res) => {
  const dataServer = await boxRun.find({}).sort({ _id: -1 });

  try {
    if (!dataServer)
      res.json({ success: true, error: true, message: "No data server" });
    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};
