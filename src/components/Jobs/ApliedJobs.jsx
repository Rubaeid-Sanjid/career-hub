import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/utility";
import AppliedJob from "../AppliedJob/AppliedJob";

const ApliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayAppliedJob, setDisplayAppliedJob] = useState([]);

  const handleFilter = (filter) =>{
        if(filter === 'All'){
            setDisplayAppliedJob(appliedJobs)
        }
        else if(filter === 'Remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayAppliedJob(remoteJobs)
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayAppliedJob(onsiteJobs)
        }
       
  }

  useEffect(() => {
    const storedJobId = getStoredApplication();

    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      setAppliedJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="my-12">
        <div className="flex justify-end">
        <details className="dropdown">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleFilter('All')}>
              <a>All</a>
            </li>
            <li onClick={()=>handleFilter('Remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handleFilter('Onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
        </div>
      <div>
        {displayAppliedJob.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default ApliedJobs;
