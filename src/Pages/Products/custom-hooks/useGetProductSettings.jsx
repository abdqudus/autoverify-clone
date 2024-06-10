import { useQueries } from "@tanstack/react-query";
import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const useGetProductSettings = (id) => {
  const navigate = useNavigate();
  const [textVal, setTextVal] = useState("");
  const [codebase, setCodebase] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    thumbnail: "",
    description: "",
    codebase: "",
  });
  const [paymentMethod, setPaymentMethod] = useState();
  const result = useQueries({
    queries: [
      { queryKey: ["prod-setting"], queryFn: () => getProduct(id) },
      { queryKey: ["payment-method"], queryFn: () => getPaymentMethod() },
      { queryKey: ["codebase"], queryFn: () => getCodebase() },
    ],
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
        isError: results.some((res) => res.isError),
      };
    },
  });
  if (!result.pending && !result.isError) {
    console.log("object");
  }
  useEffect(() => {
    if (result?.data[0]) {
      setProductDetails({
        name: result.data[0]?.name,
        price: result.data[0].price,
        thumbnail: result.data[0].thumbnail,
        description: result.data[0].description,
        codebase: result.data[0].codebase,
      });
      setTextVal(result.data[0].description);
    }
    if (result?.data[1]?.length) {
      setPaymentMethod(result.data[1]);
    }
    if (result?.data[1]?.length) {
      setCodebase(result.data[2]);
    }
  }, [result.data]);
  console.log(result);
  const getProduct = async (id) => {
    const access_token = await tokenUtil.getToken();

    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.ProductEndpoint(access_token, {});
    const res = await endpoint.read(id);
    // console.log(res);
    return res;
  };

  const getPaymentMethod = async () => {
    const access_token = await tokenUtil.getToken();

    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.PaymentMethod(access_token, {});
    const res = await endpoint.list_unpaginated();
    console.log("payment methods", res);
    return res;
  };

  const getCodebase = async () => {
    const access_token = await tokenUtil.getToken();

    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const res = await endpoint.list_unpaginated();
    return res;
  };

  const handleChange = (e) =>
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return {
    isLoading: result.pending,
    paymentMethod,
    productDetails,
    handleChange,
    setProductDetails,
    textVal,
    setTextVal,
    codebase,
    result,
  };
};

export default useGetProductSettings;
