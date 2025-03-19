import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jobseeker, Jobseeker, Recruiter } from "../models/User";

const generateToken = (email: string, password: string) => {
  return jwt.sign({ email, password }, process.env.JWT_SECRET as string, { expiresIn: "30d" });
};

// jobseeker Signup
export async function registerjobseeker (req: Request, res: Response) {
  const {name, email, password, skills, education, experience} = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Please enter all fields" });
  }else{
    try{
      const user = await Jobseeker.findOne({ email });
      if(user){
        res.status(400).json({ message: "Jobseeker already exists" });
      }else{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newJobseeker = new Jobseeker({
          name,
          email,
          password: hashedPassword,
          skills: skills || [],
          education: education || [],
          experience: experience || []
        });
        await newJobseeker.save();
        const token = generateToken(email, password);
        res.status(200).json({ 
          message: "Jobseeker registered successfully",
          token:token 
        });
      }
    }catch(err){
      res.status(500).json({ message: "Server Error" });
    }
  }
};

// Recruiter Signup
export async function registerRecruiter (req: Request, res: Response) {
  const {name, email, password, company} = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Please enter all fields" });
  }
  else{
    try{
      const user = await Recruiter.findOne({ email });
      if(user){
        res.status(400).json({ message: "Recruiter already exists" });
      }else{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newRecruiter = new Recruiter({
          name,
          email,
          password: hashedPassword,
          company
        });
        await newRecruiter.save();
        const token = generateToken(email, password);
        res.status(200).json({ 
          message: "Recruiter registered successfully",
          token:token 
        });
      }
    }catch(err){
      res.status(500).json({ message: "Server Error" });
    }
  }
};

// User Login
export async function loginUser (req: Request, res: Response) {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Please enter all fields" });
  }
  else{
    try{
      const user = await Jobseeker.findOne({ email });
      if(user){
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
          const token = generateToken(email, password);
          res.status(200).json({ 
            message: "Jobseeker logged in successfully",
            token:token 
          });
        }else{
          res.status(400).json({ message: "Invalid Credentials" });
        }
      }else{
        const user = await Recruiter.findOne({ email });
        if(user){
          const isMatch = await bcrypt.compare(password, user.password);
          if(isMatch){
            const token = generateToken(email, password);
            res.status(200).json({ 
              message: "Recruiter logged in successfully",
              token:token  
            });
          }else{
            res.status(400).json({ message: "Invalid Credentials" });
          }
        }else{
          res.status(400).json({ message: "User does not exist" });
        }
      }
    }catch(err){
      res.status(500).json({ message: "Server Error" });
    }
  }
};
