import { useQuery } from "@tanstack/react-query";
import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";
import { useNavigate } from "react-router-dom";
type ConnectedAcctType = {
  count: number;
  previous: null | string;
  next: null | string;
  results: {
    account_id: string;
    name: string;
    is_connected: boolean;
    is_active: boolean;
    email: string;
    store_owner: boolean;
  }[];
};
const useGetConnectedAccount = () => {
  const navigate = useNavigate();
  const limit = undefined;
  const offset = undefined;
  const order_by = undefined;
  const reverse_order = undefined;

  const getConnectAcct = async (): Promise<ConnectedAcctType | null> => {
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
