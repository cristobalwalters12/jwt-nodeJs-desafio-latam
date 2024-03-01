import { createUser, byEmail } from "../models/userModel.js";

const createUserjwt = async (req, res) => {
  const { email, password, rol, lenguage } = req.body;
  const user = await byEmail({ email });
  if (user) {
    res.status(400).json({ message: "User already exists" });
  } else {
    const newUser = await createUser({ email, password, rol, lenguage });
    res.status(201).json({ message: "User created", user: newUser });
  }
};

export default createUserjwt;
