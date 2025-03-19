import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  job: mongoose.Schema.Types.ObjectId;
  applicant: mongoose.Schema.Types.ObjectId;
  status: "pending" | "reviewed" | "shortlisted" | "rejected";
  appliedAt: Date;
}

const ApplicationSchema: Schema = new Schema<IApplication>(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "Jobseeker", required: true },
    status: { type: String, enum: ["pending", "reviewed", "shortlisted", "rejected"], default: "pending" },
    appliedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model<IApplication>("Application", ApplicationSchema);
