import { Link } from "react-router-dom";

const StoreNav = () => {
  return (
    <div className="min-h-[49px] flex gap-4 flex-wrap p-4 md:justify-center lg:gap-8 border font-semibold border-[#E9E9E9] shadow-campaign-header rounded-[5px] ">
      <Link to="/store/payment-methods">
        <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
          <span>Payment Method</span>
          <img src="/arrow-down.png" alt="" />
        </p>
      </Link>
      <Link to="/store/add-new-method">
        <p className="text-sm leading-[21px] cursor-pointer  text-[#1E1E1E]">
          Add new payment
        </p>
      </Link>
      <Link to="/store/products">
        <p className="text-sm leading-[21px]  cursor-pointer text-[#1E1E1E]">
          Store
        </p>
      </Link>
      <Link to="/store/configuration">
        <p className="text-sm leading-[21px]  cursor-pointer text-[#1E1E1E]">
          Store configuration
        </p>
      </Link>
    </div>
  );
};

export default StoreNav;
