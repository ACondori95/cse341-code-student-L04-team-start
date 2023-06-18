const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My API",
    description: "Temple API",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

// Generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointFiles, doc).then(async () => {
//   await import("./index.js");
// });
