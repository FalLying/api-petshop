const Modelo = require("./ModeloTabelaEmpresa");

module.exports = {
  lista() {
    return Modelo.findAll({ raw: true });
  },
  inserir(empresa) {
    return Modelo.create(empresa);
  },
};
