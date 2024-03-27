import { SideBarItems } from "../data";

const Menu = ({ src, text, isActive }: SideBarItems) => {
  if (text !== "Products") {
    return (
      <div
        className={`flex gap-4 text-[.9375rem] ${
          isActive ? "text-[#2D60FF]" : "text-[#6F767E]"
        }  font-semibold h-[48px] p-[12px] items-center`}
      >
        <img src={src} alt="" />
        <p className="leading-6">{text}</p>
      </div>
    );
  }
};

export default Menu;
