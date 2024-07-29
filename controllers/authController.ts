import { Request, Response } from "express";
import { Error } from "sequelize";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { User } = require("../models");

const SECRET_KEY = "your_secret_key"; // Replace with your actual secret key

export async function signup(req: Request, res: Response): Promise<void> {
  try {
    const registrationInfo = req.body;
    const hashedPassword = await bcrypt.hash(registrationInfo.password, 10);
    const user = await User.create({
      ...registrationInfo,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password }: { email: string; password: string } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
          expiresIn: "1h",
        });
        const sendUserObject = {
          userId: user.id,
          email: user.email,
          userType: user.type,
        };
        res
          .status(200)
          .json({ message: "Login successful", token, sendUserObject });
      } else {
        res.status(401).json({ error: "Invalid password" });
      }
    } else {
      res.status(404).json({ error: "User not Found! Please SignUp" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}


export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { username, email, type, address } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username;
    user.email = email;
    user.type = type;
    user.address = address;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};
