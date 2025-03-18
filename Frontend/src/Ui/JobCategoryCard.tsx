import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const JobCategoryCard = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-2xl shadow-md w-64">
      <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
        <FontAwesomeIcon icon={faCode} className="text-white text-lg" />
      </div>
      <h2 className="text-lg font-semibold mt-3">Development & IT</h2>
      <p className="text-gray-600 text-sm">22 jobs</p>
      <p className="text-gray-500 text-sm mt-1">
        Frontend, Backend, Web and app developer jobs.
      </p>
    </div>
  );
};

export default JobCategoryCard;
