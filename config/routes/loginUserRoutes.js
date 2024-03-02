import express from "express";
import Login from "../../src/controllers/loginUserController.js";
import verifyCredentials from "../../middlewares/validUserDataMiddleware.js";
const router = express.Router();

router.post("/login", verifyCredentials, Login);

export default router;
