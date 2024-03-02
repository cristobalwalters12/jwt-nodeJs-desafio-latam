import Express from "express";
import getUser from "../../src/controllers/getUserController.js";
import validateToken from "../../middlewares/tokenIsValidMiddleware.js";

const router = Express.Router();

router.get("/usuarios", validateToken, getUser);
export default router;
