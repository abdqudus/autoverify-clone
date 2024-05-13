const Footer = () => {
  return (
    <>
      <div className="hidden relative md:h-[200px] overflow-hidden md:block">
        <div className="absolute w-[53px] md:w-[255px] left-0 bottom-[-2rem]">
          <img src="/Group 81.png" alt="" />
        </div>
        <div className="absolute w-[53px] md:w-[255px] right-[-7%] bottom-[-2rem] ">
          <img src="/Group 82.png" alt="" />
        </div>
      </div>
      <div className="h-[567px] md:h-[350px] mt-[7rem] md:mt-0  bg-[#4A99D3] relative">
        <div className="absolute w-[53px] md:w-[255px] md:hidden left-0 top-[-5rem]">
          <img src="/Group 81.png" alt="" />
        </div>
        <div className="absolute w-[53px] md:w-[255px] md:hidden right-0 top-[-5rem] ">
          <img src="/Group 82.png" alt="" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="details flex flex-col md:px-12 md:pt-6 md:flex-row md:justify-between items-center px-4 pt-4 justify-center gap-4">
            <h1 className="font-bold text-white text-[34px]">LOGO</h1>
            <div className="md:max-w-[394px]">
              <p className="font-inter text-center md:text-left md:text-[1.125rem] md:font-normal text-[.625rem] leading-[26px] font-bold text-white">
                Subscribe to out news letters to be the first to know about our
                updates
              </p>
              <div className="flex flex-wrap mt-4 items-center gap-4">
                <input
                  className="outline-0 pl-4 flex-shrink w-[50px] flex-grow sm:placeholder:text-sm sm:placeholder:font-normal placeholder:text-[.75rem] placeholder:font-bold placeholder:text-[#000000] bg-white rounded-[6px] h-[40px]"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="bg-white h-[40px] text-[.75rem] font-bold w-[94px] rounded-[6px] text-[#4A99D3]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="trademark md:px-12 p-4 flex md:flex-row md:justify-between md:border-t border-white flex-col-reverse items-center gap-4">
            <p className="text-white text-[10px]">
              Copyright &copy; 2020. All rights reserved
            </p>
            <div className="flex gap-3 items-center ">
              <img src="/Youtube.png" width="22.6" height="22.6" alt="" />
              <img src="/Instagram.png" width="16" height="16" alt="" />
              <img src="/Facebook.png" alt="" />
              <img src="twitter.png" width="16" height="16" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
