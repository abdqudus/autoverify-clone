import { forwardRef } from "react";
import Aside from "./Aside";


const HambugerItems = forwardRef(
  function HamburgerItems({ closeHamburger }, ref) {
    return (
      <div
        ref={ref}
        id="hamburger-container"
        className=" bg-black group peer-has-[:checked]:w-[100vw] w-[0vw] transition-[width] !duration-500 z-50 hambuger-menu lgs:hidden h-screen left-0  bg-opacity-50 fixed inset-0 "
        onClick={(e) => closeHamburger(e)}
      >
        <div
          className="
        bg-[#d7eaf7] group-[.activated]:w-[80vw] min-h-full w-0 transition-[width] !duration-500 overflow-hidden absolute left-0 top-0"
        >
          <Aside style="block py-6" />
        </div>
      </div>
    );
  }
);

export default HambugerItems;
