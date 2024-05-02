import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LeyOut/MainLayOut";
import Statistics from "../Pages/Statistics";
import AppliedJobs from "../Pages/AppliedJobs";
import Blog from "../Pages/Blog";
import Error from "../Components/Error/Error";
import Jobs from "../Pages/Jobs";

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
                path : 'Jobs',
                element: <Jobs></Jobs>
            },
            {
                path : "/AppliedJobs",
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: "/Blog",
                element: <Blog></Blog>

            }
        ]
        
    }
])

export default myCreateRoute;