import express from "express";
import cors from "cors";
import createUserRoutes from "./config/routes/createUserRoutes.js";
import loginUserRoutes from "./config/routes/loginUserRoutes.js";
import getUserRoutes from "./config/routes/getUserRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/user", createUserRoutes);
app.use("/user", loginUserRoutes);
app.use("/user", getUserRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
