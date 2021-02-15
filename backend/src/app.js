/*  */

const express = require("express");
const cors = require("cors");

const app = express();

//config
app.set("port", process.env.PORT || 3000);

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/api/users", (req, res) => res.send("Hola users"));
app.get("/api/notes", (req, res) => res.send("Hola notes"));

module.exports = app;
