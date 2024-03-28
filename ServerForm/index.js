require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.post("/form", async (req, res) => {
  console.log(req.body);

  try {
    await axios.post(process.env.WEBHOOK_URL, req.body);
    res.status(200).send("Form enviado com sucesso!");
  } catch (error) {
    res.status(500).json({ message: "error form", error });
  }
});

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
