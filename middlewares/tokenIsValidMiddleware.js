import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(400).json({ message: "Token no encontrado" });
  }
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Token inválido" });
    }
    req.user = decoded;
    next();
  });
};
export default validateToken;
