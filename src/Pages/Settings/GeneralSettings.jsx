import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { accountSettingsData } from "../../Data/settings-data";
import Checkbox from "../../component/Checkbox";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";

const GeneralSettings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [moreSettings, setMoreSettings] = useState({ useDefaultLayout: true, transaction_email: '' });
  const [userDetails, setUserDetails] = useState({ first_name: '', last_name: '', email: '', username: '' });

  const handleChange = (e) => {
    if (e.target.id === 'transaction_email') {
      setMoreSettings({ ...moreSettings, transaction_email: e.target.value });
    } else {
      setUserDetails(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const saveAccountSettings = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const InitialUserDetails = result.data[0];
    const endpoint = new base.UserEndpoint(access_token, {});
    const res = await endpoint.partial_update(InitialUserDetails.id, userDetails);
    alert(t('general-settings.saveChanges'));
    return res;
  };

  const saveMoreSettings = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.GeneralSettingsEndpoint(access_token, {});
    const res = await endpoint.update_settings({
      use_default_layout: moreSettings.useDefaultLayout,
      transaction_email: moreSettings.transaction_email,
    });
    console.log(res);
    alert(t('general-settings.saveChanges'));
    return res;
  };

  const fetchSettingsData = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.UserEndpoint(access_token, {});
    const res = await endpoint.me();
    return res;
  };

  const fetchMoreSettings = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.GeneralSettingsEndpoint(access_token, {});
    return await endpoint.get_settings();
  };

  const result = useQueries({
    queries: [
      { queryKey: ["general-settings-data"], queryFn: fetchSettingsData },
      { queryKey: ["more-settings"], queryFn: fetchMoreSettings },
    ],
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
        isError: results.some((res) => res.isError),
      };
    },
  });

  useEffect(() => {
    if (!result.pending && !result.isError) {
      if (result.data[0]) {
        setUserDetails({
          email: result.data[0].email,
          username: result.data[0].username,
          first_name: result.data[0].first_name,
          last_name: result.data[0].last_name
        });
      }
      if (result.data[1]) {
        setMoreSettings({
          useDefaultLayout: result.data[1].use_default_layout,
          transaction_email: result.data[1].transaction_email
        });
      }
    }
  }, [result.data]);

  return (
    <DashBoardSubRoutesWrapper
      header={t('general-settings.header')}
      subheader={t('general-settings.subheader')}
    >
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />
          <div className="mb-4 md:mt-0">
            <p className="mb-6">{t('general-settings.account-settings-title')}</p>
            {/* {accountSettingsData.map((d) => {
              const { type, text, id, placeholder, readOnly } = d;
              return (
                <LabelInput
                  text={t(`${id}`)}
                  id={id}
                  placeholder={t('general-settings.emailPlaceholder')}
                  key={id}
                  readOnly={readOnly}
                  type={type}
                  value={userDetails[id]}
                  handleChange={handleChange}
                  style="mb-3"
                />
              );
            })} */}
            <LabelInput
              id='username'
              readOnly={true}
              text={t('general-settings.username')}
              handleChange={handleChange}
              value={userDetails.username}
              style="mb-3"
              placeholder='John'
            />
            <LabelInput
              id='firstname'
              placeholder='John'
              // placeholder={t('general-settings.emailPlaceholder')}
              text={t('general-settings.firstname')}
              handleChange={handleChange}
              value={userDetails.first_name}
              style="mb-3"
            />
            <LabelInput
              id='firstname'
              placeholder='Doe'
              text={t('general-settings.lastname')}
              handleChange={handleChange}
              value={userDetails.last_name}
              style="mb-3"
            />
            <LabelInput
              id='email'
              placeholder={t('general-settings.emailPlaceholder')}
              text={t('general-settings.email')}
              handleChange={handleChange}
              value={userDetails.email}
              style="mb-3"
              type='email'
            />
            <button onClick={saveAccountSettings} className="h-[34px] text-sm font-open-sans leading-5 my-2 mb-5 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
              {t('general-settings.saveChanges')}
            </button>
            <div>
              <p className="mt-6 mb-3">{t('general-settings.more-settings-title')}</p>
              <Checkbox
                onIsChecked={() => setMoreSettings(prev => ({ ...prev, useDefaultLayout: !prev.useDefaultLayout }))}
                divStyle="mb-3"
                checked={moreSettings.useDefaultLayout}
                id='default-layout'
                text={t('general-settings.more-settings-useDefaultLayout')}
              />
              <LabelInput
                text={t('general-settings.more-settings-transactionEmail')}
                id='transaction_email'
                placeholder={t('general-settings.emailPlaceholder')}
                type='email'
                style="mb-3"
                handleChange={handleChange}
                value={moreSettings.transaction_email || ''}
              />
              <button onClick={saveMoreSettings} className="h-[34px] text-sm font-open-sans leading-5 my-2 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
                {t('general-settings.saveChanges')}
              </button>
            </div>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default GeneralSettings;
