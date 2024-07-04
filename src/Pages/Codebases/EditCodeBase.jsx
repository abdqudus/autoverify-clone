import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import CodebaseNavigations from "../../component/CodebaseNavigations";
import CodebaseWrapper from "../../component/CodebaseWrapper";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Paginator } from "../../utils/pagination";
import EntriesCount from "../../component/EntriesCount";
import PaginatorBtn from "../../component/PaginatorBtn";
import { useTranslation } from 'react-i18next';

const EditCodeBase = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');
  const [codeDeleted, setCodeDeleted] = useState(null);
  const [editText, setEditText] = useState('');
  const [codeToEdit, setCodeToEdit] = useState(null);
  const [checkAll, setCheckAll] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { id } = useParams();

  class CodebasePaginator extends Paginator {
    async _get_list(limit, offset) {
      return await this.endpoint.codes(
        this.codebase_id,
        limit,
        offset,
        this.reverseWhat,
        this.toReverse,
      );
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && isFocused) {
        handleSave();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFocused, inputVal]);

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const saveCode = async (val, codebase_id) => {
    const endpoint = new base.CodeEndpoint(await _checkLog(), {});
    return await endpoint.create({
      "code": val,
      "codebase": codebase_id
    });
  }

  const fetchCodes = async (page) => {
    const endpoint = new base.CodebaseEndpoint(await _checkLog(), {});
    const paginator = new CodebasePaginator(endpoint, page);
    paginator.codebase_id = id;
    const res = (await paginator.current()).results;
    return {
      data: res,
      paginator: paginator
    };
  }

  const [page, setPage] = useState(0);

  let { data: codes, refetch } = useQuery({
    queryKey: ['codes', page, codeDeleted],
    queryFn: () => fetchCodes({ page, setPage }),
    placeholderData: keepPreviousData,
  });

  const handleSave = () => {
    if (inputVal.trim()) {
      setInputVal('');
      saveCode(inputVal, id).then(() => {
        refetch();
      });
    }
  };

  const handleReplace = async (i, editedCode) => {
    const newArr = [...codes.data];
    newArr[i] = editedCode;
    setCodeToEdit(null);

    const code = codes.data[i];
    const endpoint = new base.CodeEndpoint(await _checkLog(), {});
    console.log(await endpoint.partial_update(code.id, {
      code: editedCode,
      codebase: code.codebase,
    }));
    setCodeDeleted(code);
  }

  const handleRemove = async (codeId, removedCode) => {
    const endpoint = new base.CodeEndpoint(await _checkLog(), {});
    console.log(await endpoint.delete(codeId));
    setCodeDeleted(removedCode);
    return await codes.paginator.current().results;
  }

  const tobeEdited = async (id) => {
    const { code, codebase } = codes.data.find((c) => c.id === id);
    setEditText(code);
    setCodeToEdit(code);
  }

  return (
    <DashBoardSubRoutesWrapper header={t('edit-codebase.header')} additionalHeader={t('edit-codebase.breadcrumb', { id })}>
      <div className="mt-6">
        <CodebaseWrapper>
          <div>
            <h3>{t('edit-codebase.add-codes-title')}</h3>
            <div className="mt-6">
              <p>{t('edit-codebase.codes-info')}</p>
              <p className="my-6">{t('edit-codebase.file-info')}</p>
              {/* <p>{t('edit-codebase.duplicates-info')}</p> */}
              <EntriesCount />

              <div className="mt-4 max-w-full sm:overflow-hidden overflow-x-scroll ">
                <table className="min-w-full w-full border border-gray-400 rounded-[4px]">
                  <thead className="text-left">
                    <tr className="grid bg-black grid-cols-[40px_1fr] ">
                      <th className="h-[40px] p-2 flex justify-center items-center ">
                        <label htmlFor="all-code" className="w-[20px]  bg-black flex justify-center items-center h-[20px] border border-white rounded-[1px]">
                          <input checked={checkAll} onChange={() => setCheckAll(!checkAll)} type="checkbox" name="" id="all-code" className="sr-only peer" />
                          <img width='20' src="/check-edit.png" alt="" className="peer-checked:block hidden" />
                        </label>
                      </th>
                      <th className="text-white text-sm font-semibold p-2">{t('code')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="grid bg-[#EEEEEE] border-b-2 border-gray-400 grid-cols-[40px_1fr] ">
                      <td className="h-[40px] py-2"></td>
                      <td className="flex py-2 px-2 border-l-2 border-gray-300 items-center text-left">
                        <div className="flex flex-grow justify-center items-center">
                          <input onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} value={inputVal} onChange={e => setInputVal(e.target.value)} type="text" placeholder={t('edit-codebase.enter-code-placeholder')} className="w-[40px] border rounded-[4px] px-2 rounded-r-none placeholder:text-[12px] min-h-[34px] flex-grow" />
                        </div>
                      </td>
                    </tr>
                    {codes?.data?.map((c, i) => (
                      <tr key={i} className={`${i % 2 !== 0 ? 'bg-white' : 'bg-gray-100'} has-[:checked]:bg-blue-100 grid h-[40px] border-b  grid-cols-[40px_1fr]`}>
                        <td className="w-[40px] py-2 flex justify-center items-center">
                          <label htmlFor={c + i} className="w-[18px] h-[18px] rounded-[1px] border border-gray-400 ">
                            <input type="checkbox" name="" id={c + i} className="sr-only peer" />
                            <img width='20' src="/check-edit.png" alt="" className="peer-checked:block hidden" />
                          </label>
                        </td>
                        <td className="border-l-2 grid grid-cols-[1fr_80px] pl-2 border-gray-300 text-sm font-normal">
                          {codeToEdit != c.code && <p className="py-2 border-r">{c.code}</p>}
                          {codeToEdit == c.code && <div className="flex items-center gap-2">
                            <input value={editText} onChange={(e) => setEditText(e.target.value)} className="border px-2 h-[30px] border-red-400  flex-grow w-[20px] rounded" type="text" />
                            <button onClick={() => handleReplace(i, editText)} className="p-2 h-[30px] bg-red-300 rounded-[4px] flex justify-center items-center">{t('edit-codebase.edit-save-button')}</button>
                          </div>}
                          <div className="flex px-2 w-[80px] justify-between gap-[1px]">
                            <p onClick={() => { tobeEdited(c.id) }} className="flex px-2 border-x justify-center cursor-pointer items-center">
                              <img width='16px' src="/editing.png" alt={t('edit-codebase.edit-title')} />
                            </p>
                            <p onClick={() => handleRemove(c.id, c.code)} className="flex justify-center cursor-pointer items-center">
                              <img width='16px' src="/code-close-icon.png" alt={t('edit-codebase.delete-title')} />
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex justify-end">
                  <PaginatorBtn paginator={codes?.paginator} />
                </div>
              </div>
            </div>
          </div>
          <CodebaseNavigations id={id} />
        </CodebaseWrapper>
      </div >
    </DashBoardSubRoutesWrapper >
  );
};

export default EditCodeBase;
