import { useQuery } from "@tanstack/react-query";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { TextEditor } from "../../component/TextEditor";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";

const UNPAGINATE = null;

const NewProduct = () => {
  const navigate = useNavigate();
  const { data = { codebases: [], layouts: [] }, isPending } = useQuery({
    queryKey: ["new-product"],
    queryFn: () => fetchCodebases(),
  });
  const [textVal, setTextVal] = useState("");
  const [newProd, setNewProd] = useState({
    name: "",
    description: "",
    price: "",
    codebase: "",
  });
  const navigate_to_create_codes = () => {
    navigate("/codebase/new-base-code");
  };
  const setProductDetails = (e) => {
    console.dir(e.target.value);
    setNewProd({
      ...newProd,
      [e.target.name]: e.target.value,
      description: textVal,
    });
  };
  const handleSendDetails = async () => {
    const { name, price } = newProd;
    let { codebase } = newProd;
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    if (name && price) {
      if (!codebase) {
        const first_codebase = data.codebases[0];
        if (!first_codebase) {
          alert("please add codes to continue");
          return;
        }
        codebase = first_codebase.id;
      }
      const endpoint = new base.ProductEndpoint(access_token, {});
      try {
        const res = await endpoint.create({
          name: name,
          price: price,
          use_codebase: true,
          codebase: codebase,
          description: newProd.description,
        });
        if (!("product_id" in res)) {
          console.error(res);
          throw Error(`Server returned with: ${res}`);
        }

        navigate(`/products/all-products/${res.product_id}`);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("input all field");
    }
  };
  const fetchCodebases = async () => {
    const access_token = await tokenUtil.getToken();

    if (access_token == null) {
      navigate("/login");
    }
    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const codebase = await endpoint.list(UNPAGINATE);
    console.log(codebase);
    return {
      codebases: codebase,
      layouts: [],
    };
  };

  if (isPending) {
    return <Loader />;
  }
  return (
    <DashBoardSubRoutesWrapper
      font="font-poppins"
      header="Dashboard/Products/New"
      subheader="New Product"
    >
      <div className="mt-4 flex flex-col gap-2">
        <p className=" font-open-sans font-normal leading-[22.4px] text-sm text-[#333333]">
          Product name
        </p>
        <input
          name="name"
          type="text"
          required
          onChange={(e) => setProductDetails(e)}
          className=" border border-[#CCCCCC] w-full"
        />
      </div>
      <div className="text-sm mt-2 text-[#333333] leading-[22.4px]  font-open-sans font-normal ">
        <p>Product description</p>
        <p>
          Product description will be found in transaction website. Add the most
          important information about your product here.
        </p>
        <TextEditor val={{ textVal, setTextVal }} />
      </div>
      <div className="mt-4">
        <p>Price and currency</p>
        <div className="md:flex gap-6 mt-2">
          <input
            type="number"
            name="price"
            required
            onChange={(e) => setProductDetails(e)}
            value={newProd.price}
            className="w-full md:w-[186.22px] border h-[34px] border-[#CCCCCC] rounded-[4px]"
          />
          <input
            type="text"
            className="w-full md:w-[186.22px] border h-[34px] border-[#CCCCCC] rounded-[4px]"
          />
        </div>
      </div>
      <div className="text-[#333333] mt-4 font-open-sans font-normal text-[.875rem]">
        <p>Settings layout</p>
        <p className="mt-1 leading-[22.4px]">
          Choose layout from which settings will be submitted to monitoring.
          <a className="text-[#428BCA] pl-1">
            Click here to add new settings layout.
          </a>
        </p>
        <select className="w-full mt-2 h-[34px] border border-[#CCCCCC]  rounded-[4px]">
          <option value="Default">Default</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="text-[#333333] mt-4 font-open-sans font-normal text-[.875rem]">
        <p>Code base</p>
        <p className="mt-1 leading-[22.4px]">
          Choose codebase from which codes will be sent to customers.
          <a
            onClick={(e) => navigate_to_create_codes()}
            className="text-[#428BCA] pl-1"
          >
            Click here to add new codebase.
          </a>
        </p>
        <select
          onChange={(e) => setProductDetails(e)}
          name="codebase"
          className="w-full mt-2 h-[34px] border border-[#CCCCCC]  rounded-[4px]"
        >
          {data && data?.codebases?.length > 0 ? (
            data.codebases.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
      </div>
      <div className="mt-10 p-0">
        <button
          onClick={handleSendDetails}
          className=" font-open-sans font-normal text-[.875rem] leading-5 text-white rounded-[4px] h-[34px] w-[138.11px] bg-[#5CB85C] border border-[#4CAE4C]"
        >
          Add new product
        </button>
      </div>
      <div className="flex mt-[137px] lgs:-mt-4 lgs:justify-end flex-col lgs:flex-row gap-4">
        <div className="p-4 lgs:w-[250px] lgs:h-[201px] rounded-[4px] shadow-product-shadow  bg-[#E3E3E3]">
          <div className="font-open-sans font-normal ">
            <p className="leading-[19.8px] mb-2 text-[.875rem] ">
              Trademarks and infringements
            </p>
            <p className="text-[.75rem] leading-[22.4px]">
              In the names, product descriptions and photos, you can not use
              registered trademarks of companies{" "}
              <span className=" italic">(eg Netflix Inc. ).</span> Shops that
              break this prohibition will be automatically blocked.
            </p>
          </div>
          <div></div>
        </div>
        <div className="p-4 lgs:w-[307px] lgs:h-[246px] rounded-[4px] shadow-product-shadow mb-12 bg-[#E3E3E3]">
          <div className="font-open-sans font-normal ">
            <p className="leading-[19.8px] mb-2 border-b pb-2 text-[.875rem]  border-[#CCCCCC]">
              Advanced integration
            </p>
            <p className="text-[.75rem] mb-2 leading-[22.4px]">
              If you want process of order to appear on your website, learn
              easier integration procedure:
              <a className="text-[#428BCA]">store documentation.</a>
            </p>
            <p className="text-[.75rem] mb-2 leading-[22.4px]">
              For advanced integration we recommend solutions using our API:
              <a className="text-[#428BCA]"> API documentation.</a>
            </p>
            <p className="text-[.75rem] leading-[22.4px] ">
              In case of problems with integration contact us.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewProduct;
