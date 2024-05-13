import Intro from "../component/Intro";

const Login = () => {
  return (
    <div>
      <header className="flex p-4 items-center lg:shadow-nav-shadow justify-center sm:justify-between">
        <h3 className="text-[2.5rem]  leading-[41.52px] font-bold text-center text-[#4A99D3]">
          LOGO
        </h3>
        <div className="sm:flex hidden justify-between gap-6 items-center">
          <div className="flex gap-2 items-center">
            <img src="/united-kingdom.png" width="20" height="20" alt="" />
            <p className="text-[1.2rem] text-[#323232]">EN</p>
            <img src="/lang-picker-arrow.svg.png" alt="" />
          </div>
        </div>
      </header>
      <Intro />
    </div>
  );
};

export default Login;
