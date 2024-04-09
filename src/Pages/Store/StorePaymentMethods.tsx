import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import StoreNav from "../../component/StoreNav";

const StorePaymentMethods = () => {
  return (
    <DashBoardSubRoutesWrapper
      subheader="Payment Method in store"
      header="Dashboard/Store/Payment Methods"
    >
      <div className="mt-6">
        <div className="mt-4">
          <StoreNav />
          <div className="mt-4">
            <p>No accounts have been configured.</p>
            <button className="vsm:w-full w-[250px] mt-12 font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
              Add new account
            </button>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default StorePaymentMethods;
