import mongoose, { Schema, Document } from "mongoose";

export interface jobseeker extends Document {
  name: string;
  email: string;
  password: string;
  skills: string[];
  education: string[];
  experience: string[];
}

export interface recruiter extends Document {
  name: string;
  email: string;
  password: string;
  company: string;
}


const jobseeker: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skills: [{ type: String }],
  education: [{ type: String }],
  experience: [{ type: String }]
})

const recruiter: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  company: { type: String}
})

const Jobseeker = mongoose.model<jobseeker>("Jobseeker", jobseeker);
const Recruiter = mongoose.model<recruiter>("Recruiter", recruiter);

export { Jobseeker, Recruiter };
