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
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/notes", require("./routes/notes.routes"));

module.exports = app;
