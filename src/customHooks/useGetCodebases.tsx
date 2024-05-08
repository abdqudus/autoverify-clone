// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchCodebases from "../utils/fetchCodebases";
// import { Products } from "../types/type";
import { useQuery } from "@tanstack/react-query";

const useGetCodebases = () => {
  const navigate = useNavigate();
  const {
    isPending,
    data = [],
    error,
  } = useQuery({
    queryKey: ["codebases"],
    queryFn: () => fetchCodebases(),
  });
  if (error) {
    navigate("/login");
  }
  return { data, isPending };
};

export default useGetCodebases;
