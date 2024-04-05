const PaymentSteps = ({ isSmall = true }: { isSmall?: boolean }) => {
  return (
    <div
      className={`${
        isSmall ? "block md:hidden" : " md:block hidden"
      } text-[#333333] mt-8`}
    >
      <div>
        <h3 className="text-[1.11625rem] font-open-sans leading-[19.8px]">
          Step 1: payment method
        </h3>
        <div className="h-[82px] flex justify-center gap-5 md:gap-3 items-center border border-[#E3E3E3] bg-[#F5F5F5] rounded-[4px] my-4">
          <input type="radio" name="" id="payment-method" />
          <label htmlFor="payment-method" className="flex gap-1 items-center">
            <img src="/stripe.png" alt="" className="mt-1" />
            <p className="text-sm leading-[22.4px] md:text-[.75rem] font-open-sans">
              - quick transfer or card
            </p>
          </label>
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-[1.11625rem] font-open-sans leading-[19.8px]">
          Step 2: refill type
        </h3>
        <div className=" border mt-4 border-[#E3E3E3] bg-[#F5F5F5] rounded-[4px] px-4 py-6">
          <p className="text-sm font-open-sans leading-[22.4px]">
            You will be able to provide invoice data in the next step. If you
            would like to receive an invoice with business details, select
            "Buying as a business" on the checkout page.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <input type="radio" name="credits" id="50-credits" />
            <label
              htmlFor="50-credits"
              className="text-sm md:text-[.75rem] leading-[22.4px]"
            >
              50 credits - 5 EUR{" "}
              <span className="font-semibold">(10 ¢ / pcs)</span>
            </label>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="radio" name="credits" id="100-credits" />
            <label
              htmlFor="100-credits"
              className="text-sm md:text-[.75rem] leading-[22.4px]"
            >
              100 credits - 10 EUR{" "}
              <span className="font-semibold">(10 ¢ / pcs)</span>
            </label>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="radio" name="credits" id="200-credits" />
            <label
              htmlFor="200-credits"
              className="text-sm md:text-[.75rem] leading-[22.4px]"
            >
              200 credits - 20 EUR{" "}
              <span className="font-semibold">(10 ¢ / pcs)</span>
            </label>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="radio" name="credits" id="600-credits" />
            <label
              htmlFor="600-credits"
              className="text-sm md:text-[.75rem] leading-[22.4px]"
            >
              600 credits - 48 EUR{" "}
              <span className="font-semibold">(8 ¢ / pcs)</span>
            </label>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="radio" name="credits" id="2500-credits" />
            <label
              htmlFor="2500-credits"
              className="text-sm md:text-[.75rem] leading-[22.4px]"
            >
              2500 credits - 200 EUR{" "}
              <span className="font-semibold">(8 ¢ / pcs)</span>
            </label>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="radio" name="credits" id="10000-credits" />
            <label
              htmlFor="10000-credits"
              className="text-sm md:text-[.75rem] leading-[22.4px]"
            >
              10000 credits - 800 EUR{" "}
              <span className="font-semibold">(8 ¢ / pcs)</span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[1.11625rem] font-open-sans leading-[19.8px]">
          Step 3: invoice data
        </h3>
        <div className=" border mt-4 border-[#E3E3E3] bg-[#F5F5F5] rounded-[4px] px-4 py-6">
          <p className="font-bold text-center text-[.75rem] leading-[22.4px]">
            Data for invoice have not been entered.
          </p>
          <button className="w-full h-[22px] bg-[#F0AD4E] mt-3 border border-[#EEA236] rounded-[3px] text-[.75rem] text-white">
            Change data for invoice
          </button>
        </div>
      </div>
      <button className="w-full h-[34px] bg-[#5CB85C] mt-6 border border-[#4CAE4C] rounded-[4px] text-sm text-white">
        Refill account
      </button>
    </div>
  );
};

export default PaymentSteps;
