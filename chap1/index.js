const { response } = require("express");
const express = require("express");

const authors = [
  {
    nom: "Lawrence",
    prénom: "Nowell",
    origin: "UK",
    books: ["Beowulf"],
    id: 1,
  },
  {
    nom: "William",
    prénom: "Shakespeare",
    origin: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
    id: 2,
  },
  {
    nom: "Charles",
    prénom: "Dickens",
    origin: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
    id: 3,
  },
  {
    nom: "Oscar",
    prénom: "Wilde",
    origin: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
    id: 4,
  },
];

const app = express();
app.listen(8000, () => {
  console.log("Serveur lancé");
});

app.get("/", (request, response) => {
  response.send("Authors API");
});

app.get("/authors/:id", (request, response) => {
  const found = authors.find(
    (authors) => authors.id === parseInt(request.params.id)
  );

  if (parseInt(request.params.id) > authors.length) {
    response.send(`The author with the ID ${parseInt(request.params.id)} does not exist`);
  } else {
    response.send(`${found.nom} ${found.prénom}, ${found.origin},`);
  }
});

app.get("/json/authors/:id", (request, response) => {
  const found = authors.find(
    (authors) => authors.id === parseInt(request.params.id)
  );

  if (parseInt(request.params.id) > authors.length) {
    response.send(`The author with the ID ${parseInt(request.params.id)} does not exist`);
  } else {
    response.send(found);
  }
});

app.get("/authors/:id/books", (request, response) => {
  const found = authors.find(
    (authors) => authors.id === parseInt(request.params.id)
  );
  response.send(`${found.books.join(", ")}`);
});

app.get("/json/authors/:id/books", (request, response) => {
  const found = authors.find(
    (authors) => authors.id === parseInt(request.params.id)
  );
  response.send(found.books);
});

app.get("*", (request, response) => {
  response.send("error");
});
