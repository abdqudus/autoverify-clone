import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import SettingsWrapper from "../../component/SettingsWrapper";
import LayoutNavigations from "../../component/LayoutNavigations";
import LabelInput from "../../component/Label-Input";
import Checkbox from "../../component/Checkbox";

const API = () => {
  return (
    <DashBoardSubRoutesWrapper header="Dashboard/Settings /API" subheader="API">
      <div className="mt-6 text-[#333333]">
        <SettingsWrapper>
          <LayoutNavigations />
          <div className="mt-6 ">
            <div className="access">
              <h3 className="text-[.75rem] leading-[22.4px]">
                Below are the access data API.{" "}
                <span className="font-bold"> Please note! </span>do not share
                these data. They can allow remote access to your account.
              </h3>
              <p className="my-5 text-[.75rem]  text-[#428BCA] leading-[22.4px]">
                API documentation version v2
              </p>
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                <p className="text-sm leading-[22.4px]">not generated yet</p>
                <p className="text-sm leading-[22.4px]">not generated yet</p>
                <button className="bg-[#428BCA] h-[34px] lg:w-[170.57px] rounded-[4px] border border-[#3276B1] text-white text-sm lg:text-[.75rem]">
                  Generate new keys
                </button>
              </div>
            </div>
            <div className="webhook mt-6">
              <h3 className="text-lg pb-3 border-b border-[text-[#333333]] leading-[19.8px]">
                Webhooks notifications
              </h3>
              <p className="text-[.75rem] mt-4 leading-[22.4px]">
                Information and examples are available in the documentation at
                <a className="text-[#428BCA]">
                  {" "}
                  https://github.com/automater- pl/rest-api#webhooks
                </a>
              </p>
              <a className="text-[#428BCA] block mb-3 text-[.75rem]  leading-[22.4px]">
                Click here to check the history of sent notifications.
              </a>
              <LabelInput
                id="notification-status"
                text="Notification Status: "
                placeholder="inactive"
              >
                <span className="text-[#FF0000]">*</span>
              </LabelInput>
              <div className="my-4">
                <LabelInput
                  id="address"
                  text="Address for sending notifications: "
                >
                  <span className="text-[#FF0000]">*</span>
                </LabelInput>
              </div>
              <LabelInput
                id="notification-key"
                text="Notification key (up to 32 characters): "
              >
                <span className="text-[#FF0000]">*</span>
              </LabelInput>
              <div className="mt-6">
                <h3 className="text-[.75rem] leading-[22.4px]">
                  Types of notifications sent:
                  <span className="text-[#ff0000]"> *</span>
                </h3>
                <Checkbox
                  divStyle="my-2"
                  id=" new-transaction"
                  text=" notification of a new transaction"
                />
                <Checkbox
                  divStyle="my-2"
                  id=" new-payment"
                  text=" notification of a new payment to the transaction"
                />
                <Checkbox
                  id=" all-codes"
                  text="  notification of sending all codes"
                />
              </div>
            </div>
            <button className="h-[34px]  text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
              Save changes
            </button>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default API;
