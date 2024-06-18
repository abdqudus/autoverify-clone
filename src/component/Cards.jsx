import { cards } from "../data";

const Cards = ({ quantity, currency, text }) => {
  return (
    <div
      key={quantity}
      className="bg-white flex gap-2 shadow-card-shadow items-center justify-between py-8 px-4  h-[85px] rounded-md "
    >

      <div>
        <p className="text-[#718EBF] uppercase text-sm font-normal leading-[14.52px]">
          {text}
        </p>
        <p className="text-[#232323] mt-2 font-semibold text-[1rem]  leading-[19.36px]">
          {currency ? currency : ''} {quantity}
        </p>
      </div>
    </div>
  )

};

export default Cards;
