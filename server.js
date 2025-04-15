require('dotenv').config();

const express = require("express");
const { sequelize } = require("./models"); // Importa la instancia de Sequelize con los modelos

const app = express();
app.use(express.json());

// Importar y usar las rutas consolidadas desde el archivo index.js
const routes = require("./routes");
app.use("/api", routes); // Prefijo '/api' para todas las rutas


// Inicia el servidor
const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true })  // Esto actualiza las tablas sin eliminar datos
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });



