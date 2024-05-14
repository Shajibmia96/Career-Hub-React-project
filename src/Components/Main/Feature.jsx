import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Feature = () => {

      const [feature , setFeature] = useState([])

      const [dataLength , setDataLength] = useState(4)


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

             <div className=" grid gap-5 md:grid-cols-2 my-5  justify-center items-center ">
                 {
                    feature.slice(0, dataLength).map(jobs => <FeatureCard key={jobs.id} jobs={jobs}></FeatureCard>)
                 }
                
             </div>
            <div className={dataLength === feature.length && 'hidden'}>
            <button 
            onClick={()=>setDataLength(feature.length)}
            className="btn  text-[20px] font-semibold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-400">Show all data</button>
            </div>
        </div>
    );
};

export default Feature;