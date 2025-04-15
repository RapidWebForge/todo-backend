const { Sequelize } = require("sequelize");

// Inicializar Sequelize
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  },
);

// Cargar modelos

// Exportar los modelos y la instancia de Sequelize
module.exports = {
  sequelize,
};
