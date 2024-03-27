const Header = () => {
  return (
    <header>
      <nav className="px-4 py-6 lg:pl-16 sm:pr-8 flex lg:shadow-nav-shadow items-center justify-between ">
        <img src="/hamburger.png" className="lg:hidden" />
        <h3 className="text-[2.5rem] lg:pl-16 leading-[41.52px] font-bold text-center text-[#4A99D3]">
          LOGO
        </h3>
        <div className="lg:flex hidden gap-2 items-center">
          <img src="/__before.png" alt="" />
          <p className="text-[1.2rem] text-[#323232]">EN</p>
          <img src="/lang-picker-arrow.svg.png" alt="" />
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
