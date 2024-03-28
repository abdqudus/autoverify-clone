import { Link } from "react-router-dom";
import { MenuType } from "../types/type";

const Menu = ({ menu, children, state, dispatch }: MenuType) => {
  const { text, hasDropDown, src, isActive, newHeight } = menu;
  const { expandedSection } = state;
  const handleExpansion = () => {
    dispatch({
      type: "SET_EXPANDED_SECTION",
      payload: expandedSection == text ? "" : text,
    });
  };
  if (hasDropDown) {
    const isText = expandedSection == text;
    return (
      <div
        className={`transition-[height]  overflow-hidden relative  ${
          isText ? newHeight : "h-[48px]"
        }`}
        onClick={handleExpansion}
      >
        <div
          className={`flex px-4 gap-4 text-[.9375rem] ${
            isActive ? "text-[#2D60FF]" : "text-[#6F767E]"
          }  font-semibold py-[12px] items-center`}
        >
          <img src={src} alt="" />
          <div className="flex justify-between flex-grow items-center">
            <p className="leading-6">{text}</p>
            <img src="/arrow-down.png" alt="" />
          </div>
        </div>
        {children}
      </div>
    );
  }
  return (
    <div>
      <Link to="/">
        <div
          className={`flex px-4 gap-4 text-[.9375rem] ${
            isActive ? "text-[#2D60FF]" : "text-[#6F767E]"
          }  font-semibold h-[48px] py-[12px] items-center`}
        >
          <img src={src} alt="" />

          <p className="leading-6">{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
