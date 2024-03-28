type Props = {
  bg: string;
  border: string;
};
const ProductDetailExtenstion = ({ bg, border }: Props) => {
  return (
    <div className="mt-[30px] justify-self-end  lg:mt-4 md:flex gap-4 lg:flex-col items-start justify-between">
      <div className="max-w-[250px] lg:w-full p-4 text-[#333333] font-open-sans  min-h-[146.19px] rounded-[4px] bg-[#F5F5F5] border border-[#E3E3E3]">
        <p className="text-[#333333] font-open-sans text-lg left-[19.8px]">
          Status
        </p>
        <p className="my-4 text-[.875rem] leading-[22.4px]">
          Product is in stock
        </p>
        <button
          className={`w-full h-[34px] text-white ${bg} ${border}  rounded-[4px]`}
        >
          Pause sale
        </button>
      </div>
      <div className="mt-[4rem] md:mt-0">
        <p className="text-[#333333] pb-1 border-b  font-open-sans text-lg left-[19.8px]">
          Management
        </p>
        <div className="font-open-sans mt-4 font-normal text-[.875rem] text-[#555555]">
          <div className="max-w-[250px] lg:w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/msg.png" alt="" />
            <p className="leading-[22.4px]">Show details</p>
          </div>
          <div className="max-w-[250px] lg:w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/prod-setting.png" alt="" />
            <p className="leading-[22.4px]">Product settings</p>
          </div>
          <div className="max-w-[250px] lg:w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/shipping-setting.png" alt="" />
            <p className="leading-[22.4px]">Shipping settings</p>
          </div>
          <div className="max-w-[250px]  px-2 flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="btn-on-website.png" alt="" />
            <p className="leading-[22.4px]">Buttons on website</p>
          </div>
          <div className="max-w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/shipping-simulation.png" alt="" />
            <p className="leading-[22.4px]"> Shipping simulation</p>
          </div>
          <div className="max-w-[250px] px-2  mb-4 flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/delete.png" alt="" />
            <p className="leading-[22.4px]">Delete product</p>
          </div>
          <div className="max-w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/recurring-shipment.png" alt="" />
            <p className="leading-[22.4px]">
              <span className="font-bold text-[##555555]">Recurring</span>{" "}
              shipments
            </p>
          </div>
          <div className="max-w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/prod-setting.png" alt="" />
            <p className="leading-[22.4px]">
              <span className="font-bold text-[##555555]">Bonuses</span>{" "}
              products
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] md:mt-0 lg:w-full">
        <p className="text-[#333333] font-open-sans text-lg left-[19.8px]">
          Statistics
        </p>
        <div className="max-w-[250px] px-2  mt-4 border  flex gap-4 justify-between items-center h-[64.98px] rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
          <p className="flex flex-col gap-2">
            <span className="text-[#333333] text-lg leading-[19.8px]">0</span>
            <span className="text-[#555555] text-sm leading-[18.2pxx]">
              purchases
            </span>
          </p>
          <img src="/cart.png" alt="" />
        </div>
        <div className="max-w-[250px] px-2 border  flex gap-4 justify-between items-center h-[64.98px] rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
          <p className="flex flex-col gap-2">
            <span className="text-[#333333] text-lg leading-[19.8px]">0</span>
            <span className="text-[#555555] text-sm leading-[18.2pxx]">
              sold products
            </span>
          </p>
          <img src="/barcode.png" alt="" />
        </div>
        <div className="max-w-[250px] px-2 border  flex gap-4 justify-between items-center h-[64.98px] rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
          <p className="flex flex-col gap-2">
            <span className="text-[#333333] text-lg leading-[19.8px]">
              0.00
            </span>
            <span className="text-[#555555] text-sm leading-[18.2pxx]">
              all value
            </span>
          </p>
          <img src="/dollar.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailExtenstion;
