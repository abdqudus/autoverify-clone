import { useState } from "react";
import Input from "./Input";
import LayoutNavigations from "./LayoutNavigations";
import SettingsWrapper from "./SettingsWrapper";
import { TextEditor } from "./TextEditor";
import { useNavigate } from "react-router-dom";
import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import { useTranslation } from "react-i18next";

const NewSettingsLayOut = ({ setIsNewSetting }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [textVal, setTextVal] = useState("");
  const [isValidyChecked, setIsValidityChecked] = useState(false);
  const [layoutSettings, setLayoutSettings] = useState({ name: '', subject: '', msgContent: textVal });

  const handleSaveLayout = async () => {
    setIsValidityChecked(true);
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.LayoutEndpoint(access_token, {});
    await endpoint.create({
      message: layoutSettings.msgContent,
      subject: layoutSettings.subject,
      name: layoutSettings.name,
    });
    setIsNewSetting(false);
  };

  const handleChange = (e) => {
    setLayoutSettings(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="mt-6">
      <SettingsWrapper>
        <LayoutNavigations />
        <div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-[#2980B9] font-open-sans text-[1.11625rem] leading-[19.8px] mb-3">
              {t('newSettingsLayout.newLayout')}
            </h2>
            <h3 className="text-[#333333] font-open-sans text-[1.11625rem] leading-[19.8px]">
              {t('newSettingsLayout.configurationTemplate')}
            </h3>
            <h4 className="font-bold text-sm mt-4">{t('newSettingsLayout.layoutName')}</h4>
            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              {t('newSettingsLayout.chooseName')}
            </p>
            {isValidyChecked && !layoutSettings.name && <p className="text-red-500 text-sm">{t('newSettingsLayout.enterName')}</p>}
            <Input handleChange={(e) => handleChange(e)} value={layoutSettings.name} id="name" />
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-sm mt-2">{t('newSettingsLayout.subject')}</h4>
            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              {t('newSettingsLayout.messageWithCode')}
            </p>
            {isValidyChecked && !layoutSettings.subject && <p className="text-red-500 text-sm">{t('newSettingsLayout.enterSubject')}</p>}
            <Input id="subject" placeholder="Successfull Order" handleChange={(e) => handleChange(e)} value={layoutSettings.subject} />
          </div>
        </div>
      </SettingsWrapper>
      <SettingsWrapper>
        <div className="md:col-start-2">
          <div className="mt-6">
            <h4 className="font-bold text-sm mt-4">{t('newSettingsLayout.messageContent')}</h4>
            {isValidyChecked && !layoutSettings.msgContent && <p className="text-red-500 text-sm">{t('newSettingsLayout.enterContent')}</p>}
            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2" dangerouslySetInnerHTML={{ __html: t('newSettingsLayout.messageWithContent') }} />
            <TextEditor val={{ textVal, setTextVal, setLayoutSettings }} />
            <button onClick={handleSaveLayout} className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[100.25px] rounded-[4px] text-white">
              {t('newSettingsLayout.saveLayout')}
            </button>
          </div>
        </div>

      </SettingsWrapper>
    </div>
  );
};

export default NewSettingsLayOut;
