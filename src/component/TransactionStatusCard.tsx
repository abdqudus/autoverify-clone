import OrderCompleted from "./OrderCompleted";

const TransactionStatusCard = () => {
  return (
    <div className="p-4 text-center md:text-start md:shadow-[0_0_4px_0px_rgba(218,218,218,0.5)] md:px-4 rounded-[4px] md:w-[399px]">
      <h3 className="font-bold text-[1.25rem] leading-[27px] font-open-sans">
        Transaction status #142718
      </h3>
      <p className="mt-4 my-6 font-normal text-[.75rem] text-[#1A1A1A] leading-[17.1px] font-open-sans">
        <span className="text-[#2A9FD2]"> Cart status #431 </span>
        <span>/ Transaction status #142718</span>
      </p>
      <OrderCompleted />
      <p className="text-[#1A1A1A] font-bold font-open-sans mt-4 mb-1 text-[1.25rem] leading-[27px]">
        Purchased products
      </p>
      <p className="text-[.75rem] leading-[19px] text-[#1A1A1A]">
        The full activation instruction has been sent to your e-mail.
      </p>
    </div>
  );
};

export default TransactionStatusCard;
