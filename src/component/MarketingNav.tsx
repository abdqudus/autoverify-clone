const MarketingNav = () => {
  return (
    <div className="h-[49px] border hidden sm:flex font-semibold border-[#E9E9E9] shadow-campaign-header rounded-[5px]  justify-center items-center gap-8">
      <p className="text-sm leading-[21px] flex justify-center items-center gap-1 text-[#1E1E1E]">
        <span>New Email Campaign</span>
        <img src="/arrow-down.png" alt="" />
      </p>
      <p className="text-sm leading-[21px]  text-[#1E1E1E]">Campaign History</p>
      <p className="text-sm leading-[21px]  text-[#1E1E1E]">New Shipmwent</p>
      <p className="text-sm leading-[21px]  text-[#1E1E1E]">Shipment Lists</p>
    </div>
  );
};

export default MarketingNav;
