const Footer = () => {
  return (
    <div className="overflow-hidden mt-[20rem]">
      <footer className="mt-[10rem]  relative bg-[#4A99D3] px-12 py-12 ">
        <div className="absolute w-[30%] sm:w-auto-z-10 -top-[30%] -left-0">
          <img src="/Group 81.png" alt="" />
        </div>
        <div className="absolute w-[30%] sm:w-auto -z-10 -top-[30%] -right-0 ">
          <img src="/Group 82.png" alt="" />
        </div>
        <p className="font-bold text-[2.125rem] text-center leading-[35.29px] mb-5 text-white">
          LOGO
        </p>
        <p className="font-bold font-inter text-[.625rem] text-center my-6 text-white">
          Subscribe to our newsletter and be the first to know about our updates
        </p>
        <form className="flex flex-wrap gap-4 items-center justify-center my-6">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-white rounded-[3px] h-[40px] px-4 py-2 placeholder:text-[.75rem] outline-none
           placeholder:font-bold placeholder:text-black"
          />
          <button className="bg-white px-4 py-2 h-[40px] font-inter text-[#4A99D3] font-bold text-[.75rem] rounded-[3px]">
            Subscribe
          </button>
        </form>
        <div className="flex justify-center items-start gap-8">
          <div className=" font-open-sans text-white">
            <p className="text-[1.125rem]">My account</p>
            <div className="mt-6 grid gap-4">
              <p>Payments</p>
              <p>Settings</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="font-open-sans text-white">
            <p className="text-[1.125rem]">Help</p>
            <div className="mt-6 grid gap-4">
              <p>Help</p>
              <p>Report an error</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
