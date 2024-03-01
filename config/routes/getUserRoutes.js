import Express from "express";
import getUserwhereTokenIsValid from "../../src/controllers/getUserController.js";

const router = Express.Router();

router.get("/getUsuario", getUserwhereTokenIsValid);
export default router;
