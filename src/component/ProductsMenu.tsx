import { SideBarItems } from "../data";

const ProductsMenu = ({ text, isActive, src }: SideBarItems) => {
  return (
    <div
      className={`flex gap-4 text-[.9375rem] ${
        isActive ? "text-[#2D60FF]" : "text-[#6F767E]"
      }  font-semibold h-[48px] p-[12px] items-center`}
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
  );
};

export default ProductsMenu;
