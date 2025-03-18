import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHeart } from "@fortawesome/free-solid-svg-icons";

const JobCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-96 border flex flex-col gap-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            netomi
          </div>
          <div>
            <h2 className="text-lg font-semibold">Chief of Staff</h2>
            <p className="text-gray-500 text-sm">
              by <span className="font-medium">Nightfall</span> in{" "}
              <span className="text-green-600 font-medium">Development & IT</span>
            </p>
          </div>
        </div>
        {/* Icons */}
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faBolt} className="text-red-500 text-lg" />
          <FontAwesomeIcon icon={faHeart} className="text-gray-400 text-lg" />
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mt-2">
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
          Full Time
        </span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
          San California
        </span>
        <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs font-medium">
          $20 - $40/month
        </span>
      </div>

      {/* Footer */}
      <p className="text-green-600 font-medium text-sm mt-1">
        225 days left to apply
      </p>
    </div>
  );
};

export default JobCard;
