import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";
import Modal from "../../component/Modal";
import Spinner from "../../component/Spinner";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { getPasswordState, PasswordState } from "../../utils/validate-password";
import { useTranslation } from "react-i18next";


const ChangePassword = () => {
  const { t } = useTranslation()

  const modal = useRef(null);
  const navigate = useNavigate();

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  };

  const onServerError = (res, content) => {
    if (content.error === 'invalid old password') {
      alert(`${t('change-password.invalid-password')}`);
    }
  };

  const getUserName = async () => {
    const access_token = await _checkLog();
    const endpoint = new base.UserEndpoint(access_token, {});
    const res = await endpoint.me();
    return res;
  };

  const saveChanges = async () => {
    if (passwordState.isOk && newPassword.pword === newPassword.pword2) {
      const access_token = await _checkLog();
      const endpoint = new base.UserEndpoint(access_token, {}, onServerError);
      const res = await endpoint.change_password(newPassword.pword, newPassword.pword2, currentPword);
      return res;
    }
    if (newPassword.pword !== newPassword.pword2) {
      alert(t('passwords-do-not-match'));
    }
  };

  const { data: username } = useQuery({ queryKey: ['username'], queryFn: getUserName });
  const { mutate, isSuccess, isPending, isError, error } = useMutation({ mutationFn: saveChanges });
  const [newPassword, setNewPassword] = useState({ pword: '', pword2: '' });
  const [currentPword, setCurrentPword] = useState('');
  const [passwordState, setPasswordState] = useState({});

  const handleChange = (e) => {
    setNewPassword(prev => ({ ...prev, pword: e.target.value }));
    setPasswordState(getPasswordState(e.target.value, username));
  };

  const handlePassword2 = e => {
    setNewPassword({ ...newPassword, pword2: e.target.value });
  };

  if (isPending) {
    modal?.current?.open();
  }
  if (isSuccess) {
    modal.current.close();
    // setNewPassword({ pword: '', pword2: '' })
    // setCurrentPword('')
    // alert(t'password-set-successfully']);
  }
  if (isError) {
    console.log(error);
  }

  return (
    <DashBoardSubRoutesWrapper
      header={t.header}
      subheader={t.subheader}
    >
      <Modal ref={modal}>
        <Spinner />
      </Modal>
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />
          <div>
            <div className="mb-3">
              <LabelInput
                divStyle="md:flex-row flex-col md:justify-between"
                style="md:w-[70%] w-full"
                id="current-password"
                text={t('change-password.current-password')}
                type="password"
                key="current-password"
                value={currentPword}
                handleChange={e => setCurrentPword(e.target.value)}
              />
            </div>
            <div className="my-5 border-b border-black"></div>
            <LabelInput
              divStyle="md:flex-row flex-col md:justify-between"
              style="md:w-[70%] w-full"
              id="new-password"
              text={t('change-password.new-password')}
              type="password"
              value={newPassword.pword}
              handleChange={e => handleChange(e)}
              key="new-password"
            />
            <ul className="mt-3 flex md:ml-[20px] flex-col">
              <li className={`text-[.625rem] transition list-disc ${passwordState.NotCommon && passwordState.IsNotEmpty ? 'text-green-500' : 'text-red-500'}`}>{t('change-password.not-common')}</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IncludesDigit ? 'text-green-500' : 'text-red-500'}`}>{t('change-password.include-digit')}</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IncludeSpecialSymbol ? 'text-green-500' : 'text-red-500'}`}>{t('change-password.special-symbol')}</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IncludeUpperCaseSymbol ? 'text-green-500' : 'text-red-500'}`}>{t('change-password.upper-case')}</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IsWithinRange ? 'text-green-500' : 'text-red-500'}`}>{t('change-password.between-characters')}</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.DoesNotContainUserName && passwordState.IsNotEmpty ? 'text-green-500' : 'text-red-500'}`}>{t('change-password.not-contain-username')}</li>
            </ul>
            <div className="mt-3">
              <LabelInput
                divStyle="md:flex-row flex-col md:justify-between"
                style={`md:w-[70%] border ${newPassword.pword2 === newPassword.pword ? '' : 'border-red-500'} w-full`}
                id="repeat-new-password"
                text={t('change-password.repeat-new-password')}
                type="password"
                key="repeat-new-password"
                value={newPassword.pword2}
                handleChange={e => handlePassword2(e)}
              />
            </div>
            <button
              onClick={() => mutate()}
              className="h-[34px] md:mt-10 text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white"
            >
              {t('change-password.save-changes')}
            </button>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ChangePassword;
