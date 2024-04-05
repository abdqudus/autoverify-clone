import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LabelInput from "../../component/Label-Input";
import LayoutNavigations from "../../component/LayoutNavigations";
import SettingsWrapper from "../../component/SettingsWrapper";

const PersonalisedMessages = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Settings /Personalized Messages"
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
                  id="sender-name"
                  placeholder="Your name"
                  style="mt-2"
                />
                <p className="text-sm font-open-sans leading-[22.4px] text-[#737373]">
                  the maximum length is 24 characters
                </p>
              </div>
              <div className="mt-2 relative">
                <LabelInput
                  id="profile-pic"
                  text="Your own logo in the message:"
                  style="sr-only"
                  type="file"
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
                    <button className="w-full md:w-[94.44px] font-open-sans text-sm lea5\ h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C] text-white">
                      save
                    </button>
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
                    className="flex-shrink w-[20px] flex-grow h-[34px]  focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]   rounded-br-[4px] rounded-tr-[4px] border border-[#CCCCCC] px-4"
                    id="redirect-address"
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
                  htmlFor="footer"
                >
                  Message footer:
                </label>
                <div className="mt-4 ">
                  <div className="h-[30px] bg-text-area"></div>
                  <textarea
                    className="w-full min-h-[201px] block rounded-br-[4px] rounded-bl-[4px] p-4 border border-[#9E9E9E] outline-0"
                    name=""
                    id="footer"
                  ></textarea>
                </div>
                <p className="mt-3 text-[#737373] text-sm  leading-[22.4px]">
                  defined footer will be added to each message
                </p>
              </div>
              <button className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[113.75px] rounded-[4px] text-white">
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
