import { useRef } from "react";
import HambugerItems from "./HambugerItems";
import { closeHamburger, handleHamburgerClick } from "../utils/hambuger";
import UseHamburgerContext from "../contexts/UseHamburgerContext";

const Header = () => {
  const { dispatch } = UseHamburgerContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  return (
    <header>
      <nav className="border px-4 lg:px-12  relative py-6  flex lg:shadow-nav-shadow items-center  justify-between ">
        <label
          onClick={(e) => {
            handleHamburgerClick(e, divRef, inputRef);
            dispatch!({ type: "SET_REFS", refs: [inputRef, divRef] });
          }}
          className="peer hamburger-label lg:hidden block "
          htmlFor="humburger"
        >
          <input
            ref={inputRef}
            className="sr-only"
            type="checkbox"
            name=""
            id="hamburger"
          />
          <img src="/hamburger.png" className="lgs:hidden" />
        </label>

        <h3 className="text-[2.5rem]  leading-[41.52px] font-bold text-center text-[#4A99D3]">
          LOGO
        </h3>
        <div className="flex  justify-between gap-6 items-center">
          <div className="flex gap-2 items-center">
            <img
              className="hidden md:block"
              src="/united-kingdom.png"
              width="20"
              height="20"
              alt=""
            />
            <p className="text-[1.2rem] hidden md:block text-[#323232]">EN</p>
            <img
              src="/lang-picker-arrow.svg.png"
              alt=""
              className="hidden md:block"
            />
            <img src="/dp.png" alt="" />
          </div>
        </div>
        <HambugerItems
          inputRef={inputRef}
          closeHamburger={(e) => {
            closeHamburger(divRef, inputRef, e);
          }}
          ref={divRef}
        />
      </nav>
    </header>
  );
};

export default Header;
