import QuantitySold from "../../component/QuantitySold";
import { t } from "i18next";

const Statistics = () => {
  return (
    <div className="my-6 bg-white py-4 sm:px-4 ">
      <h3 className="font-semibold ml-4 sm:ml-0  mb-5 text-[1rem] text-[#333B69] leading-[19.36px] font-inter">
        {t('bar.stat')}
      </h3>
      <div className=" bg-white self-start ">
        <QuantitySold />
      </div>
    </div>
  );
};

export default Statistics;
