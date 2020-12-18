const roteador = require("express").Router();
const Empresa = require("./Empresa");
const TabelaEmpresa = require("./TabelaEmpresa");

roteador.get("/", async (requisicao, resposta) => {
  const resultados = await TabelaEmpresa.lista();
  resposta.send(JSON.stringify(resultados));
});

roteador.post("/", async (requisicao, resposta, proximo) => {
  try {
    const data = requisicao.body;
    const empresa = new Empresa(data);
    await empresa.criar();
    resposta.status(201).send(empresa);
  } catch (erro) {
    proximo(erro);
  }
});

module.exports = roteador;
