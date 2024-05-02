import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center gap-10 items-center h-screen">
              <h1 className="text-5xl text-red-500" >Oops!  Data can't fount </h1>

              <button className="btn bg-secondary">
                <NavLink to={'/'}
                >
                    Go to back home
                </NavLink>
              </button>
        </div>
    );
};

export default Error;