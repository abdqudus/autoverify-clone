const PaymentHistoryTableBody = ({ body }) => {

  return (
    <tbody>
      {body.data.map((b, i) => (
        <tr
          key={b.id}
          className={`h-[48px] ${i % 2 == 1 && "bg-white"} text-center `}
        >
          <td className="px-2 text-left ">{b.id}</td>
          <td className="px-2 ">{b.buyer_name}</td>
          <td className="px-2 ">{b.currency} {b.amount_paid}</td>
          <td className="px-2 ">{b.amount_ordered}</td>
          <td className="px-2 text-left">{b.date_created}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default PaymentHistoryTableBody;
