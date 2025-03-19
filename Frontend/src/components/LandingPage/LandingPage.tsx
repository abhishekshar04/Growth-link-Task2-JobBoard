import HeroSection from "./HeroSection/HeroSection";
import { JobBanner } from "./JobBanner/JobBanner";
import JobLocations from "./JobLocations/JobLocations";
import JobOfferSection from "./JobOfferSection/JobOfferSection";
// import { StepSection } from "./StepSection/StepSection";
import TrendingCategory from "./Trending/TrendingCategory";
export default function LandingPage() {
    return (
        <>
            <div className="bg-[#ECF2F0] min-h-screen px-40 font-overpass">
                <HeroSection />
            </div>
            <div className="min-h-screen px-40">
                <div className="py-20 px-20">
                    <TrendingCategory />
                </div>
            </div>
            <div className="min-h-screen px-40">
                <JobOfferSection />
            </div>
            <div className="min-h-screen px-40">
                <div className="py-10 flex flex-col justify-center items-center gap-12">
                <JobBanner />
                <div className="font-overpass flex flex-col justify-between items-center">
                    <div className="text-xl">Work Anywhere</div>
                    <div className="text-4xl font-bold">Popular Cities</div>
                </div>
                <JobLocations />
                </div>
            </div>
        </>
    );
}