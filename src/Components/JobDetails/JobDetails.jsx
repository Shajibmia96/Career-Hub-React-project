import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
      
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    const {job_responsibility, job_description,educational_requirements} =job;
   
    return (
        <div> 
                <h1 className="text-center font-bold mb-24">Jobs Details</h1>
              <div className="grid md:grid-cols-4 gap-10 ">
              
                <div className="grid md:col-span-3 border border-teal-200">
                    <div className="p-10">
                          <h1><span className="text-xl font-semibold">Job description</span> : {job_description}</h1>
                          <h1><span className="text-xl font-semibold">job_responsibility</span>: {job_responsibility}</h1>
                          <h1><span className="text-2xl font-semibold">Educational Requirements:</span>: {educational_requirements}</h1>

                    </div>

                </div>
                <div className="grid md:col-span-1 border border-teal-200">
                <button className="btn text-[20px] font-semibold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-400">Apply Now</button>   
                </div>

                  
              </div>
        </div>
    );
};

export default JobDetails;