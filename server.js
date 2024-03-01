import express from "express";
import cors from "cors";
import createUserRoutes from "./config/routes/createUserRoutes.js";
import  loginUserRoutes from "./config/routes/loginUserRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/createUser", createUserRoutes);
app.use("/loginUser", loginUserRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});