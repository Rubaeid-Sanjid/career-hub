
import PropTypes from 'prop-types';

const Job = ({job}) => {
    const {logo, job_title, company_name} = job;
    return (
        <div>
            <div className=''>
                {<img className='h-24 w-32' src={logo} alt="" />}
            </div>
            <h2>{job_title}</h2>
            <h3>{company_name}</h3>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
};

export default Job;