import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/utility";
import AppliedJob from "../AppliedJob/AppliedJob";

const ApliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]) 

    useEffect(()=>{
        const storedJobId = getStoredApplication();

        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobId.includes(job.id));
            setAppliedJobs(jobsApplied);
        }
    },[])
    return (
            <div className="my-12">
                {
                    appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
    );
};

export default ApliedJobs;