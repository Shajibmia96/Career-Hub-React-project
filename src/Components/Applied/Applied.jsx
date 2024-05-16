import { Link } from "react-router-dom";

const Applied = ({applied}) => {
              console.log(applied)
              const {id,experiences, job_title,job_type,location,logo,} = applied;
    return (
        <div className="mb-5">
    <div className="card card-side  bg-base-100 shadow-2xl">
  <figure><img src={logo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{experiences}</p>
    <p>{job_type}</p>
    <p>{location}</p>
    <div className="card-actions  justify-end">
    <Link to={`/job/${id}`}>
      <button className="btn text-[20px] font-semibold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-400">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Applied;