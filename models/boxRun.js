import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const boxRun = mongoose.model("box-run", schema);

export default boxRun;
