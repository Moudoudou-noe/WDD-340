/******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
require("dotenv").config()
const app = express()
const static = require("./routes/static")

/* ***********************
 * Middleware
 *************************/
app.use(express.static("public")) // sert les fichiers statiques (css, js, images, etc.)
app.set("view engine", "ejs") // configure EJS comme moteur de vues

/* ***********************
 * Routes
 *************************/
app.use("/", static)

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