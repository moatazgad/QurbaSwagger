const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const PORT = process.env.PORT || 4000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Qurba Backend Task",
      version: "1.0.0",
      description: "Restaurant Management System",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json()); //application/json

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
