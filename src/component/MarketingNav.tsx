const MarketingNav = () => {
  // flex flex-wrap justify-center items-center pt-4  gap-8
  return (
    <div className="min-h-[49px] flex gap-4 flex-wrap p-4 md:justify-center lg:gap-8 border font-semibold border-[#E9E9E9] shadow-campaign-header rounded-[5px] ">
      <p className="text-sm leading-[21px]  cursor-pointer flex items-center gap-1 text-[#1E1E1E]">
        <span>New Email Campaign</span>
        <img src="/arrow-down.png" alt="" />
      </p>
      <p className="text-sm leading-[21px] cursor-pointer  text-[#1E1E1E]">
        Campaign History
      </p>
      <p className="text-sm leading-[21px]  cursor-pointer text-[#1E1E1E]">
        New Shipmwent
      </p>
      <p className="text-sm leading-[21px]  cursor-pointer text-[#1E1E1E]">
        Shipment Lists
      </p>
    </div>
  );
};

export default MarketingNav;
