type Props = {
  body: {
    invoiceNo: number;
    code: number;
    amount: string;
    quantity: number;
    date: string;
  }[];
};
const PaymentHistoryTableBody = ({ body }: Props) => {
  return (
    <tbody>
      {body.map((b, i) => (
        <tr
          key={b.invoiceNo}
          className={`h-[48px] ${i % 2 == 1 && "bg-white"} text-center `}
        >
          <td className="px-2 text-left ">{b.invoiceNo}</td>
          <td className="px-2 ">{b.code}</td>
          <td className="px-2 ">{b.amount}</td>
          <td className="px-2 ">{b.quantity}</td>
          <td className="px-2 text-left">{b.date}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default PaymentHistoryTableBody;
