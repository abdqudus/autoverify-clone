import { generalSettingsData } from "../../Data/settings-data";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import Select from "../../component/Select";
import SettingsWrapper from "../../component/SettingsWrapper";

const GeneralSettings = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Settings /General Settings"
      subheader="General Settings"
    >
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />
          <div className="mt-4 md:mt-0">
            {generalSettingsData.map((d) => {
              const { type, text, id, placeholder, options } = d;
              if (type !== "select") {
                return (
                  <LabelInput
                    text={text}
                    id={id!}
                    placeholder={placeholder}
                    key={id}
                    type={type}
                    style="mb-3"
                  />
                );
              }
              return (
                <>
                  <Select
                    style="text-sm text-[#333333]"
                    options={options!}
                    text={text}
                    key={text}
                  />
                </>
              );
            })}
            <button className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
              Save changes
            </button>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default GeneralSettings;
