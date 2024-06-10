// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchProducts from "../utils/fetchProducts";
// import { Products } from "../types/type";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = () => {
  const navigate = useNavigate();
  const {
    isPending,
    data = [],
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
  if (error) {
    console.log(error)
    // navigate("/login");
  }
  return { data, isPending };
};

export default useGetProducts;
