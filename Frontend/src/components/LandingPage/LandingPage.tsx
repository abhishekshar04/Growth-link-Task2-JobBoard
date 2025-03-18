import HeroSection from "./HeroSection/HeroSection";
import JobOfferSection from "./JobOfferSection/JobOfferSection";
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
        </>
    );
}