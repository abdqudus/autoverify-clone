const Notifications = () => {
  return (
    <div className="h-[516px] max-w-full rounded-2xl p-3  sm:px-6 shadow-graph bg-[#FCFCFC]">
      <header className="flex justify-between items-center ">
        <p className="font-semibold text-[#1A1D1F] leading-8 text-xl">
          Notification
        </p>
        <p className="w-[32px] h-[32px] rounded-full bg-[#EFEFEF] flex justify-center gap-1 items-center">
          <span className="w-[3px] h-[3px] rounded-full bg-black"></span>
          <span className="w-[3px] h-[3px] rounded-full bg-black"></span>
          <span className="w-[3px] h-[3px] rounded-full bg-black"></span>
        </p>
      </header>
      <div className="mt-4">
        <div className="flex items-center gap-4 pb-4 pt-2 border-b">
          <p className="sm:w-[48px] relative h-[48px] rounded-full flex items-center justify-center bg-[#FFD88D]">
            <img src="/domenica.png" alt="" className="max-w-[70%]" />
            <span className="absolute border-2 bg-[#2A85FF] flex justify-center items-center border-[#FCFCFC] w-[20px] h-[20px] rounded-full -right-1 bottom-0">
              <img src="/filled.png" alt="" />
            </span>
          </p>
          <div>
            <div className="flex  items-center gap-2">
              <p className="flex items-center gap-1">
                <span className="text-[#9A9FA5] font-medium"> @domenica</span>
              </p>
              <p>1h</p>
              <span className="w-[12px] h-[12px] rounded-full bg-[#2A85FF]"></span>
            </div>
            <div className="flex flex-wrap items-center gap-[.5rem] ">
              <p className="text-[#6F767E] text-[.94rem]">Comment on</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#2A85FF] mt-6 font-bold text-[#FCFCFC] leading-6 text-center px-5 py-3 w-full rounded-xl">
        See all notifications
      </button>
    </div>
  );
};

export default Notifications;
