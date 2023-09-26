import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className=" max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div>
          <img className="" src="https://i.ibb.co/k8MPRN7/Logo.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-6 mt-4 lg:mt-0 mb-4 lg:mb-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending text-xl font-bold"
                    : isActive
                    ? "active text-xl font-bold text-red-600 underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending font-bold text-xl"
                    : isActive
                    ? "text-red-600 font-bold  text-xl  underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending font-bold text-xl"
                    : isActive
                    ? "text-red-600 font-bold text-xl underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
