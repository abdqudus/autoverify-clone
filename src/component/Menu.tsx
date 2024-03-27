import { useState } from "react";
import { SideBarItems } from "../data";

const Menu = ({ src, text, isActive, hasDropDown }: SideBarItems) => {
  type ExpandedSection = string;
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>("");
  const handleExpansion = () => {
    alert("hello");
    expandedSection == text ? setExpandedSection("") : setExpandedSection(text);
  };
  if (text !== "Products") {
    return (
      <div
        className={`flex px-4 gap-4 text-[.9375rem] ${
          isActive ? "text-[#2D60FF]" : "text-[#6F767E]"
        }  font-semibold h-[48px] py-[12px] items-center`}
      >
        <img src={src} alt="" />

        {/* <p className="leading-6">{text}</p> */}

        {hasDropDown ? (
          <div
            onClick={handleExpansion}
            className="flex justify-between flex-grow items-center"
          >
            <p className="leading-6">{text}</p>
            <img src="/arrow-down.png" alt="" />
          </div>
        ) : (
          <p className="leading-6">{text}</p>
        )}
      </div>
    );
  }
};

export default Menu;
