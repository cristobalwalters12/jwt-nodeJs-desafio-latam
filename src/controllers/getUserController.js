import { byEmail } from "../models/userModel.js";

const getUser = async (req, res) => {
  const user = await byEmail({ email: req.user.email });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "Token is valid", user });
  }
};

export default getUser;
