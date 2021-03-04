const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8000;
const app = express();

const debug = (request, response, next) => {
  console.log("j'ai eu une nouvelle requete", new Date());
  next();
};

const caseName = (request, response, next) => {
  if (request.body.name) {
    request.body.name = request.body.name.toLowerCase();
    console.log(`${request.body.name} a été ajouté a la liste`);
    next();
  } else {
    console.log("persone n'a été ajouté a la liste");
    next();
  }
};

const ifExiste = (request, response, next) => {
  const isValid = students.find((student) => request.body.name === student.name);
  if (isValid) {
    response.send(`Désolé mais ${request.body.name} a déja été ajouté`);
    console.log('il existe deja')
  } else {
    console.log('existe pas')
    next();
  }
};

app.use(bodyParser.json());
app.use(cors());
app.use(debug);
app.use(ifExiste);
app.use(caseName);

app.listen(port, () => {
  console.log(`Serveur lancé : http://localhost:${port}/students`);
});

const students = [
  {
    name: "sebastien",
  },
  {
    name: "allan",
  },
  {
    name: "nico",
  },
];

app.get("/students", (request, response) => {
  response.json(students);
});

app.post("/students", (request, response) => {
  response.send(`${request.body.name} à bien été ajouté à la liste`);
  students.push(request.body);
});

app.get("*", (request, response) => {
  response.send("route non existente");
});
