const express = require("express");
const { v4: uuidv4 } = require('uuid');

// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());

const repositories = [];


app.get("/repositories", (request, response) => {
   const { title } = request.body;

   const results = title?repositories.filter(respositore => repositorie.title.includes(title)):repositories;
   return response.json(results);
});

app.post("/repositories", (request, response) => {

  const { title, url, techs, likes } = request.body;

  const repositorie = { id: uuidv4(), title, url, techs: [techs], likes};

  repositories.push(repositorie);
  
  return response.json(repositorie);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
