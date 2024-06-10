import { cards } from "../data";

const Cards = ({ quantity, currency, text }) => {
  return (
    <div >
      <div
        key={quantity}
        className="bg-white flex gap-2 shadow-card-shadow items-center justify-between py-8 px-6  h-[85px] rounded-md "
      >
        <div
          className={`w-[45px] h-[45px] rounded-full  flex justify-center items-center`}
        >
          {/* <img src={c.img} alt="" /> */}
        </div>
        <div>
          <p className="text-[#718EBF] text-[.75rem] font-normal leading-[14.52px]">
            {text}
          </p>
          <p className="text-[#232323] font-semibold text-[1rem]  leading-[19.36px]">
          {currency ? currency : ''} {quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
