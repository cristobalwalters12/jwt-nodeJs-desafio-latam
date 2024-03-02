const verifyCredentials = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan credenciales" });
  }
  next();
};

export default verifyCredentials;
