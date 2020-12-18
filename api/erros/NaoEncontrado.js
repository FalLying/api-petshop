class NaoEncontrado extends Error {
  constructor(nome = "Fornecedor") {
    super(`${nome} não foi encontrado!`);
    this.name = "NaoEncontrado";
    this.idErro = 0;
  }
}

module.exports = NaoEncontrado;
