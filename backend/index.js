import express from "express";
import cors from "cors";
import { sequelize } from "./database/index.js"; 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

sequelize.sync({ alter: true });

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  