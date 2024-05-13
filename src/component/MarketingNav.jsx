import { NavLink } from "react-router-dom";

const MarketingNav = () => {
  return (
    <div className="min-h-[49px] flex gap-4 flex-wrap p-4 md:justify-center lg:gap-8 border font-semibold border-[#E9E9E9] shadow-campaign-header rounded-[5px] ">
      <div className="group">
        <NavLink to="/marketing/new-email-campaign">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span>New Email Campaign</span>
            <img
              src="/arrow-down.png"
              className="group-has-[.active]:block hidden"
              alt=""
            />
          </p>
        </NavLink>
      </div>
      <div className="group">
        <NavLink to="/marketing/list-of-email-campaign">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span> Campaign History</span>
            <img
              src="/arrow-down.png"
              className="group-has-[.active]:block hidden"
              alt=""
            />
          </p>
        </NavLink>
      </div>
      <div className="group">
        <NavLink to="/marketing/new-shipment">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span> New Shipment</span>
            <img
              src="/arrow-down.png"
              className="group-has-[.active]:block hidden"
              alt=""
            />
          </p>
        </NavLink>
      </div>
      <div className="group">
        <NavLink to="/marketing/list-of-automatic-shipment">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span> Shipment Lists</span>
            <img
              src="/arrow-down.png"
              className="group-has-[.active]:block hidden"
              alt=""
            />
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default MarketingNav;
