const Tabela = require("./TabelaEmpresa");

class Empresa {
  constructor({
    id,
    titulo,
    endereco,
    quantidadeDeFuncionarios,
    dataCriacao,
    dataAtualizacao,
    versao,
  }) {
    this.id = id;
    this.titulo = titulo;
    this.endereco = endereco;
    this.quantidadeDeFuncionarios = quantidadeDeFuncionarios;
    this.dataCriacao = dataCriacao;
    this.dataAtualizacao = dataAtualizacao;
    this.versao = versao;
  }

  validar() {
    if (typeof this.titulo !== "string" || this.titulo.length === 0) {
      throw new Error("O campo título está inválido");
    }
    if (typeof this.endereco !== "string" || this.endereco.length === 0) {
      throw new Error("O campo endereco está inválido");
    }
    if (
      typeof this.quantidadeDeFuncionarios !== "number" ||
      this.quantidadeDeFuncionarios === 0
    ) {
      throw new Error("O campo quantidadeDeFuncionarios está inválido");
    }
  }

  async criar() {
    this.validar();
    const resultado = await Tabela.inserir({
      titulo: this.titulo,
      endereco: this.endereco,
      quantidadeDeFuncionarios: this.quantidadeDeFuncionarios,
    });

    this.id = resultado.id;
    this.dataCriacao = resultado.dataCriacao;
    this.dataAtualizacao = resultado.dataAtualizacao;
    this.versao = resultado.versao;
  }
}

module.exports = Empresa;
