
import express from "express";
import {createUser} from "../../src/controllers/createUserController"

const router = express.Router();

router.post("/", createUser);

export default router;