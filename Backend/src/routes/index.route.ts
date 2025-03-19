import { Router } from "express";
import authRouter from "./auth.route";
import jobRouter from "./job.route";
const AllRoutes = Router();

AllRoutes.use("/auth", authRouter);
AllRoutes.use("/job", jobRouter);
export default AllRoutes;