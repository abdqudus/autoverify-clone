import { useEffect, useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import StoreNav from "../../component/StoreNav";
import { TextEditor } from "../../component/TextEditor";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";
import useGetFormFields from "./custom-hooks-and-utils/useGetFormFields";
import { saveStoreSettings } from "./custom-hooks-and-utils/saveStoreSettings";
import { convertToBase64 } from "../../utils/convertToBase64";
import { useTranslation } from "react-i18next";
const initialState = {
  address: "",
  domain: "",
  name: "",
  terms: "",
  logo: "",
  code_warning_threshold: 15,
};

const StoreConfiguration = () => {
  const { t } = useTranslation()
  const { isLoading, data } = useGetFormFields();
  const navigate = useNavigate();
  const [textVal, setTextVal] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (data) {
      setTextVal(data.terms);
      setStoreDetails(data);
      console.log(setSelectedImage)
    }
  }, [data]);

  const [storeDetails, setStoreDetails] = useState(initialState);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setStoreDetails(prev => ({ ...prev, logo: file }))
    // storeDetails.logo = file;
    // if (file) {
    //   convertToBase64(file, storeDetails);
    // }
  };

  console.log(storeDetails);

  const handleChange = (e) => {
    setStoreDetails((storeDetails) => ({
      ...storeDetails,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Loader />;
  }
  if (data)
    return (
      <DashBoardSubRoutesWrapper
        header={t('storeConfiguration.header')}
        subheader={t('storeConfiguration.subheader')}
      >
        <div className="mt-6">
          <div className="mt-4">
            <StoreNav />
            <div className="mt-6 lgs:grid grid-cols-[1fr_307px] gap-6">
              <div>
                <div className="store-address text-[#333333] ">
                  <h3 className="text-sm leading-[22.4px] font-open-sans">
                    {t('storeConfiguration.storeAddress')}
                  </h3>
                  <div className="flex mt-2">
                    <input
                      name="address"
                      value={storeDetails?.address || ""}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      className="w-[50px] flex-grow outline-0 border rounded-tl-[4px] rounded-bl-[4px] border-[#CCCCCC]  px-4"
                    />
                    <div className="w-[114.31px] rounded-tl-[4px] rounded-br-[4px] text-[#555555] text-sm leading-[14px] flex justify-center items-center bg-[#EEEEEE] border border-[#cccccc] h-[34px]">
                      .sklep-kody.pl
                    </div>
                  </div>
                </div>
                <div className="mt-4 domain ">
                  <h3 className="text-sm leading-[22.4px] font-open-sans">
                    {t('storeConfiguration.yourDomain')}
                  </h3>
                  <div className="flex ">
                    <input
                      type="text"
                      name="domain"
                      value={storeDetails?.domain || ""}
                      onChange={(e) => handleChange(e)}
                      className="w-[50px] h-[34px] block mt-1 flex-grow outline-0 border rounded-tl-[4px] rounded-bl-[4px] border-[#CCCCCC]  px-4"
                    />
                  </div>
                  <p className=" text-[.74375rem] font-open-sans leading-[19.04px]">
                    Podaj adres domeny, którą chcesz podłączyć. Rekord A w jej
                    ustawieniach DNS powinien wskazywać na adres 5.133.8.110
                  </p>
                </div>

                <div className="store-name mt-4">
                  <h3 className="text-sm leading-[22.4px] font-open-sans">
                    {t('storeConfiguration.storeName')}
                  </h3>
                  <div className="flex mt-2">
                    <input
                      type="text"
                      value={storeDetails?.name || ""}
                      onChange={(e) => handleChange(e)}
                      name="name"
                      className="w-[50px] h-[34px] flex-grow outline-0 border rounded-tl-[4px] rounded-bl-[4px] border-[#CCCCCC]  px-4"
                    />
                  </div>
                  <br />
                  <h3 className="text-sm leading-[22.4px] font-open-sans">
                    {t('storeConfiguration.codebaseThreshold')}
                  </h3>
                  <div className="flex mt-2">
                    <input
                      type="number"
                      value={storeDetails?.code_warning_threshold || ""}
                      onChange={(e) => handleChange(e)}
                      name="code_warning_threshold"
                      className="w-[50px] h-[34px] flex-grow outline-0 border rounded-tl-[4px] rounded-bl-[4px] border-[#CCCCCC]  px-4"
                      placeholder="minimum codes to have before alerting user."
                      min={15}
                    />
                  </div>
                  <br />

                  <div className="mt-4">
                    <p>{t('storeConfiguration.storeName')}</p>
                    <p className="text-sm leading-[22.4px]">
                      {t('storeConfiguration.recommendedLogoSize')}  </p>
                    <div className="mt-2 relative">
                      {!selectedImage && <img src="/header.png" alt="" />}
                      {selectedImage && <img src={selectedImage} alt="" />}
                      <label
                        htmlFor="change-logo"
                        className="flex justify-center items-center cursor-pointer mt-4 w-[106.86px] rounded-[4px] border border-[#CCCCCC] text-[#333333] text-sm font-open-sans h-[34px]"
                      >
                        {t('storeConfiguration.changeLogo')}
                      </label>
                      <input
                        onChange={(e) => handleImageChange(e)}
                        type="file"
                        id="change-logo"
                        className="sr-only"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-[#333333] text-sm mb-3 font-open-sans leading-[22.4px]">
                      {t('storeConfiguration.terms')}
                    </p>
                    <TextEditor
                      val={{ textVal, setTextVal, setStoreDetails }}
                    />
                    <button
                      onClick={() => saveStoreSettings(navigate, storeDetails)}
                      className="max-w-max px-2 mt-4 text-sm leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C] text-white"
                    >
                      {t('storeConfiguration.saveStoreSettings')}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 mt-6 lgs:mt-0 lgs:w-[307px] lgs:h-[246px] rounded-[4px] shadow-product-shadow mb-12 bg-[#E3E3E3]">
                <div className="font-open-sans font-normal ">
                  <p className="leading-[19.8px] mb-2 border-b pb-2 text-[.875rem]  border-[#CCCCCC]">
                    {t('storeConfiguration.advancedIntegration')}
                  </p>
                  <p className="text-[.75rem] mb-2 leading-[22.4px]">
                    {t('storeConfiguration.processOrderOnWebsite')}
                    <a className="text-[#428BCA]">{t('storeConfiguration.storeDocumentation')}.</a>
                  </p>
                  <p className="text-[.75rem] mb-2 leading-[22.4px]">
                    {t('storeConfiguration.advancedIntegrationDetails')}
                    <a className="text-[#428BCA]"> {t('storeConfiguration.apiDocumentation')}.</a>
                  </p>
                  <p className="text-[.75rem] leading-[22.4px] ">
                    {t('storeConfiguration.integrationProblem')}.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </DashBoardSubRoutesWrapper>
    );
};

export default StoreConfiguration;
