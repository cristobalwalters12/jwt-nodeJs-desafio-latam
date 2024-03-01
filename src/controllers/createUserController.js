import { createUser, byEmail } from "../models/userModel";

const createUser = async (req, res) =>{
    const { email, password, role, lenguaje } = req.body;
    const user = await byEmail({ email });
    if (user) {
        res.status(400).json({ message: "User already exists" });
    } else {
        const newUser = await createUser({ email, password, role, lenguaje });
        res.status(201).json({ message: "User created", user: newUser });
    }       
}

export default {Login};