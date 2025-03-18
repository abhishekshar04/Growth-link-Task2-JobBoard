import PrimaryCard from "../../../Ui/PrimaryCard"
import JobCategoryCard from "../../../Ui/JobCategoryCard"
export default function TrendingCategory() {
    return (
        <div className="font-overpass flex flex-col items-center gap-15">
            <div className="flex gap-4">
                <PrimaryCard />
                <PrimaryCard />
            </div>
            <div className="flex flex-col items-center">
                <div className="text-xl">WORK ANYWHERE</div>
                <div className="text-4xl font-bold">Trending Category</div>
            </div>
            <div className="flex gap-4">
                <JobCategoryCard />
                <JobCategoryCard />
                <JobCategoryCard />
                <JobCategoryCard />
            </div>
        </div>
    )
}