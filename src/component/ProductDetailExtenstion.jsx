import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import { Link, useParams } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const ProductDetailExtenstion = ({ bg, border, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [tobeDeleted, setTobeDeleted] = useState(null);
  const { id } = useParams();

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const onDelete = async (product) => {
    const endpoint = new base.ProductEndpoint(await _checkLog(), {});
    console.log('deleting this product ...', product);
    return await endpoint.delete(product.id);
  };

  const handleClickDelete = async (name, id) => {
    setTobeDeleted({ name, id });
    setShowModal(true);
  }

  const handlePause = async () => {
    // I need to know if
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      throw Error("Go to login");
    }
    const endpoint = new base.ProductEndpoint(access_token, {});
    const product = await endpoint.read(data.product_id);
    const payload = JSON.stringify({
      is_active: !product.is_active,
    });
    const result = await endpoint.partial_update(data.product_id, payload);

    // is possible the result could have and error from the server
    // handle error
  };
  return (
    <div className="mt-[30px] justify-self-end  lg:mt-4 md:flex gap-4 lg:flex-col items-start justify-between">
      <div className="max-w-[250px] lg:w-full p-4 text-[#333333] font-open-sans  min-h-[146.19px] rounded-[4px] bg-[#F5F5F5] border border-[#E3E3E3]">
        <p className="text-[#333333] font-open-sans text-lg left-[19.8px]">
          Status
        </p>
        <p className="my-4 text-[.875rem] leading-[22.4px]">
          Product is in stock
        </p>
        <button
          onClick={handlePause}
          className={`w-full h-[34px] text-white ${bg} ${border}  rounded-[4px]`}
        >
          Pause sale
        </button>
      </div>
      <div className="mt-[4rem] md:mt-0">
        <p className="text-[#333333] pb-1 border-b  font-open-sans text-lg left-[19.8px]">
          Management
        </p>
        <div className="font-open-sans mt-4 font-normal text-[.875rem] text-[#555555]">
          <div className="max-w-[250px] lg:w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/msg.png" alt="" />
            <p className="leading-[22.4px]"><Link to={`/products/all-products/${id}`}>Show details</Link></p>
          </div>
          <div className="max-w-[250px] lg:w-[250px] px-2  flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/prod-setting.png" alt="" />
            <p className="leading-[22.4px]">
              <Link to={`/products/all-products/${id}/monitoring`}>Product settings</Link>
            </p>
          </div>
          <div onClick={() => handleClickDelete(data.name, data.product_id)} className="max-w-[250px] cursor-pointer px-2  mb-4 flex gap-4 items-center h-[44.39px] border rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
            <img src="/delete.png" alt="" />
            <p className="leading-[22.4px]">Delete product</p>
          </div>
        </div>
      </div>
      {/* <div className="mt-[4rem] md:mt-0 lg:w-full">
        <p className="text-[#333333] font-open-sans text-lg left-[19.8px]">
          Statistics
        </p>
        <div className="max-w-[250px] px-2  mt-4 border  flex gap-4 justify-between items-center h-[64.98px] rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
          <p className="flex flex-col gap-2">
            <span className="text-[#333333] text-lg leading-[19.8px]">0</span>
            <span className="text-[#555555] text-sm leading-[18.2pxx]">
              purchases
            </span>
          </p>
          <img src="/cart.png" alt="" />
        </div>
        <div className="max-w-[250px] px-2 border  flex gap-4 justify-between items-center h-[64.98px] rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
          <p className="flex flex-col gap-2">
            <span className="text-[#333333] text-lg leading-[19.8px]">0</span>
            <span className="text-[#555555] text-sm leading-[18.2pxx]">
              sold products
            </span>
          </p>
          <img src="/barcode.png" alt="" />
        </div>
        <div className="max-w-[250px] px-2 border  flex gap-4 justify-between items-center h-[64.98px] rounded-tl-[4px] rounded-tr-[4px] bg-white border-[#DDDDDD]">
          <p className="flex flex-col gap-2">
            <span className="text-[#333333] text-lg leading-[19.8px]">
              0.00
            </span>
            <span className="text-[#555555] text-sm leading-[18.2pxx]">
              all value
            </span>
          </p>
          <img src="/dollar.png" alt="" />
        </div>
      </div> */}
      <DeleteModal onDelete={onDelete} tobeDeleted={tobeDeleted} showModal={showModal} setShowModal={setShowModal} navigateAfterwards={'/products/all-products/'} />
    </div>
  );
};

export default ProductDetailExtenstion;
