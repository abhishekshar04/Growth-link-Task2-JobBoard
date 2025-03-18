import { NavBar } from "../../NavBar/NavBar"
import TopSection from "./TopSection"

interface Props {}

function HeroSection(props: Props) {
    const {} = props

    return (
      <>
        <div>
            <NavBar />
            <hr className="text-gray-200" />
            <TopSection />
        </div>
      </>
    )
}

export default HeroSection
