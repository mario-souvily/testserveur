import cors from "cors";
import "dotenv/config.js";
import express from "express";

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
