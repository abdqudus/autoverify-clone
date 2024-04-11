import { NavLink } from "react-router-dom";
import UseHamburgerContext from "../contexts/UseHamburgerContext";
import { closeSideBar } from "../utils/hambuger";
type Props = { dropDownItems: { text: string; route: string }[] };
const DropDown = ({ dropDownItems }: Props) => {
  const { state } = UseHamburgerContext();
  const { refs } = state;
  return (
    <div className="font-inter absolute w-[85%]  left-[30px] font-semibold text-[#6F767E] text-[.9375rem]">
      {dropDownItems?.map((i) => {
        return (
          <p
            key={i.text}
            className="dropdown-route flex items-center justify-between has-[.active]:text-[#1A1D1F]  group has-[.active]:bg-[#EFEFEF] has-[.active]:rounded-[12px] leading-6 py-[6px] px-4 border-collapse"
            onClick={() => closeSideBar(refs!.divRef!, refs!.inputRef!)}
          >
            <NavLink className="peer group" to={i.route}>
              {i.text}
            </NavLink>
            <span className="peer-[.active]:block hidden ">
              <img src="/right-arrow.svg" alt="" />
            </span>
          </p>
        );
      })}
    </div>
  );
};

export default DropDown;
