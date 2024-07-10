import { Request, Response } from "express";
import { Error } from "sequelize";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import User from '../models/userModel';
const { User } = require("../models");
// import { User } from "../models";

const SECRET_KEY = "your_secret_key"; // Replace with your actual secret key

export async function signup(req: Request, res: Response): Promise<void> {
  try {
    const registrationInfo = req.body;
    const hashedPassword = await bcrypt.hash(registrationInfo.password, 10);
    const user = await User.create({ ...registrationInfo, password: hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password }: { email: string; password: string } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
       res.status(404).json({ error: "User not found" });
    }
    

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
       res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}


