import { useEffect, useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";
import { useNavigate } from "react-router-dom";


import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useQuery } from "@tanstack/react-query";


const PersonalisedMessages = () => {
  const [msgDetails, setMsgDetails] = useState({ user_name: '', logo: null, redirect_address: '', msg_footer: '' })
  const [showImgPreview, setShowImgPreview] = useState(false)
  const [isImgLink, setIsImgLink] = useState(false)
  const getPersonalizedSettings = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.PersonalSettingsEndpoint(access_token, {});
    return await endpoint.get_settings();
  }
  const { data } = useQuery({
    queryKey: ["personalised-msg"],
    queryFn: getPersonalizedSettings
  })
  useEffect(() => {
    if (data) {
      setMsgDetails({ user_name: data.sender_name, logo: data.logo_cloudinary_url, redirect_address: data.logo_redirect_url, msg_footer: data.footer })
      setIsImgLink(true)
    }
  }, [data])
  console.log(data)
  const handleChange = (e) => {
    if (e.target.id == 'logo') {
      const file = e.target.files?.[0];
      if (file) {
        setMsgDetails((prev) => ({ ...prev, logo: file }));
        setShowImgPreview(true)
      }
    } else {

      setMsgDetails({ ...msgDetails, [e.target.id]: e.target.value })
    }
  }



  const handleSubmit = async () => {
    const { logo, msg_footer, redirect_address, user_name } = msgDetails;
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.PersonalSettingsEndpoint(access_token, {});
    // upload image to cloudinary
    const cloudinary_url = await endpoint.update_image(undefined, logo);

    await endpoint.update_settings({
      "sender_name": user_name,
      "logo_cloudinary_url": cloudinary_url.secure_url,
      "logo_redirect_url": redirect_address,
      "footer": msg_footer
    });

    alert('Saved successfully');
  }

  return (
    <DashBoardSubRoutesWrapper
      header="Settings /Personalized Messages"
      subheader="Personalized Messages"
    >
      <div className="mt-6">
        <SettingsWrapper>
          <LayoutNavigations />
          <div className="md:grid grid-cols-2 gap-3">
            <div className="config">
              <h3 className="text-[1.1175rem] my-4 md:mt-0 leading-[19.8px] text-[#333333]">
                Configuration
              </h3>
              <div>
                <LabelInput
                  text="The name of sender of message:"
                  id="user_name"
                  placeholder="Your name"
                  style="mt-2"
                  value={msgDetails.user_name}
                  handleChange={(e) => handleChange(e)}
                />
                <p className="text-sm font-open-sans leading-[22.4px] text-[#737373]">
                  the maximum length is 24 characters
                </p>
              </div>
              <div className="mt-2 relative">
                <LabelInput
                  id="logo"
                  text="Your own logo in the message:"
                  style="sr-only"
                  type="file"
                  accept={`image/png, image/jpeg`}
                  handleChange={(e) => handleChange(e)}
                >
                  <div className="flex md:flex-row flex-col md:items-center gap-3 md:flex-wrap">
                    <div className="flex  md:flex-wrap justify-between items-center gap-2 md:gap-0 mt-1 ">
                      <div className="h-[34px] border md:w-[145.09px] flex-grow border-[#CCCCCC] rounded-tl-[4px] vsm:rounded-[4px] rounded-bl-[4px] w-[242px]"></div>
                      <div className="h-[34px] border border-[#CCCCCC] rounded-br-[4px] vsm:rounded-[4px] rounded-tr-[4px] flex justify-center items-center w-[70px]">
                        <p className="text-sm leading-5 font-open-sans text-[#333333]">
                          choose
                        </p>
                      </div>
                    </div>
                    {showImgPreview &&
                      <div className="max-h-[100px] max-w-[100px]">
                        <img className="max-w-full " src={URL.createObjectURL(msgDetails.logo)} alt="" />
                      </div>
                    }

                    {isImgLink && !showImgPreview &&
                      <div className="max-h-[100px] max-w-[100px]">
                        <img className="max-w-full " src={msgDetails.logo} alt="" />
                      </div>
                    }


                  </div>
                  <span className="block text-[#737373] mt-3 text-sm leading-[22.4px]">
                    recommended size: 210px x 45px, the allowed extensions: PNG,
                    <span className="text-[#428BCA]"> click here </span> to
                    return to the default logo
                  </span>
                </LabelInput>
              </div>
              <div className="mt-2">
                <label
                  className="text-sm block font-open-sans leading-[22.4px] text-[#333333]"
                  htmlFor="redirect-address"
                >
                  Address to redirect:
                </label>
                <div className="flex mt-2 ">
                  <div className="border font-poppins text-sm grid place-content-center basis-[66.08px] flex-shrink-0 bg-[#EEEEEE] text-[#555555] border-[#CCCCCC] rounded-tl-[4px] rounded-bl-[4px]">
                    http://
                  </div>
                  <input
                    type="text"
                    value={msgDetails.redirect_address}
                    onChange={(e) => handleChange(e)}
                    className="flex-shrink w-[20px] flex-grow h-[34px]  focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]   rounded-br-[4px] rounded-tr-[4px] border border-[#CCCCCC] px-4"
                    id="redirect_address"
                    placeholder="yourpage.pl"
                  />
                </div>
                <p className="mt-3 text-[#737373] text-sm  leading-[22.4px]">
                  when your customer clicks the logo he may be redirected to the
                  chosen address
                </p>
              </div>
              <div className="mt-6">
                <label
                  className="text-sm block font-open-sans leading-[22.4px] text-[#333333]"
                  htmlFor="msg_footer"
                >
                  Message footer:
                </label>
                <div className="mt-4 ">
                  <div className="h-[30px] bg-text-area"></div>
                  <textarea
                    value={msgDetails.msg_footer}
                    onChange={handleChange}
                    className="w-full min-h-[201px] block rounded-br-[4px] rounded-bl-[4px] p-4 border border-[#9E9E9E] outline-0"
                    name=""
                    id="msg_footer"
                  ></textarea>
                </div>
                <p className="mt-3 text-[#737373] text-sm  leading-[22.4px]">
                  defined footer will be added to each message
                </p>
              </div>
              <button onClick={handleSubmit} className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
                Save changes
              </button>
            </div>
            <div className="mssg-preview border md:self-start border-[#DCDCDC] rounded-[4px]  p-4 bg-[#EEEEEE]">
              <h3 className="text-[1.1175rem] leading-[19.8px] text-[#333333]">
                Message preview
              </h3>
              <div className="bg-white px-4 py-6 mt-4 rounded-[4px]">
                <h3 className="font-bold text-[1.375rem]  font-open-sans leading-[22px]">
                  Purchased product
                </h3>
                <p className="text-sm leading-[22px] font-poppins font-bold text-[#888888] mt-2">
                  Top-up 100 credits
                </p>
                <p className="mt-5 text-sm leading-[22px] text-[#2F383D] font-poppins font-bold">
                  Hi,
                </p>
                <p className="mt-4 text-[.75rem] leading-[22px] text-[#2F383D] font-poppins font-bold">
                  thank you for purchasing top-up code in Automater. Your code
                  is:
                </p>
                <p className="mt-5 text-sm leading-[22px] text-[#2F383D] font-poppins font-bold">
                  XXXYYYZZZ
                </p>
                <p className="mt-4 text-[.75rem] leading-[22px] text-[#2F383D] font-poppins font-bold">
                  This is just a sample message.
                </p>
              </div>
              <p className="text-[.75rem] mt-4 text-[#333333] leading-[22.4px]">
                The template will be used for the following message:
              </p>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="text-[.75rem]  text-[#333333] leading-[22.4px]">
                  message with order status
                </li>
                <li className="text-[.75rem]  text-[#333333] leading-[22.4px]">
                  message with order status message with the purchased product
                  answer to complaint request for opinions to order
                </li>
                <li className="text-[.75rem]  text-[#333333] leading-[22.4px]">
                  answer to complaint
                </li>
                <li className="text-[.75rem]  text-[#333333] leading-[22.4px]">
                  request for opinions to order
                </li>
              </ul>
            </div>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default PersonalisedMessages;
{
  /*  */
}
