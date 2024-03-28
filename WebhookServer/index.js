require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());

const Schema = mongoose.Schema;
const registerShema = new Schema({
  name: String,
  email: String,
  date: { type: Date, default: Date.now },
});

const Resgister = mongoose.model("ResgisterWebHook", registerShema);

mongoose
  .connect(process.env.MONGOBD_URL)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(3002, () => {
      console.log("Server is running on port 3002");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
