import { Router } from "express";
import authRouter from "./auth.route";

const AllRoutes = Router();

AllRoutes.use("/auth", authRouter);

export default AllRoutes;