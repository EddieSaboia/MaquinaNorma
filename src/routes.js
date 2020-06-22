const express = require("express");

const routes = express.Router();

//https://github.com/EddieSaboia/MaquinaNorma
//https://github.com/JonathanPonte/MaquinaNorma Font do meu amigo la
routes.get("/caminhoURL", (request, response) => {
 
  return response.json({
    response: "Deu bom",
  });
});

module.exports = routes;
