import TransactionStatusCard from "./TransactionStatusCard";

const TransactionCard = () => {
  return (
    <div className="mt-6 border pb-2 rounded-[4px] border-black">
      <div className="lgs:h-[96px] lgs:flex  items-center px-4 border-b-2 border-[#f2f2f2]">
        <img width="200" height="48" src="/header.png" alt="" />
      </div>
      <div className="lgs:p-4">
        <div className=" lgs:ml-4 lgs:flex gap-4">
          <header className="h-[20px] lgs:hidden bg-[#f2f2f2]"></header>
          <TransactionStatusCard />
          <div className="order-history px-4 mt-4 text-center lgs:text-start">
            <div>
              <h3 className="font-bold text-[1.25rem] leading-[27px] font-open-sans">
                Order history
              </h3>
              <p className=" font-open-sans">
                <span className="inline-block mr-1 #1A1A1A font-bold">1x </span>
                <span className="inline-block text-[#2A9FD2] text-sm leading-[19px]">
                  Demo product
                </span>
              </p>
            </div>
            <div className="mt-4 font-open-sans">
              <h3 className="font-bold text-[1.25rem] leading-[27px] ">
                E-mail address
              </h3>
              <p className="text-[#1A1A1A] text-sm leading-[19px ]">
                demo@address.com
              </p>
            </div>
            <div className="mt-4 font-open-sans">
              <h3 className="font-bold text-[1.25rem] leading-[27px] ">
                Purchase date
              </h3>
              <p className="text-[#1A1A1A] text-sm leading-[19px ]">
                07-08-2019 23:59:07
              </p>
            </div>
            <button className="w-full flex text-sm font-open-sans lgs:px-4 items-center gap-4 justify-center mt-4 h-[41.17px] border-2 border-[#E9EDEE] rounded-[4px]">
              <img src="/send-btn.png" alt="" />
              <span className="font-bold text-[#636363] font-open-sans">
                Contact with Seller
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
