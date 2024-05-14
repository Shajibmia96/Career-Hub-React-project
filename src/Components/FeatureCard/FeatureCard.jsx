import { MdAddLocationAlt } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeatureCard = ({jobs}) => {
      const {id,logo,job_title, salary,job_type, location,remote_or_onsite,company_name,}= jobs;

    return (
        <div>
    <div className="card  text-[#757575] bg-base-100 shadow-2xl">
  <figure><img className="mt-4" src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className="text-5xl">{company_name}</p>
    <div>
         <button className="py-2 px-4 border border-[#7E90FE] font-extrabold rounded text-[#7E90FE]">{job_type}</button>
         <button className=" ml-4 py-2 px-4 border border-[#7E90FE] font-extrabold rounded text-[#7E90FE]">{remote_or_onsite}</button>
    </div>

        <div className="flex gap-6 my-6">
              <h1 className="text-2xl flex font-semibold items-center gap-1"><MdAddLocationAlt/> {location}</h1>
              <h1 className="text-2xl flex font-semibold items-center gap-1"><CiDollar/> {salary}</h1>
        </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn text-[20px] font-semibold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-400">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default FeatureCard;