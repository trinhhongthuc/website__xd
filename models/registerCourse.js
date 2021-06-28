import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    namsinh: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    sodienthoai: {
      type: Number,
      required: true,
    },

    facebook: {
      type: String,
      required: true,
    },

    zalo: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    job: {
      type: String,
      required: true,
    },

    complete: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const registerCourse = mongoose.model("registerCourse", schema);

export default registerCourse;
