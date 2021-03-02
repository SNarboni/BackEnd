const express = require("express");
const expressHandlebars = require("express-handlebars");
const port = 8000;

const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Serveur lancé sur : http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.use(express.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
  console.log(req.body);
});
