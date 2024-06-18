import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import LayoutNavigations from "./LayoutNavigations";
import SettingsWrapper from "./SettingsWrapper";
import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import Loader from "./Loader";
import DeleteModal from "./DeleteModal";
import EntriesCount from "./EntriesCount";
import PaginatorBtn from "./PaginatorBtn";

const LayoutList = ({ setIsNewSetting }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [tobeDeleted, setTobeDeleted] = useState({ name: '', id: null });

  const handleClickDelete = (name, id) => {
    setTobeDeleted({ name, id });
    setShowModal(true);
  };

  const onDelete = async (id) => {
    const access_token = await _checkLog();
    const endpoint = new base.LayoutEndpoint(access_token, {});
    return await endpoint.delete(id);
  };

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const fetchLayoutList = async () => {
    let limit, offset;
    const access_token = await _checkLog();

    const endpoint = new base.LayoutEndpoint(access_token, {});
    const res = await endpoint.list(limit, offset);
    console.log('layout list', res);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["layout-list"],
    queryFn: fetchLayoutList
  });

  return (
    <div className="mt-6 ">
      <SettingsWrapper>
        <LayoutNavigations />
        <div className="flex md:hidden mt-12 gap-2 flex-wrap">
          <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
            {t('layoutList.show')}
          </p>
          <input
            className="w-[70px] h-[33px] rounded-[4px] border border-[#CCCCCC]"
            type="text"
            name=""
            id=""
          />
          <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
            {t('layoutList.entries')}
          </p>
        </div>
        <div className="table-div">
          <h3 className="text-[1.74rem] hidden md:block text-[#2980B9] leading-[30.8px] font-open-sans">
            {t('layoutList.layoutListTitle')}
          </h3>
          <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480]  overflow-x-scroll md:overflow-hidden mt-3">
            <table className="min-w-[350px] w-full">
              <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
                <tr className="">
                  <th className="h-[50px] text-start px-3 w-[20%]">{t('layoutList.id')}</th>
                  <th className="w-[80%] text-start px-3">{t('layoutList.campaignName')}</th>
                </tr>
              </thead>
              <tbody>
                {data && data.results.map(d => (
                  <tr key={d.id} className="h-[48px]">
                    <td className="px-3">{d.id}</td>
                    <td className="px-3">
                      <div className="flex justify-between">
                        <p>{d.name}</p>
                        <div className="flex gap-2 items-center">
                          <button className="w-[39.39px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#4CA2C7] font-open-sans text-[.75rem] leading-[15px]">
                            <Link to={`/settings/layout/edit/${d.id}`}>
                              {t('layoutList.edit')}
                            </Link>
                          </button>
                          <button onClick={() => handleClickDelete(d.name, d.id)} className="w-[52.88px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#DB5555] font-open-sans text-[.75rem] leading-[15px]">
                            {t('layoutList.delete')}
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {isLoading && <Loader />}
            {data && data.results.length === 0 && <p className="p-4">{t('layoutList.emptyList')}</p>}
          </div>
          <div className="show-and-prev-next mt-4 font-poppins font-normal pb-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <EntriesCount />
            <PaginatorBtn />
          </div>
          <div className="btn mt-12">
            <button
              onClick={() => setIsNewSetting(true)}
              className="h-[34px] md:w-[230px] w-full border border-[#3276B1] bg-[#428BCA] rounded-[4px] text-sm leading-5 font-open-sans text-white"
            >
              {t('layoutList.newSettingsTemplate')}
            </button>
          </div>
          <DeleteModal showModal={showModal} tobeDeleted={tobeDeleted} onDelete={onDelete} setShowModal={setShowModal} />
        </div>
      </SettingsWrapper >
      <div className="mt-4 what-is-this md:w-[230px] rounded-[4px]  border border-[#E3E3E3] text-[#333333] bg-[#E3E3E3] p-4 text-sm font-open-sans">
        <h3 className="leading-[19.8px] text-lg pb-2 border-b  border-[#CCCCCC]">
          {t('layoutList.whatIsThis')}
        </h3>
        <p className="leading-[22.4px] mt-4" dangerouslySetInnerHTML={{ __html: t('layoutList.templatesExplanation') }} />
      </div>
    </div >
  );
};

export default LayoutList;
