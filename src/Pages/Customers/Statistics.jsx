import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { graphData } from "../../data";
import QuantitySold from "../../component/QuantitySold";
import { t } from "i18next";

const Statistics = () => {
  return (
    <div className="my-6 bg-white py-4 sm:px-4 ">
      <h3 className="font-semibold ml-4 sm:ml-0  mb-5 text-[1rem] text-[#333B69] leading-[19.36px] font-inter">
        {t('bar.stat')}
      </h3>
      <div className="grid lg:grid-cols-[1fr_256px] gap-4">
        {" "}
        {/* Parent of the two bigger divs */}
        <div className=" bg-white self-start ">
          {" "}
          {/*This div is the parent of the two inner divs. It's on the left */}
          <div className="grid gap-6">
            <div className="bg-[#FCFCFC] rounded-[8px] p-4 shadow-graph">
              <header className="flex justify-between gap-4 mb-12 items-center flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-4 bg-[#CABDFF] rounded-[4px]"></span>
                  <p className="text-[#1A1D1F] text-lg font-semibold leading-8">
                    {t('bar.prod-sale')}
                  </p>
                </div>
                <div className="h-[40px] py-2 px-4 flex gap-3 justify-center items-center bg-[#EFEFEF]">
                  <p className="font-semibold text-sm leading-6">{t('bar.past-days')}</p>
                  <img src="/arrow-down.png" alt="" />
                </div>
              </header>

              <ResponsiveContainer max-width="100%" height={350}>
                <BarChart
                  data={graphData}
                  margin={{ top: 5, right: 0, bottom: 5, left: -20 }}
                >
                  <XAxis dataKey="name" />

                  <YAxis ticks={[0, 0.3, 0.5, 0.8, 1, 1.3]} />

                  <Tooltip />
                  <Bar dataKey="sale" fill="fill" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <QuantitySold />
          </div>
        </div>
        <div>
          {/* Parent of right div */}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
