import { useMutation, useQuery } from "@tanstack/react-query";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";
import { getPasswordState, PasswordState } from "../../utils/validate-password";
import { useRef, useState } from "react";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import Modal from "../../component/Modal";
import Loader from "../../component/Loader";
import Spinner from "../../component/Spinner";


const ChangePassword = () => {

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const onServerError = (res, content) => {
    if (content.error = 'invalid old password') {
      alert("invalid old password")
    }
  }

  const getUserName = async () => {
    const access_token = await _checkLog();
    const endpoint = new base.UserEndpoint(access_token, {});
    const res = await endpoint.me();
    return res;
  }
  const saveChanges = async () => {

    if (passwordState.isOk && newPassword.pword === newPassword.pword2) {
      console.log('object')
      const access_token = await _checkLog();
      const endpoint = new base.UserEndpoint(access_token, {}, onServerError);
      const res = await endpoint.change_password(newPassword.pword, newPassword.pword2, currentPword);
      return res;
    }
    if (newPassword.pword !== newPassword.pword2) {
      alert('Passwords do not match')
    }
  }

  const { data: username } = useQuery({ queryKey: ['username'], queryFn: getUserName })
  const { mutate, isSuccess, isPending, isError, error } = useMutation({ mutationFn: saveChanges })
  const [newPassword, setNewPassword] = useState({ pword: '', pword2: '' });
  const [currentPword, setCurrentPword] = useState('')
  const [passwordState, setPasswordState] = useState({});
  const modal = useRef()
  const handleChange = (e) => {
    setNewPassword(prev => ({ ...prev, pword: e.target.value }))
    setPasswordState(getPasswordState(e.target.value, username))
  }

  const handlePassword2 = e => {
    setNewPassword({ ...newPassword, pword2: e.target.value })
  }

  if (isPending) {
    modal?.current?.open()
  }
  if (isSuccess) {
    modal.current.close();
    // setNewPassword({ pword: '', pword2: '' })
    // setCurrentPword('')
    // alert('Password set successfully')

  }
  if (isError) {
    console.log(error)
  }
  return (
    <DashBoardSubRoutesWrapper
      header="Settings /Change Password"
      subheader="Change Password"
    >
      <Modal ref={modal}>
        <Spinner />
      </Modal>
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />
          <div>
            <div className="mb-3 ">
              <LabelInput
                divStyle="md:flex-row flex-col md:justify-between"
                style="md:w-[70%] w-full"
                id="current-password"
                text="Current password"
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
              text="New Password"
              type="password"
              value={newPassword.pword}
              handleChange={(e) => handleChange(e)}

              key="new-password"
            />
            <ul className="mt-3 flex md:ml-[20px]  flex-col  ">
              <li className={`text-[.625rem] transition list-disc ${passwordState.NotCommon && passwordState.IsNotEmpty ? 'text-green-500' : 'text-red-500'}`}>Not common </li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IncludesDigit ? 'text-green-500' : 'text-red-500'}`}>Include a digit</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IncludeSpecialSymbol ? 'text-green-500' : 'text-red-500'}`}>Special symbol</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IncludeUpperCaseSymbol ? 'text-green-500' : 'text-red-500'}`}>Upper case</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.IsWithinRange ? 'text-green-500' : 'text-red-500'}`}>Between 6 and 100 characters</li>
              <li className={`text-[.625rem] transition list-disc ${passwordState.DoesNotContainUserName && passwordState.IsNotEmpty ? 'text-green-500' : 'text-red-500'}`}>Does not contain username</li>
            </ul>
            <div className="mt-3">
              <LabelInput
                divStyle="md:flex-rowflex-col md:justify-between"
                style={`md:w-[70%] border ${newPassword.pword2 === newPassword.pword ? '' : 'border-red-500'}   w-full`}
                id="repeat-new-password"
                text="Repeat New Password"
                type="password"
                key="repeat-new-password"
                value={newPassword.pword2}
                handleChange={e => handlePassword2(e)}
              />
            </div>
            {/* <p>Raw passwords are not stored so there is no way to see the user's password but you can change the password using</p> */}
            <button onClick={() => mutate()} className="h-[34px] md:mt-10 text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
              Save changes
            </button>
          </div>
        </SettingsWrapper>
      </div >
    </DashBoardSubRoutesWrapper >
  );
};

export default ChangePassword;
