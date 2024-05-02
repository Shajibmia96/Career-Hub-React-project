import { NavLink } from "react-router-dom";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
         Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Jobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
           Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="AppliedJobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="BLog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
        Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <a className=" text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <a className="">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
