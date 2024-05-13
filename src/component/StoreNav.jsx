import { NavLink } from "react-router-dom";

const StoreNav = () => {
  return (
    <div className="min-h-[49px] flex gap-4 flex-wrap p-4 md:justify-center lg:gap-8 border font-semibold border-[#E9E9E9] shadow-campaign-header rounded-[5px] ">
      <div className="group">
        <NavLink to="/store/payment-methods">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span>Payment Method</span>
            <img
              src="/arrow-down.png"
              className="group-has-[.active]:block hidden"
              alt=""
            />
          </p>
        </NavLink>
      </div>
      <div className="group">
        <NavLink to="/store/add-new-method">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span> Add new payment</span>
            <img
              src="/arrow-down.png"
              className="group-has-[.active]:block hidden"
              alt=""
            />
          </p>
        </NavLink>
      </div>
      <div className="group">
        <NavLink to="/store/products">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span>Store</span>
            <img
              src="/arrow-down.png"
              className="group-has-[.active]:block hidden"
              alt=""
            />
          </p>
        </NavLink>
      </div>
      <div className="group">
        <NavLink to="/store/configuration">
          <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
            <span>Store configuration</span>
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

export default StoreNav;
