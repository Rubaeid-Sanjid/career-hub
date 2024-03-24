import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobDataLength, setJobDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json").then((res) => res.json().then((data) => setJobs(data)));
  }, []);

  return (
    <div className="mb-12">
      <div>
        <h2 className="text-5xl text-center">Featured Jobs</h2>
        <p className="mt-5 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobs.slice(0, jobDataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={`text-center mt-12 ${
          jobDataLength === jobs.length && "hidden"
        }`}
      >
        <button
          onClick={() => {
            setJobDataLength(jobs.length);
          }}
          className="btn bg-[#7E90FE] text-white text-xl"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
