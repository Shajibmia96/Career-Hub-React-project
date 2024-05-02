import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LeyOut/MainLayOut";
import Statistics from "../Pages/Statistics";
import AppliedJobs from "../Pages/AppliedJobs";
import Blog from "../Pages/Blog";

const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path : '/',
                element: <Statistics></Statistics>
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