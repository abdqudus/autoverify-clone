import { useState } from "react";
import { SideBarItems } from "../data";

const ProductsMenu = ({ text, isActive, src }: SideBarItems) => {
  type ExpandedSection = string;
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>("");
  const handleExpansion = () => {
    expandedSection == text ? setExpandedSection("") : setExpandedSection(text);
  };
  return (
    <div
      onClick={handleExpansion}
      className={`transition-[height] overflow-hidden relative ${
        expandedSection == text ? "h-[162px]" : "h-[48px]"
      }`}
    >
      <div
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
      <div className="font-inter absolute left-[30px] font-semibold text-[#6F767E] text-[.9375rem]">
        <p className="leading-6 py-[6px] px-4 border border-red-500 border-collapse">
          All Products
        </p>
        <p className="leading-6 py-[6px] px-4 border border-red-500 border-collapse">
          Create New
        </p>
        <p className="leading-6 py-[6px] px-4 border border-red-500 border-collapse">
          Payments Methods
        </p>
      </div>
    </div>
  );
};

export default ProductsMenu;
