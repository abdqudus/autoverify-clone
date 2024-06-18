import { useQuery } from "@tanstack/react-query";
import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";
import { useNavigate } from "react-router-dom";
import { Paginator } from "../../../utils/pagination";
import { useState } from "react";

const useGetConnectedAccount = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const getConnectAcct = async (page) => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.EbayAccount(access_token, {});
    const paginator = new Paginator(endpoint, page);
    const res = (await paginator.current()).results;
    window.paginator = paginator;
    return {
      data: res,
      paginator: paginator,
    };
  };

  const { isError, data, isLoading } = useQuery({
    queryKey: ["connect-acct", page],
    queryFn: () => getConnectAcct({ page, setPage }),
  });

  return { accounts: data, isError, isLoading };
};

export default useGetConnectedAccount;
