import React from "react";
import { useParams } from "react-router-dom";

const EditCodeBase = () => {
  const { id } = useParams();
  console.log(id);
  // show/321485/manage
  return <div>Edit product with id {`${id}`}</div>;
};

export default EditCodeBase;
