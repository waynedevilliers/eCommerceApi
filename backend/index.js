import express from "express";
import cors from "cors";
import sequelize  from "./database/index.js"; 
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();
const PORT = 3000;

// middlewares
app.use(cors());
app.use(express.json());

// routes 
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);

// sync database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synchronized."))
  .catch((err) => console.error("Database synchronization failed:", err));

  //base route
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  