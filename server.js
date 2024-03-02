import express from "express";
import cors from "cors";
import createUserRoutes from "./config/routes/createUserRoutes.js";
import loginUserRoutes from "./config/routes/loginUserRoutes.js";
import getUserRoutes from "./config/routes/getUserRoutes.js";
import logRequests from "./middlewares/loggerMiddleware.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logRequests);
app.use("", createUserRoutes);
app.use("", loginUserRoutes);
app.use("", getUserRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
