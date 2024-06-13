import { useState } from "react";
import Intro from "../component/Intro";
import LanguageSelect from "../component/LanguageSelect";

const Login = () => {

  return (
    <div>
      <header className="flex p-4 items-center lg:shadow-nav-shadow justify-center sm:justify-between">
        <h3 className="text-[2.5rem]  leading-[41.52px] font-bold text-center text-[#4A99D3]">
          LOGO
        </h3>
        <LanguageSelect />
        {/* <select onChange={e => console.log(e.target.value)}
        >
          <option className="w-[100px] bg-transparent" value={'English'}>
            <div className="flex gap-2 items-center">
              <img src="/united-kingdom.png" width="20" height="20" alt="" />
              <p className="text-[1.2rem] text-[#323232]">EN</p>
            </div>
          </option>
          <option className="w-[100px] bg-transparent" value={'Polish'}>
            <div className="flex gap-2 items-center">
              <img src="/united-kingdom.png" width="20" height="20" alt="" />
              <p className="text-[1.2rem] text-[#323232]">PL</p>
            </div>
          </option> */}
        {/* </select> */}
        {/* </div> */}
      </header>
      <Intro />
    </div >
  );
};

export default Login;
