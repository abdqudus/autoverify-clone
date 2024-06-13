import { useQuery } from "@tanstack/react-query";

import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import { Paginator } from "../utils/pagination";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentHistoryTableBody = ({ body }) => {

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
