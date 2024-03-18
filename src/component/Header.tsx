const Header = () => {
  return (
    <header>
      <nav className="px-4 py-6 sm:pl-16 sm:pr-8 flex sm:shadow-nav-shadow justify-between ">
        <h3 className="text-[2.5rem] sm:pl-16 leading-[41.52px] font-bold text-center text-[#4A99D3]">
          LOGO
        </h3>
        <div className="flex gap-2 items-center">
          <img src="/__before.png" alt="" />
          <p className="text-[1.2rem] text-[#323232]">EN</p>
          <img src="/lang-picker-arrow.svg.png" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
