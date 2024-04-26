// import { useState } from "react";
import fetchProducts from "../utils/fetchProducts";
// import { Products } from "../types/type";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = () => {
  const { isPending, data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
  return { data, isPending };
};

export default useGetProducts;
