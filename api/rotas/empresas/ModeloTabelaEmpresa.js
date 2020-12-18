const Sequelize = require("sequelize");
const instancia = require("../../banco-de-dados");

const colunas = {
  titulo: { type: Sequelize.STRING, allowNull: false },
  endereco: { type: Sequelize.STRING, allowNull: false },
  quantidadeDeFuncionarios: { type: Sequelize.INTEGER, allowNull: false },
};

const opcoes = {
  freezeTableName: true,
  tableName: "empresas",
  timestamps: true,
  createdAt: "dataCriacao",
  updatedAt: "dataAtualizacao",
  version: "versao",
};

module.exports = instancia.define("empresa", colunas, opcoes);
