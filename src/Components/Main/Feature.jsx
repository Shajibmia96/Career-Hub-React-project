import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Feature = () => {

      const [feature , setFeature] = useState([])

          useEffect(()=>{
                     fetch('jobs.json')
                     .then(res=> res.json())
                     .then(data => setFeature(data))
          }, [])
    //    console.log(feature)
    return (
        <div>
             <div  className="text-center">
             <h2 className="text-5xl pb-4 ">Featured Jobs : {feature.length}</h2>
             <p className="pb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
             </div>

             <div className=" grid gap-5 md:grid-cols-2  justify-center items-center ">
                 {
                    feature.map(jobs => <FeatureCard key={jobs.id} jobs={jobs}></FeatureCard>)
                 }
                
             </div>
        </div>
    );
};

export default Feature;