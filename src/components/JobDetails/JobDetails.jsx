import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  const { id } = useParams();
  const job = jobDetails.find((job) => job.id == id);

  const handleAppliedJob = () => toast("You have applied successfully");

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center mt-12">
        Job Details {jobDetails.length}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
        <div className="font-medium text-[#757575]">
          <h2 className="mt-6">
            <span className="text-[#1A1919] font-extrabold">
              Job Description:
            </span>{" "}
            {job.job_description}
          </h2>
          <h2 className="mt-6">
            <span className="text-[#1A1919] font-extrabold">
              Job Responsibility:
            </span>{" "}
            {job.job_responsibility}
          </h2>
          <h2 className="mt-6">
            <span className="text-[#1A1919] font-extrabold">
              Educational Requirements:
            </span>{" "}
            {job.educational_requirements}
          </h2>
          <h2 className="mt-6">
            <span className="text-[#1A1919] font-extrabold">Experiences:</span>{" "}
            {job.experiences}
          </h2>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Job Details</h2>
            <div className="py-4 border-t-2">
              <h2 className="mt-3">
                <span className="text-[#1A1919] font-extrabold">Salary: </span>
                {job.salary}
              </h2>
              <h2 className="mt-3">
                <span className="text-[#1A1919] font-extrabold">
                  Job Title:{" "}
                </span>
                {job.job_title}
              </h2>
            </div>
            <h2 className="card-title">Contact Information</h2>
            <div className="py-4 border-t-2">
              <h2 className="mt-3">
                <span className="text-[#1A1919] font-extrabold">Phone: </span>
                {job.contact_information.phone}
              </h2>
              <h2 className="mt-3">
                <span className="text-[#1A1919] font-extrabold">Email: </span>
                {job.contact_information.email}
              </h2>
              <h2 className="mt-3">
                <span className="text-[#1A1919] font-extrabold">Address: </span>
                {job.contact_information.address}
              </h2>
            </div>
            <div className="card-actions">
              <button
                onClick={handleAppliedJob}
                className="w-full btn bg-[#7E90FE] text-white text-xl"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
