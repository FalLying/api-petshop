const roteador = require("express").Router({ mergeParams: true });

roteador.get("/", (requisicao, resposta) => {
  resposta.send(JSON.stringify([]));
});

module.exports = roteador;
