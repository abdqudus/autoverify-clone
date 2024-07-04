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

      </header>
      <Intro />
    </div >
  );
};

export default Login;
