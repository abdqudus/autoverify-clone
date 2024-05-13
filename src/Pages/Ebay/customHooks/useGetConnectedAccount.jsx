import { useQuery } from "@tanstack/react-query";
import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";
import { useNavigate } from "react-router-dom";

const useGetConnectedAccount = () => {
  const navigate = useNavigate();
  const limit = undefined;
  const offset = undefined;
  const order_by = undefined;
  const reverse_order = undefined;

  const getConnectAcct = async () => {
    console.log("Im usefull");
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.EbayAccount(access_token, {});
    const res = await endpoint.list(limit, offset, order_by, reverse_order);
    return res;
  };
  const { isError, data, isLoading } = useQuery({
    queryKey: ["connect-acct"],
    queryFn: getConnectAcct,
  });
  return { data, isError, isLoading };
};

export default useGetConnectedAccount;
