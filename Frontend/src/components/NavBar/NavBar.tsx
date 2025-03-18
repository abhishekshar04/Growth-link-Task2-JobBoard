import Button from "../../Ui/Button"

export const NavBar = () => {
   return (
    <div className="flex justify-between items-center py-4 font-overpass ">
        <div className="text-[50px] text-[#007456] font-bold">
            Jobber
        </div>
        <div>
            <ul className="flex gap-8 items-center">
                <li>Home</li>
                <li>Companies</li>
                <li>Candidates</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <ul>
                <Button bgColor="white" text="Get Started" textColor="black" filled={true} onClick={() => {}} />
                <Button bgColor="bg-[#007456]" text="Post a Job" textColor="white" filled={false} onClick={() => {}} />
            </ul>
        </div>
    </div>
   ) 
}