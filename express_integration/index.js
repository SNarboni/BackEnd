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
  res.render("home",{
    link:"homepage",
    img:`img/logo_square_white.png`,
    link2:'',
    bg : "cuisine",
    title:"Cui'zine",
    subTitle:"Le mag cuisine",
  });
});
app.get("/home2", (req, res) => {
  res.render("page2",{
    link:"homepage",
    img:`img/logo_square_white.png`,
    link2:`<link rel="stylesheet" href="./css/page2.css" />`,
    bg : "cuisine",
    title:"Cui'zine",
    subTitle:"Le mag cuisine",
  });
});
app.get("/team", (req, res) => {
  res.render("team",{
    link:"team",
    img:``,
    link2:'',
    bg : "",
    title:"On apprend en enseignant",
    subTitle:"Un pour tous et tous pour un",
  });
});
app.get("/blog", (req, res) => {
  res.render("blog",{
    link:"",
    link2:'',
    img:`img/logo_square_white.png`,
    bg : "",
    title:"Blog",
    subTitle:"En travaux",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact",{
    link:"contact",
    img:`img/logo_square_white.png`,
    link2:'',
    bg : "",
    title:"Nous contacter",
    subTitle:"",
  });
});
app.get("/recipe", (req, res) => {
  res.render("recipe",{
    link:"recipe",
    img:`img/logo_square_white.png`,
    link2:'',
    bg : "recipe",
    title:"Paëlla",
    subTitle:"Le plat familial de votre été 2019",
  });
});
app.get("/post", (req, res) => {
  res.render("post",{
    link:"post",
    img:``,
    link2:'',
    bg : "post",
    title:"Chez Suzette, la nouvelle crêperie qui fait parler d'elle",
    bubTitle:"",
  });
});
app.get("/team-member", (req, res) => {
  res.render("team-member",{
    link:"team-member",
    img:``,
    link2:'',
    bg : "team",
    title:"Antoine",
    subTitle:"Gouteur professionnel",
  });
});