import express from "express";
import createUserjwt from "../../src/controllers/createUserController.js";

const router = express.Router();

router.post("/createUser", createUserjwt);

export default router;
