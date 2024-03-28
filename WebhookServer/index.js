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

app.post("/webhook", async (req, res) => {
  console.log("Dadaos recidos:", req.body);

  try {
    const newResgister = new Resgister(req.body);
    await newResgister.save();

    console.log("Dadaos salvos ");
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

mongoose
  .connect(process.env.MONGOBD_URL)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
