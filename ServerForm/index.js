require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/form", async (req, res) => {
  try {
    await axios.post(process.env.WEBHOOK_URL, req.body);
    console.log("Dados do formulário enviados ao ServidorWebhook:", req.body);
    res.status(200).send("Formulário enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar dados do formulário:", error);
    res.status(500).send("Erro ao enviar formulário.");
  }
});

app.listen(port, () => {
  console.log(`ServidorFormulário rodando em http://localhost:${port}`);
});
