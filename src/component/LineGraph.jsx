import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";



const LineGraph = ({ data }) => {
  const { transaction_values, transaction_dates, maximum
  } = data;
  console.log(transaction_values)
  const graphValues = transaction_values.map((a, i) => ({ sale: Number(a), date: transaction_dates[i], dateSmall: transaction_dates[i] }))
  return (
    <>
      <div className="py-4 mt-4 hidden sm:block bg-[#FCFCFC]  ">
        <ResponsiveContainer max-width="100%" height={350}>
          <LineChart data={graphValues}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" />

            <YAxis domain={[0, 'dataMax + 1000']} // Custom domain for the y-axis
              tickCount={5} />
            <Tooltip />
            <Line type="monotone" dataKey="sale" stroke="#0B62A4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="p-4 mt-4 sm:hidden  bg-white">
        <ResponsiveContainer max-width="100%" height={350}>
          <LineChart
            margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
            data={graphValues}>
            <CartesianGrid stroke="#AAAAAA" strokeWidth={1} vertical={false} />
            <XAxis dataKey="dateSmall" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sale" stroke="#0B62A4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LineGraph;
