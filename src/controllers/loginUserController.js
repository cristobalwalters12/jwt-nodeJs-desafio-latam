import { byEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await byEmail({ email });
  if (!user) {
    res.status(400).json({ message: "User not found" });
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ message: "User logged", token });
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  }
};
export default Login;
