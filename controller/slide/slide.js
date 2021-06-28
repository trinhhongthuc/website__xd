import slide from "../../models/slide.js";

////////// ADMIN //////////////////////////////////////////
// get slide
export const getSlide = async (req, res) => {
  try {
    const dataSlide = await slide.find({});
    if (!dataSlide) res.json({ message: "Slide is empty", success: true });

    res
      .status(200)
      .json({ success: true, message: "Slide success", data: dataSlide });
  } catch (error) {
    console.error(error);
  }
};
// add slide
export const addSlide = async (req, res) => {
  const dataSlide = req.body;
  try {
    if (!dataSlide.payload)
      res.json({ success: false, message: "Data slide error" });

    const db = await new slide({
      img: dataSlide.payload.img, //.
      title: dataSlide.payload.title,
      status: dataSlide.payload.status,
    });

    db.save();

    res
      .status(200)
      .json({ success: true, message: "created slide successfully", data: db });
  } catch (error) {
    console.error(error);
  }
};

//delete slide

export const deleteSlide = async (req, res) => {
  const id = req.params.id;
  const data = await slide.findByIdAndDelete({ _id: id });
  try {
    if (!data) res.json({ success: false, message: "Slide is not found" });
    res
      .status(200)
      .json({ success: true, message: "Delete slide successfully" });
  } catch (error) {
    console.error(error);
  }
};

///////////////////// HOME //////////////////

export const getBanner = async (req, res) => {
  const dataServer = await slide.find({});

  try {
    if (!dataServer) res.json({ success: false, message: "No slide" });
    const newData = dataServer.filter((item) => item.status !== "notActive");
    res.json({ success: true, data: newData });
  } catch (error) {
    console.log(error);
  }
};
