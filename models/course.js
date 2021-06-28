import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      default: 100000,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    section: {
      type: [String],
    },
    hashTag: {
      type: [String],
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const course = mongoose.model("Course", schema);

export default course;
