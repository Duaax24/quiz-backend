const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Scores speichern
let scores = [];

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend läuft!");
});

// SCORE SPEICHERN
app.post("/score", (req, res) 