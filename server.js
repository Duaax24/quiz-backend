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
app.post("/score", (req, res) => {
  const { name, score } = req.body;

  scores.push({
    name,
    score
  });

  // Nach Score sortieren
  scores.sort((a, b) => b.score - a.score);

  res.json({
    success: true
  });
});

// LEADERBOARD LADEN
app.get("/leaderboard", (req, res) => {
  res.json(scores);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server läuft auf Port " + PORT);
});