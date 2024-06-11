import { useQuery } from "@tanstack/react-query";
import CodebaseNavigations from "../../component/CodebaseNavigations";
import CodebaseWrapper from "../../component/CodebaseWrapper";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { useParams } from "react-router-dom";
import Loader from "../../component/Loader";
import { useNavigate } from "react-router-dom";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useState } from "react";

const CodesExport = () => {
  const { id } = useParams();
  const { secondIsLoading, setSecondIsLoading } = useState(false);

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const OnServerError = (responseObject) => {

    if (!responseObject.ok) {
      if (responseObject.status == 404) {
        navigate('/404');
      }
    }
  }

  const getCodesDetails = async (id) => {
    const access_token = await _checkLog();
    const endpoint = new base.CodebaseEndpoint(access_token, {}, OnServerError);
    const res = await endpoint.read(id);
    res.total_codes = res.codes.length;
    return res;
  }

  const downloadCode = async (what) => {
    const access_token = await _checkLog();
    const endpoint = new base.CodebaseEndpoint(access_token, {}, OnServerError);
    endpoint.del_header('accept');

    let endpoint_url,
      fileName;

    switch (what.trim().toLowerCase()) {
      case 'all':
        endpoint_url = endpoint.endpoints.download_all_codes;
        fileName = 'All_Codes.csv';
        break
      case 'unsent':
        endpoint_url = endpoint.endpoints.download_unsent_codes;
        fileName = 'UnUsed_Codes.csv';
        break
      case 'sent':
        endpoint_url = endpoint.endpoints.download_sent_codes;
        fileName = 'Used_Codes.csv';
        break
      default:
        console.error('Invalid what parameter must be either `all`,`unsent`,`sent` ')
    }

    endpoint_url = base._join(endpoint_url.replace(`{${endpoint.id_name}}`, id));

    const data = await endpoint._fetch(endpoint_url, 'GET', undefined, async (data, res) => {
      console.log('downloading file...');
      await base.downloadAsFile(data, 'text/csv', fileName);
    });
  }

  const { data, isLoading } = useQuery({ queryKey: ['codes-export'], queryFn: () => getCodesDetails(id) })

  console.log(data);

  if (isLoading) {
    return <Loader />
  }
  if (secondIsLoading) {
    return <Loader />
  }
  return (
    <DashBoardSubRoutesWrapper
      header="Edit Codebase"
      subheader="Dashboard/Code bases/ name"
    >
      <div className="mt-6">
        <CodebaseWrapper>
          <div className="mb-6">
            <div className="my-4">
              <h3>Codes Export</h3>
              <p className="mt-2">
                You can export all codes from this base (used and unused) to
                Excel file.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-semibold"> Base name</span> : {data.name}
              </p>
              <p>
                <span className="font-semibold"> Total Codes </span> : {data.total_codes}
              </p>
              <p>
                <span className="font-semibold"> Amount of unused codes</span> :
                {data.unused_codes}
              </p>
              <p>
                <span className="font-semibold"> Amount of used codes</span> : {data.used_codes}
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => downloadCode('all')}
                className="w-full rounded-[4px] text-white  border border-[#eea236] bg-[#f0ad4e] md:max-w-[600px] text-center h-[2.5rem] flex justify-center items-center">
                Download all codes (CSV)
              </button>
              <button
                onClick={() => downloadCode('unsent')}
                className="w-full rounded-[4px]  text-white border  border-[#4cae4c] bg-[#5cb85c] mt-4 md:max-w-[600px] text-center h-[2.5rem] flex justify-center items-center">
                Download unused codes (CSV)
              </button>
              <button
                onClick={() => downloadCode('sent')}
                className="w-full rounded-[4px]  text-white border border-[#428bcac2] bg-[#428bcac2] mt-4 md:max-w-[600px] text-center h-[2.5rem] flex justify-center items-center">
                Download used codes (CSV)
              </button>
            </div>
          </div>
          <CodebaseNavigations id={id} />
        </CodebaseWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default CodesExport;
