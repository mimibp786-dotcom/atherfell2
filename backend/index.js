import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// simple user storage (no database)
let users = {};

// Register or load user
app.post("/register", (req, res) => {
  const { telegramId, username } = req.body;

  if (!users[telegramId]) {
    users[telegramId] = {
      username: username || "",
      coins: 0,
      energy: 100,
      maxEnergy: 100,
    };
  }

  res.json(users[telegramId]);
});

// User taps (mines coins)
app.post("/tap", (req, res) => {
  const { telegramId } = req.body;

  if (!users[telegramId]) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = users[telegramId];

  if (user.energy <= 0) {
    return res.json({ success: false, message: "No energy left" });
  }

  user.coins += 1;
  user.energy -= 1;

  res.json(user);
});

// Get user info
app.get("/user/:telegramId", (req, res) => {
  const { telegramId } = req.params;

  if (!users[telegramId]) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(users[telegramId]);
});

app.get("/", (req, res) => {
  res.send("Atherfell backend running! (Simple mode)");
});

app.listen(3000, () => console.log("Backend running on port 3000"));
