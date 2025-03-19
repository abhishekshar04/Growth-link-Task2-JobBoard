import Button from "../../../Ui/Button";

export function JobBanner(){
    return (
        <div className="rounded-xl bg-[#f1e3d3] max-w-[800px] font-overpass flex justify-between items-center p-6">
  <div className="flex flex-col gap-4 max-w-[50%]">
    <div className="font-bold">Employers</div>
    <div className="text-2xl font-black">Looking to Post a Job?</div>
    <div className="text-xs text-gray-500 max-w-[85%]">
      Find professionals from around the world and across all skills.
    </div>
    <Button
      bgColor="bg-[#007456]"
      text="View All Jobs"
      textColor="white"
      filled={false}
      onClick={() => {}}
    />
  </div>

  <div className="max-w-[45%]">
    <img
      className="rounded-xl object-cover w-full h-auto"
      src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1742367676~exp=1742371276~hmac=4bad3825b9efac7432828b8a215d148fe5edaec2812734bac74a507e8e0532d4&w=2000"
      alt="Employers Posting Jobs"
    />
  </div>
</div>

    )
}