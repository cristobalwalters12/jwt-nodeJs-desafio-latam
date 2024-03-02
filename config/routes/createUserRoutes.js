import express from "express";
import createUserjwt from "../../src/controllers/createUserController.js";

const router = express.Router();

router.post("/usuarios", createUserjwt);

export default router;
