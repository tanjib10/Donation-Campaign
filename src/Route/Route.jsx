import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";

const Route = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Route;
