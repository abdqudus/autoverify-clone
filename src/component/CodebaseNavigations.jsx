import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import Spinner from "./Spinner";
import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useTranslation } from 'react-i18next';

const CodebaseNavigations = ({ id }) => {
  const modal = useRef();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const deleteCodebase = async (id) => {
    const access_token = await _checkLog();

    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const res = await endpoint.delete(id);
    navigate('/codebase/code-list');
  }

  const handleDeleteSentFiles = async (id) => {
    if (isDeletingSentFIles) {
      return
    }
    const access_token = await _checkLog();
    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const res = await endpoint.delete_sent_files_from_base(id);
    return res;
  }

  const { mutate, isSuccess, isPending } = useMutation({ mutationFn: () => deleteCodebase(id) })
  const { mutate: deleteSentFile, isSuccess: deleteSentFileSuccess, isPending: isDeletingSentFIles } = useMutation({ mutationFn: () => handleDeleteSentFiles(id) })

  return (
    <div className="mt-3">
      <div className="navigations">
        <div className="group">
          <NavLink end className="" to={`/codebase/show/${id}/`}>
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px] bg-[#EEEEEE] flex px-4 items-center">
              <p>{t('codebase-nav.base-config')}</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/manage`}>
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px] bg-[#EEEEEE] flex px-4 items-center">
              <p>{t('codebase-nav.add-codes-files')}</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/edit`}>
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px] bg-[#EEEEEE] flex px-4 items-center">
              <p>{t('codebase-nav.add-many-codes')}</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/export`}>
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px] bg-[#EEEEEE] flex px-4 items-center">
              <p>{t('codebase-nav.codes-export')}</p>
            </div>
          </NavLink>
        </div>
        <div onClick={() => deleteSentFile(id)} className="w-full justify-center has-[.disabled]:cursor-not-allowed mt-5 group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px] bg-[#EEEEEE] flex px-4 items-center">
          <button disabled={isDeletingSentFIles} >{isDeletingSentFIles ? <Spinner w="w-5" h="h-5" /> : t('codebase-nav.delete-sent-files')}</button>
        </div>
        <div className="my-4 px-4 py-6 rounded-[4px] bg-[#EEEEEE]">
          <h4>{t('codebase-nav.activated-monitorings')}</h4>
          <p className="mt-4">{t('codebase-nav.no-monitoring')}</p>
        </div>
        <button disabled={isPending} onClick={() => mutate(id)} className="disabled:cursor-not-allowed flex justify-center items-center disabled:opacity-50 px-4 py-2 w-full bg-[#e74c3c] font-poppins text-sm font-normal leading-[22.4px] rounded-[4px] text-white">
          {isPending ? <Spinner w="w-5" h='h-5' /> : t('codebase-nav.delete-codebase')}
        </button>
      </div>
    </div>
  );
};

export default CodebaseNavigations;
