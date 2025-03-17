import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "30d" });
};

// User Signup
export async function registerUser (req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser: IUser = await User.create({ name, email, password: hashedPassword, role });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        token: generateToken(newUser._id as string),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// User Login
export async function loginUser (req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) res.status(400).json({ message: "Invalid email or password" });

    if(user){
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: user?._id,
      name: user?.name,
      email: user?.email,
      role: user?.role,
      token: generateToken(user?._id as string),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
