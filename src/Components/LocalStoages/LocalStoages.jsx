const GetStoragesJobsApplication = ()=>{
    const StoragesJobsApplication = localStorage.getItem('jobs-application')
    if (StoragesJobsApplication){
        return JSON.parse(StoragesJobsApplication);
    }
    return [];
}

 const SaveStorageApplication = (id) =>{
    const StorageApplications = GetStoragesJobsApplication()
    const Exists = StorageApplications.find(JobId => JobId === id)
    if(!Exists){
             StorageApplications.push(id)
             localStorage.setItem('jobs-application', JSON.stringify(StorageApplications))
    } 
       
}


export {GetStoragesJobsApplication, SaveStorageApplication}