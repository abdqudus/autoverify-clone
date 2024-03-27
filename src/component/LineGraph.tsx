import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { lineData } from "../data";

const LineGraph = () => {
  return (
    <>
      <div className="py-4 mt-4 hidden sm:block bg-[#FCFCFC]  ">
        <ResponsiveContainer max-width="100%" height={350}>
          <LineChart data={lineData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" />
            <YAxis axisLine={false} ticks={[0, 0.3, 0.5, 0.8, 1, 1.3, 1.8]} />
            <Tooltip />
            <Line type="monotone" dataKey="sale" stroke="#0B62A4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="p-4 mt-4 sm:hidden  bg-white">
        <ResponsiveContainer max-width="100%" height={350}>
          <LineChart
            margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
            data={lineData}
          >
            <CartesianGrid stroke="#AAAAAA" strokeWidth={1} vertical={false} />
            <XAxis dataKey="dateSmall" />
            <YAxis axisLine={false} ticks={[0, 0.3, 0.5, 0.8, 1, 1.3, 1.8]} />
            <Tooltip />
            <Line type="monotone" dataKey="sale" stroke="#0B62A4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LineGraph;
