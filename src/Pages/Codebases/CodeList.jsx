import { Link } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import EntriesCount from "../../component/EntriesCount";
import { Paginator } from "../../utils/pagination";
import { useRef, useState } from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PaginatorBtn from "../../component/PaginatorBtn";
import Modal from "../../component/Modal";
import Spinner from "../../component/Spinner";
import { useTranslation } from "react-i18next";

const CodeList = () => {
  const { t } = useTranslation()
  const modal = useRef()
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const [page, setPage] = useState(0);
  const [forceReload, setForceReload] = useState(0);

  const deleteCodebase = async (id) => {
    console.log('object')
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const res = await endpoint.delete(id);
    console.log(res);
    console.log("deleted");
    return res;
  };

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const fetchCodebases = async (page, forceReload) => {
    const endpoint = new base.CodebaseEndpoint(await _checkLog(), {});
    const paginator = new Paginator(endpoint, page);
    paginator.pager.forceReloadUseState = forceReload;
    const res = (await paginator.current()).results;
    return {
      data: res,
      paginator: paginator
    }
  }

  let { data: codebases, refetch } = useQuery({
    queryKey: ['codebases', page],
    queryFn: () => fetchCodebases({ page: page, setPage: setPage }, { forceReload: forceReload, setForceReload: setForceReload }),
    placeholderData: keepPreviousData,
  });

  const { isPending, isSuccess, mutate } = useMutation(
    {
      mutationFn: deleteCodebase
    })
  if (isPending) {
    modal?.current?.open()
  }
  if (isSuccess) {
    modal.current.close();
    queryClient.invalidateQueries({ queryKey: ['codebases'] })
  }
  return (
    <DashBoardSubRoutesWrapper
      header={t("codeList.header")}
      subheader={t("codeList.subheader")}
    >
      <div className="mt-6">
        <div className="md:grid grid-cols-[1fr_215px]">
          <div>
            <div className="show-and-table md:mt-12 md:px-3">
              <EntriesCount />
              <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480]  overflow-x-scroll md:overflow-hidden mt-3">
                <table className="min-w-[550px] w-full">
                  <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
                    <tr className="">
                      <th className="border-r w-[15%]  md:border-r-0  border-white">
                        <p>{t("codeList.id")}</p>
                      </th>
                      <th className="border-r w-[65%] md:border-r-0  border-white">
                        <p>{t("codeList.baseName")}</p>
                      </th>
                      <th className="border-r w-[10%]  md:border-r-0  border-white">
                        <p>{t("codeList.options")}</p>
                      </th>
                      <th className="w-[10%]"></th>
                      <th className="w-[10%]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      codebases?.data.map((d) => (
                        <tr key={d.id} className="h-[48px] text-center ">
                          <td className="px-2 border-r">{d.id}</td>
                          <td className="px-2 border-r">
                            <Link to={`/codebase/show/${d.id}`}>{d.name}</Link>
                          </td>
                          <td className="px-2 border-r">
                            <button
                              onClick={() => mutate(d.id)}
                              className="w-[70.08px] text-white flex justify-center items-center gap-3  h-[19.5px] rounded-[2.63px] bg-[#E74C3C]"
                            >
                              <img src="/recycle.png" alt="" />
                              <p className="text-[.65625rem] leading-[10.5px]  font-open-sans font-bold">
                                {t("codeList.delete")} </p>
                            </button>

                          </td>
                          <td>
                            <button
                              className="w-[70.08px] text-white flex justify-center items-center gap-3  h-[19.5px] rounded-[2.63px] bg-[#5cb85c]"
                            >
                              <p className="text-[.65625rem] leading-[10.5px]  font-open-sans font-bold">
                                {d.codes.length}  {t("codeList.codes")}
                              </p>
                            </button>
                          </td>
                          <td>
                            <button className="text-[#4CA2C7] h-[21px] border text-[.75rem] font-open-sans leading-[15px] w-[39.39px] border-[#C9C9C9]">
                              <Link to={`/codebase/show/${d.id}/manage`}>
                                {t("codeList.edit")}
                              </Link>
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className="mt-3 md:mt-6 font-poppins font-normal pb-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <p className="text-[.875rem] leading-[22.4px] text-[#333333]">
                  {t("codeList.showingEntries")}
                </p>
                <PaginatorBtn paginator={codebases?.paginator} />
              </div>
            </div>
            <div className="btns md:flex-row md:gap-6 md:mt-6 flex mt-2 flex-col gap-2">
              <button
                onClick={() => { navigate("/codebase/export-code"); }}
                className="hidden sm:flex md:w-[262px] justify-center text-white text-sm w-full gap-2 items-center font-open-sans h-[34px] rounded-[4px] bg-[#5BC0DE] border border-[#46B8DA]">
                <img src="/download-icon.png" alt="" />
                <span>  {t("codeList.exportCSV")} </span>
              </button>
              <button
                onClick={() => { navigate("/codebase/new-base-code"); }}
                className="bg-[#428BCA] md:w-[262px] h-[34px] text-white text-sm font-normal flex justify-center items-center w-full rounded-[4px] border border-[#3276B1]">
                {t("codeList.newCodebase")}
              </button>
            </div>
          </div>
          <div className="show-bases md:self-start bg-[#F5F5F5] border border-[#E3E3E3] rounded-[4px] mt-3 flex flex-col gap-4 p-4">
            <h3>  {t("codeList.show-bases")}</h3>
            <div className="flex flex-col gap-2">
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#5BC0DE]">
                {t("codeList.active-monitoring")}
              </button>
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#999999]">
                {t("codeList.no-active-monitoring")}
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#5CB85C]">
                {t("codeList.availabel-codes")}   </button>
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#E74C3C]">
                {t("codeList.no-available-codes")}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-end ">
          <div className="what-is-this border md:w-[238px] bg-[#F5F5F5] p-4 rounded-[4px]  border-[#F5F5F5]">
            <h3 className="leading-[19.8px] font-open-sans text-lg font-normal text-[#333333]">
              {t("codeList.what-is-this")}
            </h3>
            <p className="font-open-sans text-sm mt-4  leading-[22.4px]">
              <span className="font-bold">  {t("codeList.codebases")}</span> are used to store the
              {t("codeList.use")}
            </p>
          </div>
        </div>
        <button
          className="flex justify-center mt-4 sm:hidden text-white text-sm w-full gap-2 items-center font-open-sans h-[34px] rounded-[4px] bg-[#5BC0DE] border border-[#46B8DA]">
          <img src="/download-icon.png" alt="" />
          <span> Export code base (CSV)</span>
        </button>
        <Modal ref={modal}>
          <Spinner />
        </Modal>
      </div>
    </DashBoardSubRoutesWrapper >
  );
};

export default CodeList;
