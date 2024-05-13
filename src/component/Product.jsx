const Product = () => {
  return (
    <div className="">
      <div className="img-div overflow-hidden group rounded-[12px] relative">
        <img
          src="/face-cap.png"
          className="w-full object-cover transition scale-100 group-hover:scale-[1.2]"
          width="308"
          height="200"
          alt=""
        />
        <div className="overlay group-hover:w-full w-0 transition-[width] bg-black flex justify-center items-center gap-2 rounded-[12px] bg-opacity-50 absolute inset-0">
          <div className="w-[36px] h-[36px]  cursor-pointer  flex justify-center items-center rounded-full bg-white">
            <img src="/pencil.png" alt="" />
          </div>
          <div className="w-[36px] h-[36px]   cursor-pointer flex justify-center items-center rounded-full bg-white">
            <img src="/trash-can.png" alt="" />
          </div>
          <div className="w-[36px] h-[36px]  cursor-pointer  flex justify-center items-center rounded-full bg-white">
            <img src="/forward-arr.png" alt="" />
          </div>
        </div>
      </div>
      <div className="product-title">
        <div className="grid gap-3 grid-cols-[1fr_48px] mt-4 ">
          <p className="text-[#1A1D1F] text-[.9375rem] font-semibold leading-6">
            Fleet - Travel shopping UI design kit
          </p>
          <div className="w-[48px] font-bold h-[32px] font-inter  text-[.9375rem] bg-[#B5E4CA] rounded-[6px] flex justify-center items-center">
            $64
          </div>
        </div>
      </div>
      <div className="rating mt-1">
        <p className="flex items-center gap-2">
          <img src="/star-c.png" alt="" />
          <span className="font-semibold text-sm ">
            4.8 <span className="font-normal">(87)</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Product;
