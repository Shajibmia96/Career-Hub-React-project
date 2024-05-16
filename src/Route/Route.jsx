import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LeyOut/MainLayOut";
import Statistics from "../Pages/Statistics";
import AppliedJobs from "../Pages/AppliedJobs";
import Blog from "../Pages/Blog";
import Error from "../Components/Error/Error";
import Jobs from "../Pages/Jobs";
import JobDetails from "../Components/JobDetails/JobDetails";

const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children:[
            {
                path : '/',
                element: <Statistics></Statistics>
            },
            {
                path : '/Jobs',
                element: <Jobs></Jobs>
            },
            {
                path : "/job/:id",
                element: <JobDetails></JobDetails>,
                loader : () => fetch("../../public/jobs.json")
                
            },
            {
                path : "/AppliedJobs",
                element: <AppliedJobs></AppliedJobs>,
                loader : () => fetch('../../public/jobs.json')

            },
            {
                path: "/Blog",
                element: <Blog></Blog>

            }
        ]
        
    }
])

export default myCreateRoute;