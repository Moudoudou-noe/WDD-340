/******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const inventoryRoute = require("./routes/inventoryRoute");

require("dotenv").config();
const express = require("express")
require("dotenv").config()
const app = express()
const static = require("./routes/static")
const invRoute = require("./routes/inventoryRoute");
const session = require("express-session");
const flash = require("connect-flash");
/* ***********************
 * Middleware
 *************************/
app.use(express.static("public")) // sert les fichiers statiques (css, js, images, etc.)
app.set("view engine", "ejs") // configure EJS comme moteur de vues
app.get('/custom', (req, res) => {
  res.render('Custom-vehicle'); 
});
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.get('/sport', (req, res) => {
  res.render('sport'); 
});
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.get('/suv', (req, res) => {
  res.render('suv'); 
});
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.get('/truck', (req, res) => {
  res.render('truck'); 
});
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.get('/errors', (req, res) => {
  res.render('errors'); 
});
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.get('/sedam', (req, res) => {
  res.render('sedam'); 
});
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.get('/batmobile', (req, res) => {
  res.render('batmobile-custom'); 
});
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.get('/surveillance', (req, res) => {
  res.render('surveillance-van'); 
});
/* ***********************
 * Routes
 *************************/
app.use("/", static)


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(flash());

// View engine
app.set("view engine", "ejs");
app.use("/inv", inventoryRoute);

// Routes
app.use("/inv", invRoute);


/* ***********************
 * Local Server Information
 *************************/
const port = process.env.PORT || 5500
const host = process.env.HOST || "localhost"

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`✅ App listening on http://${host}:${port}`)
})