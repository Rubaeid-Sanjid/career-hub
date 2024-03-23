import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="">
        <img className="w-52" src={logo} alt="" />
      </figure>
      <div className="card-body flex-grow">
        <h2 className="card-title text-2xl font-extrabold">{job_title}!</h2>
        <p className="text-xl font-bold">{company_name}</p>
        <div className="text-[#7E90FE] font-extrabold">
          <button className="px-5 py-2 border-2 rounded-md mr-6">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 border-2 rounded-md mr-6">
            {job_type}
          </button>
        </div>
        <div className="flex gap-2 items-center text-xl">
          <CiLocationOn />
          <h3>{location}</h3>
          <CiDollar />
          <h3>{salary}</h3>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#7E90FE] text-white text-xl">View Details</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
