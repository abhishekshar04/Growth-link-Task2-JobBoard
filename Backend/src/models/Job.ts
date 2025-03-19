import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  description: string;
  salary: number;
  category: string;
  recruiter: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const JobSchema: Schema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Number, required: true },
    category: { type: String, required: true },
    recruiter: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter", required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model<IJob>("Job", JobSchema);
