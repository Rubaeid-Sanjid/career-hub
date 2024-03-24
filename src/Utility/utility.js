const getStoredApplication = () =>{
    const storedApplication = localStorage.getItem('job-application');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return []
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredApplication();

    const isIdExist = storedJobApplications.find(jobId => jobId === id);
    if(!isIdExist){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
    }
}

export {getStoredApplication, saveJobApplication}