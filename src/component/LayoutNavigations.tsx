import { Link } from "react-router-dom";
import { settingsNavItems } from "../Data/settings-data";
import { ReactNode } from "react";

const LayoutNavigations = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <div className="navigations">
        {settingsNavItems.map((i) => (
          <Link to={i.route}>
            <div
              key={i.text}
              className="w-full md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000 leading-[22.4px]] rounded-[4px] bg-[#EEEEEE] flex px-4 items-center"
            >
              <p>{i.text}</p>
            </div>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default LayoutNavigations;
