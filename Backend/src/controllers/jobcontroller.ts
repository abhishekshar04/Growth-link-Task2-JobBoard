import { Request, Response } from "express";
import Job, { IJob } from "../models/Job";

// Create a Job (Recruiters only)
export async function createJob (req: Request, res: Response) {
  // @ts-ignore
  const role = req.user.role;
  if(role === "recruiter"){
    const { title, description, location, salary,category,company } = req.body;
    if (!title || !description || !location || !salary) {
      res.status(400).json({ message: "Please enter all fields" });
    }
    else{
      try{
        const newJob = new Job({
          title,
          description,
          location,
          salary,
          company: company || "",
          category: category || "Others",
          // @ts-ignore
          recruiter: req.user._id
        });
        await newJob.save();
        res.status(200).json({ message: "Job created successfully", job: newJob });
      }catch(err){
        res.status(500).json({ message: "Server Error" });
      }
    }
  }else{
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Get All Jobs
export async function getJobs(req: Request, res: Response) {
  try{
    const jobs = await Job.find();
    res.status(200).json(jobs);
  }
  catch(err){
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a Single Job
export async function getJobById (req: Request, res: Response) {
  const id = req.params.id;
  try{
    const job = await Job.findById(id);
    if(job){
      res.status(200).json(job);
    }else{
      res.status(404).json({ message: "Job not found" });
    }
  }
  catch(err){
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a Job (Recruiters only)
export async function updateJob (req: Request, res: Response) {
    
};
  

// Delete a Job (Recruiters only)
export async function deleteJob(req: Request, res: Response) {
  
};
