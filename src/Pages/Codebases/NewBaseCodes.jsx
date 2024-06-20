import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { useState } from "react";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Spinner from '../../component/Spinner'
const NewBaseCodes = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false)
  const [newCodeBase, setNewCodeBase] = useState({
    name: "",
  });
  const navigate = useNavigate();

  const setProductDetails = (e) => {
    setNewCodeBase({
      ...newCodeBase,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendDetails = async () => {

    setIsLoading(true)
    const codebaseName = newCodeBase.name;
    const access_token = await tokenUtil.getToken();

    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const res = await endpoint.create({
      name: codebaseName,
    });
    navigate(`/codebase/show/${res.id}/manage`);
    return res;
  };

  return (
    <DashBoardSubRoutesWrapper
      header={t("newBaseCodes.header")}
      subheader={t("newBaseCodes.subheader")}
    >
      <div className="mt-6">
        <div className="flex flex-col">
          <label
            htmlFor="base-name"
            className="font-normal font-open-sans text-sm leading-[22.4px] text-[#333333]"
          >
            {t("newBaseCodes.name")}
          </label>
          <input
            className="rounded-[4px] px-3 mt-1 w-full sm:w-[80%] max-w-[812.5px] border border-[#CCCCCC]"
            type="text"
            name="name"
            id="base-name"
            onChange={(e) => setProductDetails(e)}
          />
        </div>
        <div className="my-5 flex justify-end sm:justify-start">
          <button
            disabled={isLoading || newCodeBase.name == ''}
            onClick={handleSendDetails}
            className="max-w-max disabled:cursor-not-allowed disabled:opacity-50 px-2 h-[34px] font-open-sans rounded-[4px] border block border-[#4CAE4C] bg-[#5CB85C] text-white text-sm leading-5"
          >
            {isLoading ? <Spinner w="w-5" h="h-5" /> : t("newBaseCodes.addNewBase")}
          </button>
        </div>
        <div className="mt-4 sm:flex">
          <div className="bg-[#F5F5F5] sm:w-[435px] sm:ml-auto p-4 px-6 border border-[#E3E3E3] rounded-[4px]">
            <h3 className="text-[#333333] mb-3 font-open-sans text-[1.125rem] leading-[19.8px]">
              {t("newBaseCodes.title")}
            </h3>
            <p className="text-[#333333] mt-3 text-[.75rem]  leading-[22.4px]">
              {t("newBaseCodes.description")}
            </p>
            <p className=" text-[#333333] text-[.75rem]  leading-[22.4px] mt-2">
              <span className="font-bold">
                {t("newBaseCodes.standard")}
              </span>
            </p>
            <p className="text-[#333333] text-[.75rem]  leading-[22.4px] mt-2">
              <span className="font-bold">
                {t("newBaseCodes.recursive")}
              </span>
            </p>
            <p className=" text-[#333333] text-[.75rem]  leading-[22.4px] mt-2">
              <span className="font-bold">
                {t("newBaseCodes.multiBase")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper >
  );
};

export default NewBaseCodes;
