import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashBoardSubRoutesWrapper from '../../component/DashBoardSubRoutesWrapper';
import ProductDetailExtenstion from '../../component/ProductDetailExtenstion';
import { useQuery } from '@tanstack/react-query';
import * as tokenUtil from '../../utils/tokenUtil';
import * as base from '../../utils/base';
import Loader from '../../component/Loader';
import { useTranslation } from 'react-i18next';

const ProductDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();

  const OnServerError = (responseObject) => {
    if (!responseObject.ok) {
      if (responseObject.status === 404) {
        navigate('/404');
      }
    }
  };

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate('/login');
    }
    return access_token;
  };

  const fetchProduct = async () => {
    const product_endpoint = new base.ProductEndpoint(await _checkLog(), {}, OnServerError);
    const single_product = await product_endpoint.read(id);
    return single_product;
  };

  const { isPending, data, isError } = useQuery({
    queryKey: ['product'],
    queryFn: () => fetchProduct(),
  });

  if (isPending) {
    return <Loader />;
  }
  if (isError) {
    return <p>{t('general.notFound')}</p>;
  }

  if (data) {
    return (
      <DashBoardSubRoutesWrapper
        header={t('productDetails.header') + data.name}
        subheader={t('productDetails.subheader')}
        font="font-poppins"
        pFont="font-open-sans"
        additionalHeader={
          < div className="mt-4" >
            <h3 className="text-[#1A1D1F] font-inter font-semibold leading-8 text-2xl">{data.name}</h3>
            <span className="block text-[#6F767E] text-sm leading-6 font-semibold">
              {t('productDetails.description')}
              <br /> {data.description}
            </span>
          </div >
        }
      >
        <section className="lg:grid gap-4 grid-cols-3/1">
          <div>
            <div className="bg-[#FCFCFC] mt-4 rounded-[8px] p-4">
              <div className=" pb-6 md:grid grid-cols-2 gap-6">
                <div className="overview">
                  <div className="flex items-center mb-4 gap-3">
                    <p className="w-4 h-8 rounded-[4px] bg-[#FFBC99]"></p>
                    <p>{t('productDetails.overview')}</p>
                  </div>
                  <div className="w-full overflow-hidden h-[200px] border border-gray-500 mb-4 rounded-[12px]">
                    {/* <img
                      className="w-full max-w-full bg-cover "
                      src={data.cloudinary_thumbnail}
                      width="308"
                      height="200"
                      alt="product-image"
                    /> */}
                  </div>
                  <div className="flex justify-between items-center gap-2 flex-wrap">
                    <p className="font-inter font-semibold leading-6 text-[.9375rem] text-[#1A1D1F]">
                      {t('productDetails.thumbnail')}
                    </p>
                    <p className="px-1 py-2 rounded-[6px] font-inter font-bold text-[.9375rem] bg-[#B5E4CA] flex items-center justify-center leading-6">
                      PLN {data.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-words mt-4  font-poppins text-sm font-normal">
              <header>
                <h3 className="font-poppins font-normal text-2xl leading-[26.4px] text-[#333333]">
                  {t('productDetails.sellPage')}
                </h3>
              </header>
              <p className="my-4 leading-[22.4px]">
                {t('productDetails.buyProductLink')}{' '}
                <Link to={`/rest/order-viewer/buy/${id}`} className="text-[#428BCA] ml-1">
                  {` https://automater.com/rest/order-viewer/buy/${id}`}
                </Link>
              </p>
              <div className="mt-5">
                <p className="flex justify-between items-center gap-4 border-y p-4">
                  <span className="font-poppins text-sm text-[#333333] leading-5">
                    {t('productDetails.productName')}
                  </span>
                  <span className="font-poppins text-sm text-[#428BCA] leading-5">{data.name}</span>
                </p>
                <p className="flex justify-between items-center gap-4 border-y p-4">
                  <span className="font-poppins text-sm text-[#333333] leading-5">
                    {t('productDetails.price')}
                  </span>
                  <span className="font-poppins text-sm text-[#333333] leading-5">{data.price}</span>
                </p>
              </div>
            </div>
          </div>
          <ProductDetailExtenstion data={data} bg="bg-[#E74C3C]" border="border-[#DF2E1B]" />
        </section>
      </DashBoardSubRoutesWrapper >
    );
  }
};

export default ProductDetails;
