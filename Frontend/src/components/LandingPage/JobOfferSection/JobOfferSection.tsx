import Button from "../../../Ui/Button";
import JobCard from "../../../Ui/JobCard";

export default function JobOfferSection() {
    return (
        <div className="font-overpass flex flex-col items-center gap-15 py-15">
            <div className="flex flex-col items-center">
                <div className="text-xl">FEATURED JOBS</div>
                <div className="text-4xl font-bold">Current Job Offers</div>
            </div>
            <div className="flex gap-10 flex-wrap justify-center">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <div>
                <Button bgColor="bg-[#007456]" text="View All Jobs" textColor="white" filled={false} onClick={() => {}} />
            </div>
        </div>
    )
}