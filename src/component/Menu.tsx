import { NavLink } from "react-router-dom";
import { MenuType } from "../types/type";
import UseHamburgerContext from "../contexts/UseHamburgerContext";
import { closeSideBar } from "../utils/hambuger";

const Menu = ({ menu, children }: MenuType) => {
  const { state, dispatch } = UseHamburgerContext();
  const { refs } = state;
  const { text, hasDropDown, src, newHeight, linkTo, srcActive } = menu;
  const { expandedSection } = state;
  const handleExpansion = () => {
    dispatch!({
      type: "SET_EXPANDED_SECTION",
      payload: expandedSection == text ? "" : text,
    });
  };
  if (hasDropDown) {
    const isText = expandedSection == text;
    return (
      <div
        className={`transition-[height] group overflow-hidden relative  ${
          isText ? newHeight : "h-[48px]"
        }`}
      >
        <div
          onClick={handleExpansion}
          className="flex px-4 gap-4 text-[.9375rem] transition group-has-[.active]:text-[#2D60FF] text-[#6F767E]  font-semibold py-[12px] items-center"
        >
          <img src={src} alt="" className="group-has-[.active]:hidden" />
          <img
            src={srcActive}
            alt=""
            className="hidden group-has-[.active]:block"
          />
          <div className="flex justify-between flex-grow items-center">
            <p className="leading-6">{text}</p>
            <img
              src="/arrow-down.png"
              alt=""
              className={`${isText ? "rotate-180" : "rotate-0"} transition`}
            />
          </div>
        </div>
        {children}
      </div>
    );
  }
  return (
    <div
      className="group"
      onClick={() => closeSideBar(refs!.divRef!, refs!.inputRef!)}
    >
      <NavLink to={linkTo!}>
        <div
          className={`flex px-4 gap-4 text-[.9375rem] group-has-[.active]:text-[#2D60FF] text-[#6F767E]
         font-semibold h-[48px] py-[12px] items-center`}
        >
          <img src={src} alt="" className="group-has-[.active]:hidden" />
          <img
            src={srcActive}
            alt=""
            className="hidden group-has-[.active]:block"
          />

          <p className="leading-6">{text}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Menu;
