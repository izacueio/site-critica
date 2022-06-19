const express = require('express');
const app = express();

const db = require('./models/db'); //conexão esta sendo feita aqui!! 

app.get("/", async(req, res) => {
    res.send("Pagina Inicial ATT");
});

app.post("/cadastrar", async (req, res) => {
    res.send("Pagina de cadastro");
});

app.listen(8080, () => {
    console.log("Servidor iniciando na porta 8080: htt p://localhost:8080");
});