import { useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";
import { TextEditor } from "../../component/TextEditor";
import TransactionCard from "../../component/TransactionCard";

const PagePersonalization = () => {
  const [textVal, setTextVal] = useState("");
  return (
    <DashBoardSubRoutesWrapper
      header="Settings /Page Personalization"
      subheader="Page Personalization"
    >
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />
          <div>
            <div className="mt-6 md:mt-0">
              <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333]">
                Configuration
              </h3>
              <p className="mt-3 text-[#333333] text-sm leading-[22.4px]">
                The text entered below will be displayed in the 'About Seller'
                box on the page with the transaction status, complaint status
                and in the purchase form.
              </p>
              <TextEditor val={{ textVal, setTextVal }} />
              <button className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
                Save changes
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-[1rem] leading-[19.8px] text-[#333333]">
                Page preview
              </h3>
              <p className="mt-3 font-open-sans text-[.75rem] text-[#333333] leading-[22.4px]">
                <span className="font-bold"> Warning! </span> The page presented
                below is a preview and does not include other elements of
                personalization, such as a logo or a change of language.
              </p>
            </div>
            <TransactionCard />
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default PagePersonalization;
