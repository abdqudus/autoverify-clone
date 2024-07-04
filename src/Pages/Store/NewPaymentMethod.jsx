import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import Select from "../../component/Select";
import StoreNav from "../../component/StoreNav";

const NewPaymentMethod = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Store/New Payment Method"
      subheader="New Payment Method"
    >
      <div className="mt-6">
        <div className="mt-4">
          <StoreNav />
          <div className="text-[#333333] mt-8">
            <div className="acct-name">
              <h3 className="font-bold text-sm font-open-sans leading-[22.4px]">
                Account name
              </h3>
              <div>
                <LabelInput
                  id="account-name"
                  text="Enter account name."
                  style="md:w-[60%]"
                />
              </div>
            </div>
            <div className="acct-type mt-4 md:mt-6">
              <h3 className="font-bold text-sm font-open-sans leading-[22.4px]">
                Account type
              </h3>
              <div>
                <Select
                  style="bg-white outline-0 px-2"
                  text="Select the payment Operator you want to connect your account with."
                  options={["option-one", "option-two"]}
                />
              </div>
            </div>
            <div className="acct-status mt-4 md:mt-6">
              <h3 className="font-bold text-sm font-open-sans leading-[22.4px]">
                Account type
              </h3>
              <div className="flex mt-1 items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="acct-active"
                    className="font-normal text-[.875rem] leading-[22.4px] "
                  >
                    account active
                  </label>
                  <input
                    type="radio"
                    id="acct-active"
                    name="account-activity"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="acct-inactive"
                    className="font-normal text-[.875rem] leading-[22.4px] "
                  >
                    account inactive
                  </label>
                  <input
                    type="radio"
                    id="acct-inactive"
                    name="account-activity"
                  />
                </div>
              </div>
            </div>
            <button className="w-[128.72px] font-open-sans font-normal block text-[.875rem] my-5 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
              Add new account
            </button>
            <div className="text-[#333333] md:max-w-[408px] shadow-form-shadow mt-4  bg-[#E3E3E3] border border-[#E3E3E3] p-4 rounded-[4px] font-poppins font-normal ">
              <h3 className="text-[.875rem] leading-[19.8px] mb-4">
                Payment methods
              </h3>
              <p className="text-[.75rem] leading-[22.4px]">
                You can connect your Automater account with an payment operator
                to allow the sale of products through the online store.
              </p>
              <p className="text-[.75rem] my-5 leading-[22.4px]">
                Connected payment accounts are used for payments to be made via
                the online store in Automater and through the shopping website.
              </p>
              <p className=" payment-methods text-[.75rem] leading-[22.4px]">
                If you are using your own online store (e. g. Magento or
                Shoper.pl) do not add an account here. Payments are then made
                directly by the shop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewPaymentMethod;
