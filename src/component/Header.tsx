import { useRef } from "react";
import HambugerItems from "./HambugerItems";
import { closeHamburger, handleHamburgerClick } from "../utils/hambuger";
import UseHamburgerContext from "../contexts/UseHamburgerContext";

const Header = () => {
  const { dispatch } = UseHamburgerContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  return (
    // lg:pl-16
    // px-4
    <header>
      <nav className="border px-4 lg:px-12  relative py-6  flex lg:shadow-nav-shadow items-center justify-between ">
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
        <HambugerItems
          inputRef={inputRef}
          closeHamburger={(e) => {
            closeHamburger(divRef, inputRef, e);
          }}
          ref={divRef}
        />

        <h3 className="text-[2.5rem]  leading-[41.52px] font-bold text-center text-[#4A99D3]">
          LOGO
        </h3>
        <div className="lgs:flex hidden justify-between gap-6 items-center">
          <div className="flex gap-4">
            <p className="text-[#999999] text-[.8125rem] font-poppins leading-5">
              20 credits left
            </p>
            <p className="text-[#999999] text-[.8125rem] font-poppins leading-5">
              My account{" "}
            </p>
            <p className="text-[#999999] text-[.8125rem] font-poppins leading-5">
              Log out
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[1.2rem] text-[#323232]">EN</p>
            <img src="/lang-picker-arrow.svg.png" alt="" />
          </div>
        </div>
        <img src="/dp.png" alt="profile_picture" className="lg:hidden" />
      </nav>
      <div className="flex ml-auto p-4 lg:w-[422px] items-center gap-4 ">
        <div className="flex gap-4 items-center rounded-3xl shadow-form-shadow w-[90%] mx-auto px-4 py-2 md:py-4 bg-[#F5F7FA] lg:bg-[#F5F7FA] lg:shadow-none lg:w-[255px] lg:h-[50px] lg:rounded-[50px] lg:justify-center">
          <label htmlFor="search-bar" className="w-[20px] basis-[20px]">
            <img src="/search.png" alt="" width="20" height="20" />
          </label>
          <input
            type="text"
            placeholder="Search for something"
            className="flex-shrink w-full max-w-[400px] lg:w-auto lg:max-w-[140px] outline-none bg-inherit placeholder:text-[#8BA3CB] placeholder:text-[.8125rem] placeholder:font-normal placeholder:leading-[15.73px]"
            id="search-bar"
          />
        </div>
        <div className="w-[50px] hidden lg:flex h-[50px] bg-[#F5F7FA]  rounded-full  justify-center items-center">
          <img src="/settings.png" alt="settings" />
        </div>
        <img
          src="/dp.png"
          width="60"
          height="60"
          alt="profile_picture"
          className="hidden lg:block"
        />
      </div>
    </header>
  );
};

export default Header;
