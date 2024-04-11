import { NavLink } from "react-router-dom";
import { settingsNavItems } from "../Data/settings-data";
import { ReactNode } from "react";

const LayoutNavigations = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <div className="navigations ">
        {settingsNavItems.map((i) => (
          <div className="group" key={i.text}>
            <NavLink className="" to={i.route}>
              {/* bg-[#4A99D3]  */}
              <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#4A99D3] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
                <p>{i.text}</p>
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
