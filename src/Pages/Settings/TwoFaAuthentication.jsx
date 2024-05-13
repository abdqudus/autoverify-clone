import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import Input from "../../component/Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";

const TwoFaAuthentication = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Settings /Two Factor Authentication"
      subheader="Two-factor Authentication (2FA)"
    >
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />

          <div className="text-[#333333] relative mt-4 md:flex font-open-sans">
            <div>
              <h3 className="text-lg leading-[19.8px]">Status</h3>
              <p className="text-sm mt-2  leading-[22.4px]">
                Two-factor authentication is currently{" "}
                <span className="font-bold">disabled</span> .
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:bg-[#EEEEEE]  p-4">
              <h3 className="text-lg leading-[19.8px]">
                Activate two-factor authentication
              </h3>
              <p className="text-[.75rem] leading-[22.4px] font-poppins mt-2">
                Scan the following code in your application (e.g. Google
                Authenticator):
              </p>
              <div className="my-2">
                <img
                  src="/barcode_scannable.png"
                  width="191"
                  height="185"
                  alt=""
                />
              </div>
              <p className="text-[.75rem] leading-[22.4px] font-poppins mt-2">
                <span className="font-bold">Write down</span> the code below
                that will allow you access after losing your phone:
              </p>
              <p className="text-[.75rem] leading-[22.4px] font-poppins ">
                QKYOE3CGR52VWE5XEOZLQZ7N7VXYQJKK
              </p>
              <p className="text-smleading-[22.4px] font-open-sans mt-2">
                Enter the generated code from the application
              </p>
              <Input id="code" style="my-3 w-full" />
              <button className="mt-2 w-[105.44px] font-poppins text-[.75rem] leading-5 border bg-[#5CB85C] h-[34px] border-[#4CAE4C] rounded-[4px] text-white">
                Activate 2FA
              </button>
              <div className=" md:hidden mt-4">
                <h3 className="text-lg leading-[19.8px] font-open-sans ">
                  Trusted devices
                </h3>
                <p className="text-sm mt-1 leading-[22.4px] font-open-sans">
                  No trusted devices.
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 hidden md:block left-[5%]">
              <h3 className="text-lg leading-[19.8px] font-open-sans ">
                Trusted devices
              </h3>
              <p className="text-sm mt-1 leading-[22.4px] font-open-sans">
                No trusted devices.
              </p>
            </div>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default TwoFaAuthentication;
