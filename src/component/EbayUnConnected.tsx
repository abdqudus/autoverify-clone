const EbayUnConnected = () => {
  return (
    <div>
      <div className="mt-4 min-h-[34px] rounded-[4px] flex items-center p-4 text-[.75rem] sm:text-[.781rem] leading-[19.99px] bg-[#F2DEDE] border border-[#EBCCD1] text-[#EBCCD1]">
        <p className="text-[#A94442]">
          Connect your account with Automater system first.
        </p>
      </div>
      <div>
        <p className="text-[#333333] sm:w-[60%] pb-2 border-b border-[#CCCCCC] mt-8 text-[1rem] font-open-sans leading-[17.68px]">
          Connected accounts
        </p>
        <p className="mt-4 text-sm text-[#333333] leading-[22.4px] font-open-sans">
          No accounts have been configured.
        </p>
        <p className="text-[#333333] sm:w-[60%] pb-2 border-b border-[#CCCCCC] mt-8 text-[1rem] font-open-sans leading-[17.68px]">
          Connect new account
        </p>
        <button className="block mt-8 w-full font-open-sans text-sm leading-5 border sm:w-[242.5px] bg-[#5CB85C] text-white border-[#4CAE4C] h-[34px] rounded-[4px]">
          Connect new account
        </button>
      </div>
    </div>
  );
};

export default EbayUnConnected;
