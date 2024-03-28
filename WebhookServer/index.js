require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { default: mongoose } = require("mongoose");

const app = express();
const port = process.env.PORT;

app.use(express.json());

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
