import Aside from "../component/Aside";
import { Outlet } from "react-router-dom";
const MainInterface = () => {
  return (
    <div className="lgs:grid lgs:grid-cols-home-grid px-0 relative py-2 lgs:px-2 lgs:pr-6 pt-[2.5rem] ">
      <Aside style="hidden sticky top-0 lgs:grid" />
      <section className="bg-transparent shadow-dashboard self-start lgs:bg-white p-0 lgs:p-3 rounded-md">
        <div className="bg-dark-bg rounded-md p-3 lgs:p-4">
          <div className="bg-white py-2 ">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainInterface;
