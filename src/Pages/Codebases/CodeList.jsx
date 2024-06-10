import { Link } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import useGetCodebases from "../../customHooks/useGetCodebases";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import EntriesCount from "../../component/EntriesCount";
import { Paginator } from "../../utils/pagination";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import PaginatorBtn from "../../component/PaginatorBtn";

const CodeList = () => {
  // const { data } = useGetCodebases();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [forceReload, setForceReload] = useState(0);

  const deleteCodebase = async (id) => {
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

  // console.log('codebases', codebases);

  return (
    <DashBoardSubRoutesWrapper
      header="Code Base/Code List"
      subheader="Code List"
    >
      <div className="mt-6">
        <div className="md:grid grid-cols-[1fr_215px]">
          <div>
            <div className="show-and-table md:mt-12 md:px-3">
              <EntriesCount />
              {/* <div className="show md:flex justify-between items-center"> */}
              {/* <div className="flex gap-2 flex-wrap">
                  <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
                    show
                  </p>
                  <input
                    className="w-[70px] h-[33px] rounded-[4px] border border-[#CCCCCC]"
                    type="text"
                    name=""
                    id=""
                  />
                  <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
                    entries
                  </p>
                </div> */}
              {/* <div className="mt-3 md:mt-0 md:flex-row md:items-center flex gap-2 flex-wrap">
                  <label
                    htmlFor="search-products"
                    className="font-semibold font-open-sans text-[.875rem] leading-[22.4px] text-[#333333"
                  >
                    Search:
                  </label>
                  <input
                    type="text"
                    id="search-products"
                    className="rounded-[4px] max-w-full border border-[#CCCCCC]"
                  />
                </div> */}
              {/* </div> */}
              <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480]  overflow-x-scroll md:overflow-hidden mt-3">
                <table className="min-w-[550px] w-full">
                  <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
                    <tr className="">
                      <th className="border-r w-[15%]  md:border-r-0  border-white">
                        <div className="flex h-[50px] justify-center items-center gap-2 px-4 ">
                          <img src="/double-triangle.png" alt="" />
                          <p>ID</p>
                        </div>
                      </th>
                      <th className="border-r w-[65%] md:border-r-0  border-white">
                        <div className="flex h-[50px] justify-center items-center gap-2 px-4 ">
                          <img src="/arrow-down-red.png" alt="" />
                          <p>Base name</p>
                        </div>
                      </th>
                      <th className="border-r w-[10%]  md:border-r-0  border-white">
                        <div className="flex h-[50px] justify-center items-center gap-2 px-4 ">
                          <img src="/double-triangle.png" alt="" />
                          <p>ID</p>
                        </div>
                      </th>
                      <th className="w-[20%]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      codebases ?
                        codebases.data.map((d) => (
                          <tr className="h-[48px] text-center ">
                            <td className="px-2 border-r">{d.id}</td>
                            <td className="px-2 border-r">
                              <Link to={`/codebase/show/${d.id}`}>{d.name}</Link>
                            </td>
                            <td className="px-2 border-r">
                              <button
                                onClick={() => deleteCodebase(d.id)}
                                className="w-[70.08px] text-white flex justify-center items-center gap-3  h-[19.5px] rounded-[2.63px] bg-[#E74C3C]"
                              >
                                <img src="/recycle.png" alt="" />
                                <p className="text-[.65625rem] leading-[10.5px]  font-open-sans font-bold">
                                  base
                                </p>
                              </button>
                            </td>
                            <td>
                              <button className="text-[#4CA2C7] h-[21px] border text-[.75rem] font-open-sans leading-[15px] w-[39.39px] border-[#C9C9C9]">
                                <Link to={`/codebase/show/${d.id}/manage`}>
                                  edit
                                </Link>
                              </button>
                            </td>
                          </tr>
                        )) :
                        <p>loading... </p>
                    }
                  </tbody>
                </table>
              </div>
              <div className="mt-3 md:mt-6 font-poppins font-normal pb-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <p className="text-[.875rem] leading-[22.4px] text-[#333333]">
                  Showing 1 of 1 entries
                </p>
                <PaginatorBtn paginator={codebases?.paginator} />
              </div>
            </div>
            <div className="btns md:flex-row md:gap-6 md:mt-6 flex mt-2 flex-col gap-2">
              <button
                onClick={() => { navigate("/codebase/export-code"); }}
                className="hidden sm:flex md:w-[262px] justify-center text-white text-sm w-full gap-2 items-center font-open-sans h-[34px] rounded-[4px] bg-[#5BC0DE] border border-[#46B8DA]">
                <img src="/download-icon.png" alt="" />
                <span> Export code base (CSV)</span>
              </button>
              <button
                onClick={() => { navigate("/codebase/new-base-code"); }}
                className="bg-[#428BCA] md:w-[262px] h-[34px] text-white text-sm font-normal flex justify-center items-center w-full rounded-[4px] border border-[#3276B1]">
                New codebase
              </button>
            </div>
          </div>
          <div className="show-bases md:self-start bg-[#F5F5F5] border border-[#E3E3E3] rounded-[4px] mt-3 flex flex-col gap-4 p-4">
            <h3>Show bases</h3>
            <div className="flex flex-col gap-2">
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#5BC0DE]">
                with active monitoring
              </button>
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#999999]">
                without active monitoring
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#5CB85C]">
                with available codes
              </button>
              <button className="w-full h-[20.5px] rounded-[2.63px] text-[.65625rem] font-bold font-open-sans text-white bg-[#E74C3C]">
                without codes available
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 md:flex md:justify-end ">
          <div className="what-is-this border md:w-[238px] bg-[#F5F5F5] p-4 rounded-[4px]  border-[#F5F5F5]">
            <h3 className="leading-[19.8px] font-open-sans text-lg font-normal text-[#333333]">
              What is this?
            </h3>
            <p className="font-open-sans text-sm mt-4  leading-[22.4px]">
              <span className="font-bold">Codebases</span> are used to store the
              codes and files that you want to sell.
            </p>
          </div>
        </div>
        <button
          className="flex justify-center mt-4 sm:hidden text-white text-sm w-full gap-2 items-center font-open-sans h-[34px] rounded-[4px] bg-[#5BC0DE] border border-[#46B8DA]">
          <img src="/download-icon.png" alt="" />
          <span> Export code base (CSV)</span>
        </button>
      </div>
    </DashBoardSubRoutesWrapper >
  );
};

export default CodeList;
