import { useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import ProductDetailExtenstion from "../../component/ProductDetailExtenstion";
import { TextEditor } from "../../component/TextEditor";
// import { convertToBase64 } from "../../utils/convertToBase64";
import { useNavigate, useParams } from "react-router-dom";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import Loader from "../../component/Loader";
import useGetProductSettings from "./custom-hooks/useGetProductSettings";
import { toastSuccess } from "../../utils/toast";
import { useMutation } from "@tanstack/react-query";
import Spinner from "../../component/Spinner";
import { t } from "i18next";

const ProductSettings = () => {
  const [showNewImg, setShowNewImg] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    productDetails: data,
    handleChange,
    setProductDetails,
    textVal,
    setTextVal,
    codebase,
  } = useGetProductSettings(id);

  console.log(data)
  console.log(data);
  const handleProductSettings = async () => {
    const thumbnail = data.thumbnail
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.ProductEndpoint(access_token, {});
    const res = await endpoint.partial_update(id, {
      "description": data.description,
      "name": data.name,
      "price": data.price,
      "use_codebase": true,
      "codebase": data.codebase,
      "is_active": true
    });
    endpoint.update_image(id, data.thumbnail); // made this non blocking to suppress errors
    toastSuccess('Saved Succesffuly');
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductDetails((prev) => ({ ...prev, thumbnail: file }));
    }
    setShowNewImg(true);
  };
  // const handleDescriptionChange = () => { };
  const { mutate, isPending } = useMutation({ mutationFn: handleProductSettings })
  if (isLoading) {
    return <Loader />;
  }

  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Product/Osteen "
      subheader="Product settings"
    >
      <div className="wholepage-div lg:grid grid-cols-3/1 gap-4">
        <div className="lhs-div">
          <div className="thumbnail-and-prod-div sm:flex lg:gap-4 flex-wrap gap-6">
            <div className="thumbnail-div">
              <p className="text-[#333333] font-poppins text-[.75rem] leading-[22.4px]">
                Thumbnail
              </p>
              <div className="vsm:w-full overflow-hidden vsm:max-w-[250px] w-[250px] aspect-[5/3] border border-[#DDDDDD] rounded-[4px]">
                {!showNewImg && (
                  <img
                    src={data.thumbnail}
                    alt=""
                    className="w-full max-w-full rounded-[4px] bg-cover"
                  />
                )}
                {showNewImg && (
                  <img
                    src={URL.createObjectURL(data.thumbnail)}
                    alt=""
                    className="w-full max-w-full rounded-[4px] bg-cover"
                  />
                )}
              </div>
              <p className="flex relative flex-wrap gap-2 mt-2">
                <label
                  htmlFor="change_img"
                  className="w-[73.13px] h-[34px] flex justify-center items-center rounded-[4px] border border-[#CCCCCC] font-poppins text-[#333333] text-[.75rem] font-normal leading-5"
                >
                  change
                </label>
                <input
                  onChange={handleImageChange}
                  className="sr-only"
                  type="file"
                  name=""
                  id="change_img"
                />
                <button className="w-[73.13px] h-[34px] rounded-[4px] border border-[#CCCCCC] font-poppins text-[#333333] text-[.75rem] font-normal leading-5">
                  delete
                </button>
              </p>
            </div>
            <div className="mt-3">
              <div className="prod-name-div">
                <p className="text-[#333333] font-normal font-poppins text-[.75rem] leading-[22.4px]">
                  Product name
                </p>
                <input
                  type="text"
                  className="w-full px-2 h-[34px] border border-[#CCCCCC] rounded-[4px]"
                  value={data.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3 ">
                <p className="text-[#333333] mt-3 sm:mt-0 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                  Price and currency
                </p>
                <p className="flex items-center justify-between flex-wrap gap-2">
                  <input
                    type="number"
                    className="w-[60.66px] px-2 h-[34px] border border-[#CCCCCC] rounded-[4px]"
                    value={data.price}
                    onChange={handleChange}
                    name="price"
                  />
                  <input
                    type="text"
                    className="w-[94px] h-[34px] border border-[#CCCCCC] rounded-[4px]"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="codebase-div mt-6 ">
              <h3 className="text-[#333333] font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Codebase
              </h3>
              <p className="text-[#333333] mt-2 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Choose base from which codes will be downloaded and sent to
                customers.
              </p>
              <select
                value={codebase?.find((c) => c.id == data.codebase)?.id}
                id="payment-operator"
                className=" border border-[#CCCCCC] mt-2 text-[#444444] w-full"
              >
                {codebase?.map((m) => (
                  <option id={m.id} key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="product-description-div mt-6">
              <h3 className="text-[#333333] mb-4 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Product description
              </h3>
              <TextEditor val={{ textVal, setTextVal, setProductDetails }} />
              <button
                disabled={isPending}
                onClick={() => mutate()}
                className="bg-[#5CB85C] disabled:cursor-not-allowed disabled:opacity-50 rounded-[4px] h-[34px] mt-6 font-poppins text-[.75rem] leading-5 text-white flex items-center justify-center border vsm:max-w-full w-[166.06px]  border-[#4CAE4C]"
              >
                {isPending ?
                  <div className="flex justify-center items-center">
                    <Spinner w="w-5" h="h-5" />
                  </div>
                  : t('save-prod-settings')
                }
              </button>

            </div>
          </div>
        </div>
        <ProductDetailExtenstion //rhs
          bg="bg-[#5CB85C] "
          border="border-[#4CAE4C] "
          data={data}
        />
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ProductSettings;
