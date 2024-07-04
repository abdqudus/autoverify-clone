import { useParams } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import CodebaseWrapper from "../../component/CodebaseWrapper";
import CodebaseNavigations from "../../component/CodebaseNavigations";
import { useState } from "react";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AddManyCodes = () => {
  const [textVal, setTextVal] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const addToCodeBase = async () => {
    console.log('useparam id', id);
    const access_token = await _checkLog();
    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const res = endpoint.handle_text_file(textVal, id);
    navigate(`/codebase/show/${id}/manage`);
  }

  return (
    <DashBoardSubRoutesWrapper
      header={t('add-many-codes.header')}
      subheader={`Dashboard/Code bases/${t('add-many-codes.header')}`}
    >
      <div className="mt-6">
        <CodebaseWrapper>
          <div>
            <div className="my-6">
              <h3>{t('add-many-codes.header')}</h3>
              <p className="mt-2">
                {t('add-many-codes.subheader')}
              </p>
            </div>
            <textarea
              className="w-full px-4 py-2 border-2 border-[#ccc] outline-none rounded-[4px]"
              id=""
              value={textVal}
              onChange={e => setTextVal(e.target.value)}
            ></textarea>
            <p className="my-4">{t('add-many-codes.code-limit')}</p>
            <div className="flex justify-end">
              <button onClick={addToCodeBase} className="px-3 font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
                {t('add-many-codes.add-codes-button')}
              </button>
            </div>
          </div>
          <CodebaseNavigations id={id} />
        </CodebaseWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default AddManyCodes;
