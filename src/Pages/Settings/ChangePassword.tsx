import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";

const ChangePassword = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Settings /Change Password"
      subheader="Change Password"
    >
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />
          <div>
            <div className="mb-3 ">
              <LabelInput
                divStyle="md:flex-row flex-col md:justify-between"
                style="md:w-[70%] w-full"
                id="current-password"
                text="Current password"
                type="password"
                key="current-password"
              />
            </div>
            <div className="my-5 border-b border-black"></div>

            <LabelInput
              divStyle="md:flex-row flex-col md:justify-between"
              style="md:w-[70%] w-full"
              id="new-password"
              text="New Password"
              type="password"
              key="new-password"
            />
            <div className="mt-3">
              <LabelInput
                divStyle="md:flex-row flex-col md:justify-between"
                style="md:w-[70%] w-full"
                id="repeat-new-password"
                text="Repeat New Password"
                type="password"
                key="repeat-new-password"
              />
            </div>
            <button className="h-[34px] md:mt-10 text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
              Save changes
            </button>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ChangePassword;
