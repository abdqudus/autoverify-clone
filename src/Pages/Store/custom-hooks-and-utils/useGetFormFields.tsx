import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const useGetFormFields = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["new-product"],
    queryFn: () => getFormFields(),
  });

  const navigate = useNavigate();
  const getFormFields = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    console.log("I am called");
    const endpoint = new base.StoreSetting(access_token!, {});
    const res = await endpoint.get_settings();

    return res;
  };
  if (isError) return <h1>Error Loading field</h1>;
  return { data, isLoading };
};

export default useGetFormFields;
