import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Recruiter, Jobseeker } from "../models/User";

interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    if (!token) {
        res.status(401).json({ message: "No token, authorization denied" });
    }else{
        try{
            const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string);
            // @ts-ignore
            const jobseeker = await Jobseeker.findOne({ email: decoded.email });
            if(jobseeker){
                req.user = jobseeker;
                req.user.role = "jobseeker";
                next();
            }else{
                // @ts-ignore
                const recruiter = await Recruiter.findOne({ email: decoded.email });
                if(recruiter){
                    req.user = recruiter;
                    req.user.role = "recruiter";
                    next();
                }else{
                    res.status(401).json({ message: "Invalid token" });
                }
            }
        }catch(err){
            res.status(500).json({ message: "Server Error" });
        }
    }
};
