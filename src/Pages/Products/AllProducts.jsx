import { Link, NavLink } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import useGetProducts from "../../customHooks/useGetProducts";
import { useNavigate } from "react-router-dom";
import Spinner from "../../component/Spinner";

import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import EntriesCount from "../../component/EntriesCount";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Paginator } from "../../utils/pagination";
import PaginatorBtn from "../../component/PaginatorBtn";
import DeleteModal from "../../component/DeleteModal";
import { useTranslation } from "react-i18next";

const AllProducts = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [tobeDeleted, setTobeDeleted] = useState({ name: '', id: null })
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation()
  const fetchProducts = async (page) => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }

    const endpoint = new base.ProductEndpoint(access_token, {});
    const paginator = new Paginator(endpoint, page);
    const res = (await paginator.current()).results;
    res.paginator = paginator;
    return res;
  }


  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const { isPending, data, } =
    useQuery({
      queryKey: ['projects', page,],
      queryFn: () => fetchProducts({ page: page, setPage: setPage }),
      placeholderData: keepPreviousData,
    });

  const onDelete = async (product) => {
    const endpoint = new base.ProductEndpoint(await _checkLog(), {});
    return await endpoint.delete(product.id);
  };

  const handleClickDelete = async (name, id) => {
    setTobeDeleted({ name, id });
    setShowModal(true);
  }

  return (
    <DashBoardSubRoutesWrapper header={t('all-prod.header')} subheader={t('all-prod.subheader')}>
      <div className="border border-[#DDDDDD]  mt-8 p-3">
        <EntriesCount />
        <div className="max-w-full bg-[#F4F4F480] md:min-h-[406px] md:shadow-card-shadow overflow-x-scroll md:overflow-hidden mt-6">
          <table className="min-w-[550px] w-full text-left">
            <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
              <tr>
                <th className="border-r md:border-r-0 pl-2 border-white">
                  <label htmlFor="check-all">
                    <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="check-all"
                    className="sr-only"
                  />
                </th>
                <th className="border-r mx-4 px-4 md:border-r-0  border-white">
                  {t('all-prod.ID')}
                </th>
                <th className="border-r  md:border-r-0 ">
                  {t('all-prod.product-name')}
                </th>
                <th className="border-r mx-4 md:border-r-0 ">{t('all-prod.price')}</th>
                <th className="border-r  md:border-r-0 ">{t('all-prod.status')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {products.length >= 0 && <Spinner />} */}
              {/* {JSON.stringify(data)} */}
              {data ? data.map((p) => (
                <tr key={p.product_id} className="h-[48px] text-left ">
                  <td className="pl-2">
                    <label htmlFor={`check-${p.product_id}`}>
                      <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                    </label>
                    <input
                      type="checkbox"
                      name=""
                      id="check-1045683"
                      className="sr-only"
                    />
                  </td>
                  <td>
                    <span className="block w-[80px] overflow-hidden text-ellipsis whitespace-nowrap">

                      <Link to={p.product_id}>{p.product_id}</Link>
                    </span>
                  </td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td className="">
                    <button className="bg-[#5CB85C] text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                      {p.is_active ? "active" : "inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="flex px-4 items-center">
                      <button
                        className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] w-[39.39px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#4CA2C7]"
                      >
                        <Link to={p.product_id}>
                          Edit
                        </Link>
                      </button>
                      <button
                        onClick={() => handleClickDelete(p.name, p.product_id)}
                        className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] ml-[50px] lg:ml-[119px] w-[52.88px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#DB5555]"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )) : 'data is loading'}
            </tbody>
          </table>
          {isPending && (
            <div className="flex mt-4 justify-center items-center">
              <Spinner />
            </div>
          )}
        </div>
        <div className="mt-3 font-poppins font-normal pb-3 flex flex-col  gap-3">
          <p className="text-[.875rem] leading-[22.4px] text-[#333333]">
            {t('entries-count.num-of-entries')}
          </p>

          <PaginatorBtn paginator={data?.paginator} />

        </div>
      </div>
      <div className="md:flex justify-between md:py-8">
        <NavLink to="/products/new-product">
          <button className="font-poppins my-8 md:my-0 rounded-[4px] text-[.75rem] text-white font-normal leading-5 flex justify-center items-center w-full md:w-[219px] h-[34px] bg-[#428BCA]">
            {t('all-prod.new-prod')}
          </button>
        </NavLink>
        <div className="min-h-[246.53px] md:w-[368px] shadow-product-shadow font-poppins font-normal text-[#333333] rounded-[4px] border border-[#E3E3E3] p-[10px] bg-[#F5F5F5]">
          <p className="text-[.875rem]  leading-[19.8px]">Products</p>
          <p className="my-5 text-[.75rem] leading-[22.4px]">
            {t('all-prod.integrate-info')}
          </p>
          <p className="text-[.75rem] leading-[22.4px]">
            {t('all-prod.after-adding')} </p>
        </div>
      </div>
      <DeleteModal onDelete={onDelete} tobeDeleted={tobeDeleted} showModal={showModal} setShowModal={setShowModal} />
    </DashBoardSubRoutesWrapper>
  );
};

export default AllProducts;
