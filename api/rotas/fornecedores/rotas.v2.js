const roteador = require("express").Router();
const Fornecedor = require("./Fornecedor");
const SerializadorFornecedor = require("../../Serializador")
  .SerializadorFornecedor;

roteador.post("/", async (requisicao, resposta, proximo) => {
  try {
    const dadosRecebidos = requisicao.body;
    const fornecedor = new Fornecedor(dadosRecebidos);
    await fornecedor.criar();
    resposta.status(201);
    const serializador = new SerializadorFornecedor(
      resposta.getHeader("Content-Type")
    );
    resposta.send(serializador.serializar(fornecedor));
  } catch (erro) {
    proximo(erro);
  }
});

module.exports = roteador;
