import project from "../../models/project.js";

///////////// ADMIN ????????????///////////
export const getAllProject = async (req, res) => {
  const dataServer = await project.find({});
  try {
    if (!dataServer)
      res.json({ success: false, message: "No data project server" });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

// add project

export const addProject = async (req, res) => {
  const dataClient = req.body.payload;

  try {
    if (!dataClient)
      res.json({ success: false, message: "data is not available" });

    const newDataServer = await new project({
      title: dataClient.title,
      img: dataClient.img,
      status: dataClient.status,
    });

    newDataServer.save();

    res.json({ success: true, data: newDataServer });
  } catch (error) {
    console.log(error);
  }
};

//delete

export const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      res.json({ success: false, message: "id is not available" });
    }

    const dataServer = await project.findByIdAndDelete({ _id: id });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "server is error" });
  }
};

// get project by _id

export const getProjectById = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) res.json({ success: false, message: "id is not valid" });

    const dataServer = await project.findById({ _id: id });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

//update

export const updateProject = async (req, res) => {
  const dataClient = req.body.payload;
  try {
    const newDataServer = await project.findByIdAndUpdate(
      { _id: dataClient.payload.id },
      {
        title: dataClient.payload.title,
        status: dataClient.payload.status,
        img: dataClient.payload.img,
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

////////// HOME ???????????//////////

export const getProjectHome = async (req, res) => {
  const dataServer = await project.find({});

  // const newData = dataServer.filter((item) => item.status !== "notActive");
  try {
    if (!dataServer)
      res.json({ success: true, error: true, message: "not data" });
    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};
