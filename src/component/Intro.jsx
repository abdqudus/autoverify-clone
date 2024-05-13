import { useState } from "react";
import * as tokenUtil from "../utils/tokenUtil";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({ username: "", password: "" });
  const onLoginSuccess = () => {
    navigate("/");
  };
  const onLoginError = () => {
    alert("the username or password is invalid");
  };

  const handleLogin = async () => {
    const { username, password } = credential;
    if (username && password) {
      const res = await tokenUtil.loginUser(credential);
      if (res === null) {
        onLoginError();
      } else {
        onLoginSuccess();
      }
    }
  };
  const handleChange = (e) => {
    setCredential((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="mt-12 md:mt-[6rem] px-2 flex flex-col-reverse md:grid grid-cols-3/2 gap-4 auto-rows-fr justify-between  sm:w-[85%] sm:mx-auto">
      <form className="h-[420px] relative max-w-[550px] shadow-form-shadow p-4 px-8 rounded-md bg-white flex flex-col gap-4 ">
        <h3 className="text-black hidden sm:block font-semibold !leading-9 text-xl">
          Login to Dashboard
        </h3>
        <div className="flex flex-col justify-between sm:gap-1 gap-4 ">
          <label htmlFor="username">
            Username <span className="text-[#C70000]">*</span>
          </label>
          <input
            name="username"
            id="username"
            value={credential.username}
            onChange={(e) => handleChange(e)}
            className="border-[#D5D5D5] valid:bg-[#E8F0FE] py-1 px-2 outline-[#D5D5D5] border w-full sm:w-[90%] flex-grow-0  "
          />
        </div>
        <div className="flex flex-col sm:gap-1 gap-4 justify-between">
          <label htmlFor="password">
            Password <span className="text-[#C70000]">*</span>
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
            value={credential.password}
            name="password"
            className="w-full sm:w-[90%] valid:bg-[#E8F0FE] border py-1 px-2 border-[#D5D5D5] outline-[#D5D5D5]"
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="max-w-[204px] px-4 shadow-login-shadow font-bold text-[15px] leading-[22.5px] text-center h-[39px] mt-3 rounded-[5px] bg-[#0076C8] text-white"
        >
          Proceed to Signin
        </button>
        <p className="ml-auto mt-4 sm:hidden text-[#474B4D] text-[.875rem] tracking-wider leading-[21px]">
          Don't have an account yet?{" "}
          <a href="#" className="text-[#044E82] font-semibold">
            Register
          </a>
        </p>
        <div className="absolute -z-10 top-[89%]">
          <img src="/square-dot.svg" alt="" />
        </div>
      </form>
      <div className=" bg-dark-bg md:bg-light-bg md:rounded-full rounded-md  ">
        <div className="relative ">
          <div className="absolute right-2 md:right-1/2 top-8 sm:-top-10">
            <img src="/square-dot.svg" alt="" />
          </div>
          <div className="">
            <img src="/IMAGE.svg" alt="" width="320" height="243" />
          </div>
        </div>
        <div className="sm:mt-4 my-8">
          <p className="font-semibold text-[2rem] leading-[40px] text-center">
            Start Your Journey Here
          </p>
          <p className="text-xl font-normal text-center leading-[30px]">
            just a couple of clicks and we start
          </p>
        </div>
      </div>
      <h3 className="text-black sm:hidden my-8 mt-10 text-center font-semibold !leading-9 text-xl">
        Login to Dashboard
      </h3>
    </div>
  );
};

export default Intro;
