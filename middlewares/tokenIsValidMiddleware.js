import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(400).json({ message: "Token no encontrado" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log();
    res.status(400).json({ message: "Token inválido" });
  }
};

export default validateToken;
