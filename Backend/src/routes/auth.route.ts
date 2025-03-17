import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authcontroller";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

export default authRouter;