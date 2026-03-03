import { Request, Response } from "express";
import { signupService } from "../services/authServices";

export const signupController = async(req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required" });
        }
        const user = await signupService(name, email, password);
        if (!user) {
            return res.status(409).json({ message: "User with this email already exists" });
        }
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error });
    }
};
