import post from "../../models/post.js";

//////// AMDIN ///////////////////////
export const getAllPost = async (req, res) => {
  const dataServer = await post.find({});

  try {
    if (!dataServer) res.json({ success: false, message: "post is entity" });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    res.json({ success: false, message: "server is error" });
  }
};

//add
export const addPost = async (req, res) => {
  const dataServer = req.body;

  try {
    if (!dataServer) res.json({ success: false, message: "data is error" });

    const newDataServer = await new post({
      author: dataServer.payload.author,
      description: dataServer.payload.description,
      img: dataServer.payload.img,
      status: dataServer.payload.status,
    });

    newDataServer.save();

    res.json({ success: true, data: newDataServer });
  } catch (error) {
    console.log(error);

    res.json({ error: error });
  }
};

//get by id

export const getPostById = async (req, res) => {
  const id = req.params.id;

  try {
    const dataServer = await post.findById({ _id: id });

    if (!dataServer)
      res.json({ success: false, message: "id is not available" });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

// update

export const updatePost = async (req, res) => {
  const dataServer = req.body;
  try {
    if (!dataServer)
      res.json({ success: false, message: "data update is not available" });

    const newDataServer = await post.findByIdAndUpdate(
      {
        _id: dataServer.payload.id,
      },
      {
        img: dataServer.payload.img,
        author: dataServer.payload.author,
        status: dataServer.payload.status,
        description: dataServer.payload.description,
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

//delete

export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const dataServer = await post.findByIdAndDelete({ _id: id });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

//////////// HOME ///////////////

export const getFetchBack = async (req, res) => {
  const dataServer = await post.find({}).sort({ _id: -1 });

  try {
    if (!dataServer)
      res.json({ success: true, error: true, message: "data is entity" });
    // const newData = dataServer.filter((item) => item.status !== "notActive");
    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};
