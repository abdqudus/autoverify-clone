import UseHamburgerContext from "../contexts/UseHamburgerContext";
import { MenuType } from "../types/type";
import DropDown from "./DropDown";
const ProductsMenu = ({ menu }: MenuType) => {
  const { state, dispatch } = UseHamburgerContext();
  const { text, src, isActive, dropDownItems } = menu;
  const { expandedSection } = state;
  const handleExpansion = () => {
    dispatch!({
      type: "SET_EXPANDED_SECTION",
      payload: expandedSection == text ? "" : text,
    });
  };
  return (
    <div
      className={`transition-[height] border-gray-500 overflow-hidden relative ${
        expandedSection == text ? "h-[162px]" : "h-[48px]"
      }`}
    >
      <div
        onClick={handleExpansion}
        className={`flex px-4 gap-4 text-[.9375rem] ${
          isActive ? "text-[#2D60FF]" : "text-[#6F767E]"
        }  font-semibold h-[48px] py-[12px] items-center`}
      >
        <img src={src} alt="" />
        <div className="flex justify-between flex-grow items-center">
          <p className="leading-6">{text}</p>
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full border-2  border-[#EFEFEF] flex justify-center items-center">
              <img src="/add icon.png" alt="" />
            </span>
            <span className="w-6 h-6 items-center justify-center flex">
              <img src="/arrow-down.png" alt="" />
            </span>
          </span>
        </div>
      </div>
      <DropDown dropDownItems={dropDownItems} />
    </div>
  );
};

export default ProductsMenu;
