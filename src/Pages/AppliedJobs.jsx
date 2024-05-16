import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GetStoragesJobsApplication } from "../Components/LocalStoages/LocalStoages";
import Applied from "../Components/Applied/Applied";

const AppliedJobs = () => {
  const Jobs = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);

  useEffect(() => {
    const storedId = GetStoragesJobsApplication();

    if (Jobs.length > 0) {
      // const appliedId = Jobs.filter(job => storedId.includes(job.id))
      // console.log(appliedId ,"Hello" )
      const appliedJobs = [];

      for (const id of storedId) {
        const job = Jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }

      setJobApplied(appliedJobs);
    }
  }, []);

  return (
    <div>
      <h1>
        Applied Jobs : <span className="text-3xl">{jobApplied.length}</span>
      </h1>
      <div className=" flex justify-end ">
        <details className="dropdown">
          <summary className="m-1 btn bg-gradient-to-r from-orange-200  to-pink-500">Filter by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Remote</a>
            </li>
            <li>
              <a>OnSIte</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="gap-5">
        {jobApplied.map((applied) => (
          <Applied key={applied.id} applied={applied}></Applied>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
