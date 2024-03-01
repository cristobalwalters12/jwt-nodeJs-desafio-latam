import { byEmail } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const getUserwhereTokenIsValid = async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(400).json({ message: "Token not found" });
  } else {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        res.status(400).json({ message: "Invalid token" });
      } else {
        const user = await byEmail({ email: decoded.email });
        res.status(200).json({ message: "Token is valid", user });
      }
    });
  }
};

export default getUserwhereTokenIsValid;
