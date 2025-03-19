import { Router } from "express";
import { loginUser, registerRecruiter, registerjobseeker } from "../controllers/authcontroller";

const authRouter = Router();

authRouter.post("/jobseeker/register", registerjobseeker);
authRouter.post("/recruiter/register", registerRecruiter);
authRouter.post("/login", loginUser);

export default authRouter;