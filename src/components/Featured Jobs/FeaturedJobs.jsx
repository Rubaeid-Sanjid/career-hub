import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then((res) => res.json().then((data) => setJobs(data)));
  }, []);

  return (
    <div className="mb-10 container mx-auto p-24">
      <div>
        <h2 className="text-5xl text-center">Featured Jobs</h2>
        <p className="mt-5 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {
            jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
