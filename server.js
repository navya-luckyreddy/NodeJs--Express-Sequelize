const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Tutorial API",
      description: "Tutorial API Information",
      contact: {
        name: "Navya"
      },
      servers: ["http://localhost:8080"]
    }
  },
  apis: ["./app/routes/tutorial.routes.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// simple route
/**
 * @swagger
 * 
 * 
 * 
 */

app.get("/toy", (req, res) => {
  res.json({ message: "Welcome to Node-Express-Sequelize" });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});