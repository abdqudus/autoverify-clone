import { cards } from "../data";

const Cards = () => {
  return (
    <div className="cards px-3 mt-6 grid font-inter grid-cols-resp gap-4">
      {cards.map((c) => (
        <div
          key={c.text}
          className="bg-white flex gap-2 shadow-card-shadow items-center justify-between py-8 px-6  h-[85px] rounded-md "
        >
          <div
            className={`w-[45px] h-[45px] rounded-full ${c.bg} flex justify-center items-center`}
          >
            <img src={c.img} alt="" />
          </div>
          <div>
            <p className="text-[#718EBF] text-[.75rem] font-normal leading-[14.52px]">
              {c.text}
            </p>
            <p className="text-[#232323] font-semibold text-[1rem]  leading-[19.36px]">
              {c.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
