import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/router.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: "10000mb" }));
app.use(express.urlencoded({ extended: true, limit: "10000mb" }));

const url = process.env.URl;
const POST = process.env.PORT || 5500;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res, req) => {
    console.log("Connect database is successfully");

    app.listen(POST, (req, res) => {
      console.log(`server is running post ${POST}`);
    });
  });

app.use("/", router);
