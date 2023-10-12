import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-cover h-64 md:h-80">
      <div className="bg-[rgb(141,72,23)] bg-opacity-60 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-serif sm:text-5xl md:text-6xl font-bold mb-4">
          ERROR - 404
        </h1>
        <p className="text-2xl font-bold mb-4">Something Wrong?</p>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="text-white font-semibold mt-3 mb-3 text-lg flex items-center gap-4 hover:text-[#653411]"
        >
          Back Home <FaGreaterThan className="text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
