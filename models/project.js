import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const project = mongoose.model("Project", schema);

export default project;
