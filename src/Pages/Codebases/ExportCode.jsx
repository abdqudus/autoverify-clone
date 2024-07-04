import React, { useEffect, useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import Loader from "../../component/Loader";
import { toastError } from "../../utils/toast";
import Spinner from "../../component/Spinner";

const items = [
  { key: 'boy', id: '0' },
  { key: 'girl', id: '1' },
  { key: 'school', id: '2' },
  { key: 'fish', id: '3' },
  { key: 'cat', id: '5' }
]
const ExportCode = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState([])
  const [codes, setCodes] = useState([])
  const [email, setEmail] = useState('')
  const { t } = useTranslation();

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const upload = async () => {
    if (!validateEmail(email)) {
      toastError('Invalid email format')
    }
    let toBeSent = []
    if (selected.length === 0) {
      toBeSent = codes.map(c => c.id)
    } else {
      toBeSent = selected
    }


    const access_token = await _checkLog();
    const endpoint = new base.CodebaseEndpoint(access_token, {});
    return endpoint.export_codebases({
      "email": email,
      "ids": toBeSent,
    })
  }
  const getData = async () => {
    const access_token = await _checkLog();

    const endpoint = new base.CodebaseEndpoint(access_token, {});
    return await endpoint.list_unpaginated();
  }

  const { data, isLoading } = useQuery({ queryKey: ['export-code'], queryFn: getData })
  const { mutate, isPending } = useMutation({ mutationFn: upload })
  useEffect(() => {
    setCodes(data)
  }, [data])
  useEffect(() => {
    
   }, [])

  if (isLoading) return <Loader />

  return (
    <DashBoardSubRoutesWrapper
      header={t("codeBaseExport.header")}
      subheader={t("codeBaseExport.subheader")}
    >
      <div className="mt-6" onClick={(e) => {
        console.log(e.target)
        if (show && e.target.id !== 'input') {
          setShow(false)
        }
      }}>
        <p className="mt-4 text-[#333333] sm:text-sm font-open-sans leading-[22.4px] text-[.75rem] font-normal">
          {t("codeBaseExport.description")}
        </p>
        <p className="text-sm font-open-sans font-normal leading-[22.4px] text-[#333333] mt-4">
          {t("codeBaseExport.selectCodeBases")} (
          <span className="text-[#2980B9] ">select all</span>):
        </p>


        <div className="w-full flex items-center  relative min-h-[34px] px-2 rounded-[4px] border border-[#CCCCCC] mt-2">
          <ul className="flex gap-2 w-full items-center">
            {codes?.filter(i => selected.includes(i.id)).map(i => (
              <li key={i.id}>
                <button className="max-w-max px-2 py-0 text-white bg-blue-400 rounded-[4px] flex gap-4 justify-between">
                  <span>
                    {i.name + ` (${i.codes.length})`}
                  </span>
                  <span className="text-sm" onClick={() => setSelected(selected.filter(id => id !== i.id))}>x</span>
                </button>

              </li>
            ))}
            {selected.length < codes?.length &&
              <li className="flex-grow ">
                <input id="input" onFocus={() => setShow(true)} className="min-w-[20px]   w-full outline-0 bg-transparent p-1 " type="text" autoCapitalize="off" autoCorrect="off" spellCheck='off' autoComplete="off" />
              </li>
            }
          </ul>
          {show && <div className="absolute  left-0 right-0  gap-2 w-full top-[100%] border-t-0 border-gray-500 rounded-b-[4px] border bg-white">
            {codes?.filter(i => !selected.includes(i.id)).map(i => (
              <p onClick={() => {
                setSelected(prev => ([...prev, i.id]))
                setShow(false)

              }} className="hover:bg-blue-500 p-2  hover:text-white" key={i.id}>{i.name}</p>
            ))}
          </div>}
        </div>




        <p className="text-sm font-open-sans font-normal leading-[22.4px] text-[#333333] mt-4">
          {t("codeBaseExport.emailAddress")}
        </p>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 h-[34px] max-w-[90%] rounded-[4px] border border-[#CCCCCC] mt-2"
        />
        <button disabled={isPending} onClick={() => mutate()} className="h-[34px] disabled:cursor-not-allowed disabled:opacity-50 rounded-[4px] text-sm leading-5 font-open-sans mt-4 bg-[#5CB85C] border border-[#4CAE4C] text-white w-[125px]">
          {isPending ? <div className="flex justify-center items-center">
            <Spinner w="w-5" h="h-5" />
          </div> : t("codeBaseExport.generateExport")}
        </button>
      </div>
    </DashBoardSubRoutesWrapper >
  );
};

export default ExportCode;
