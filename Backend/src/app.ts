import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AllRoutes from "./routes/index.route";
dotenv.config({
    path: './.env'
});

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN,
}));
app.use('/api', AllRoutes);
export {app};