import Succesful from "./Succesful";

const OrderCompleted = () => {
  return (
    <div className="md:flex gap-6 items-center">
      <Succesful />
      <div className="mt-6">
        <p className=" font-bold font-open-sans text-[1rem] leading-[22.06px]">
          Order completed
        </p>
        <p className="text-[.75rem] leading-[19px] text-[#1A1A1A]">
          Your order has been processed. In case of problems with your product
          report a code complaint.
        </p>
      </div>
    </div>
  );
};

export default OrderCompleted;
