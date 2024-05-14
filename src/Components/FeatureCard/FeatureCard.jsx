const FeatureCard = ({jobs}) => {
      const {logo,job_title, salary,job_type, location,remote_or_onsite,company_name,}= jobs;

    return (
        <div>
    <div className="card  bg-base-100 shadow-2xl">
  <figure><img className="mt-4" src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className="text-5xl">{company_name}</p>
    <div>
         <button className="py-2 px-4 border border-[#7E90FE] font-extrabold rounded text-[#7E90FE]">{job_type}</button>
         <button className=" ml-4 py-2 px-4 border border-[#7E90FE] font-extrabold rounded text-[#7E90FE]">{remote_or_onsite}</button>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FeatureCard;