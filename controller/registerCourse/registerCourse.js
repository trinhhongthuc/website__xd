import registerCourse from "../../models/registerCourse.js";

export const addRegisterCourse = async (req, res) => {
  const dataServer = req.body.payload;

  try {
    const newData = await new registerCourse({
      name: dataServer.name,
      namsinh: dataServer.namsinh,
      email: dataServer.email,

      sodienthoai: dataServer.sodienthoai,

      facebook: dataServer.facebook,

      zalo: dataServer.zalo,

      course: dataServer.course,

      job: dataServer.job,
    });

    newData.save();

    res.json({ success: true, data: newData });
  } catch (error) {
    console.log(error);
  }
};

// get all register course

export const getAllRegisterCourse = async (req, res) => {
  const dataServer = await registerCourse.find().sort({ _id: -1 });

  try {
    res.json({ success: true, data: dataServer });
  } catch (error) {
    console.error(error);
  }
};

//delete register Course

export const deleteRegisterCourse = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await registerCourse.findByIdAndDelete({ _id: id });

    res.json({ success: true, data: data });
  } catch (error) {
    console.log(error);
  }
};
