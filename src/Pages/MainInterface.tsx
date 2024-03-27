// import AllProducts from "../component/AllProducts";
import Aside from "../component/Aside";
import { Outlet } from "react-router-dom";
const MainInterface = () => {
  return (
    <div className="lg:grid lg:grid-cols-home-grid px-0 py-2 lg:px-2 pt-[2.5rem] ">
      <Aside />
      <section className="bg-transparent shadow-dashboard lg:bg-white p-0 lg:p-3 rounded-md">
        <div className="bg-dark-bg rounded-md p-3 lg:p-4">
          <div className="bg-white py-2 ">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainInterface;