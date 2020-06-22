const express = require("express");

const routes = express.Router();


routes.get("/caminhoURL", (request, response) => {
 
  return response.json({
    response: "Deu bom",
  });
});

module.exports = routes;
