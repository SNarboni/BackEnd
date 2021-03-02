const express = require("express");
const expressHandlebars = require("express-handlebars");
var translations = require('./translations.json')

const port = 8000;
const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Serveur lancé sur : http://localhost:${port}/`);
});

app.get("/:lang?", (req, res) => {
  if (req.params.lang === undefined) {
      res.render("home", {
          bonjour: translations.fr.bonjour,
      })
  } else {
      res.render("home", {
          bonjour: translations[req.params.lang].bonjour,
      })
  }
})
