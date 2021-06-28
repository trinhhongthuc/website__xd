import course from "../../models/course.js";

//////////////ADMIN///////////////////////
//get course
export const getCourse = async (req, res) => {
  const dataServer = await course.find({});

  try {
    if (!dataServer) res.json({ success: false, message: "Course not entity" });

    res.status(200).json({ success: true, data: dataServer });
  } catch (error) {
    console.error(error);
  }
};

//add course

export const addCourse = async (req, res) => {
  const dataCourses = req.body;
  try {
    if (!dataCourses.payload)
      res.json({ success: false, message: "Data slide error" });

    const db = new course({
      img: dataCourses.payload.img,
      author: dataCourses.payload.author,
      title: dataCourses.payload.title,
      price: dataCourses.payload.price,
      description: dataCourses.payload.description,
      section: dataCourses.payload.section,
      status: dataCourses.payload.status,
      hashTag: dataCourses.payload.hashTag,
    });

    db.save();
    res.status(200).json({
      success: true,
      message: "created slide successfully",
      dataServer: db,
    });
  } catch (error) {
    console.error(error);
  }
};
// delete course

export const deleteCourse = async (req, res) => {
  const id = req.params.id;
  const data = await course.findByIdAndDelete({ _id: id });
  try {
    if (!data) res.json({ success: false, message: "Slide is not found" });
    res
      .status(200)
      .json({ success: true, message: "Delete course successfully" });
  } catch (error) {
    console.error(error);
  }
};

// update course

export const updateCourse = async (req, res) => {
  const dataSlide = req.body;
  try {
    if (!dataSlide.payload)
      res.json({ success: false, message: "Data slide error" });
    const db = await course.findOneAndUpdate(
      { _id: dataSlide.payload.id },
      {
        img: dataSlide.payload.img,
        author: dataSlide.payload.author,
        title: dataSlide.payload.title,
        price: dataSlide.payload.price,
        description: dataSlide.payload.description,
        section: dataSlide.payload.section,
        hashTag: dataSlide.payload.hashTag,
        status: dataSlide.payload.status,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "created slide successfully", data: db });
  } catch (error) {
    console.error(error);
  }
};

// get one course

export const getOneCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await course.findById({ _id: id });

    if (!data) res.json({ success: false, message: "id is not a valid" });

    res.json({ success: true, data: data });
  } catch (error) {
    res.json({ error: error, success: false });
  }
};

/// get One course Two

export const getDataOneCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await course.findById({ _id: id });

    if (!data) res.json({ success: false, message: "id is not a valid" });

    res.json({ success: true, data: data });
  } catch (error) {
    res.json({ error: error, success: false });
  }
};

// update course two

export const updateDataCourse = async (req, res) => {
  const rsData = req.body;
  try {
    const data = await course.findOneAndUpdate(
      { _id: rsData.payload.id },
      {
        img: rsData.payload.img,

        author: rsData.payload.author,
        title: rsData.payload.title,
        price: rsData.payload.price,
        description: rsData.payload.description,

        status: rsData.payload.status,
        section: rsData.payload.section,
        hashTag: rsData.payload.hashTag,
      },
      { new: true }
    );
    if (!data) res.json({ success: false, message: "id is not a valid" });

    res.json({ success: true, data: data });
  } catch (error) {
    res.json({ error: error, success: false });
  }
};

/////////// HOME //////////////////

export const getCourseHome = async (req, res) => {
  const id = req.params.id;
  const dataServer = await course.find({}).sort({ _id: -1 }).limit(Number(id));

  try {
    if (!dataServer) res.json({ success: false, message: "No course" });
    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseDetailByIdHome = async (req, res) => {
  const id = req.params.id;

  try {
    const dataServer = await course.findById({ _id: id });

    if (!dataServer)
      res.json({ success: false, message: "not data is server" });

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseRelate = async (req, res) => {
  const { hashTag, id } = req.body.payload;
  try {
    const dataServer = await course
      .find({
        hashTag: { $in: [...hashTag] },
      })
      .sort({ _id: -1 });

    if (!dataServer)
      res.json({ success: false, message: "data Relate is entity" });
    const newData = dataServer.filter(
      (item) => item.id !== id && item.status !== "notActive"
    );

    res.json({
      success: true,
      data: newData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseHome2 = async (req, res) => {
  const dataServer = await course.find({}).sort({ _id: -1 });

  try {
    if (!dataServer) res.json({ success: false, message: "data is entity" });

    // const newData = dataServer.filter((item) => item.status !== "notActive");

    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.log(error);
  }
};

export const getCoursePagination = async (req, res) => {
  const { page } = req.query;
  const limit = 8;
  const startIndex = (Number(page) - 1) * limit;
  const totalPage = await course.countDocuments({});

  const dataServer = await course
    .find({})
    .sort({ _id: -1 })
    .limit(limit)
    .skip(startIndex);

  try {
    res.json({
      success: true,
      data: dataServer,
      currentPage: page,
      totalPage: Math.ceil(totalPage / limit),
    });
  } catch (error) {
    console.log(error);
  }
};
