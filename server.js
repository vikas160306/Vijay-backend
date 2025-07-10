const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vijay Annaya is online and waiting for Chinnu! 💚");
});

app.post("/chat", async (req, res) => {
  // Your OpenAI request code
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
