import express from "express";
import { protect } from "../middleware/authMiddleware";
import { createJob, getJobs, getJobById, updateJob, deleteJob } from "../controllers/jobcontroller";

const jobRouter = express.Router();

jobRouter.route('/').get(getJobs).post(protect, createJob);
jobRouter.route('/:id').get(getJobById).put(protect, updateJob).delete(protect, deleteJob);

export default jobRouter;
