import { NavLink } from "react-router-dom";
import { settingsNavItems } from "../Data/settings-data";
import { useTranslation } from "react-i18next";

const LayoutNavigations = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="navigations">
        {settingsNavItems.map((i) => (
          <div className="group" key={i.textKey}>
            <NavLink className="" to={i.route}>
              <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#4A99D3] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px] bg-[#EEEEEE] flex px-4 items-center">
                <p>{t(i.textKey)}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default LayoutNavigations;
