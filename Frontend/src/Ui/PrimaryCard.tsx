import Button from "./Button";
import image from '../man-reading-concept-illustration.png'
export default function PrimaryCard(){
    return (
        <div className="bg-red-100 p-10 rounded-xl max-h-[200px] flex justify-between items-center">
            <div className="max-w-[80%] flex flex-col gap-4">
                <div className="text-3xl">For Employers</div>
                <div className="text-sm">Find professionals from around the world and access all skills</div>
                <Button bgColor="bg-[#007456]" text="Post a Job" textColor="white" filled={true} onClick={() => {}} />
            </div>
            <div className="max-w-[30%]">
                <img src={image} alt="" />
            </div>
        </div>
    )
}