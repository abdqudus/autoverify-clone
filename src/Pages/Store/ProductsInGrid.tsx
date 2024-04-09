import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import Product from "../../component/Product";
import StoreNav from "../../component/StoreNav";

const ProductsInGrid = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Store/Products in Grid"
      subheader="Store Name: Chelsie Haley "
    >
      <div className="mt-6">
        <div className="mt4">
          <StoreNav />
          <div className="mt-24">
            <div className="nav flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-3 flex-wrap items-center">
                <p className="p-2 text-[#1A1D1F] text-[.9375rem] leading-6 bg-[#FCFCFC] rounded-[4px]">
                  Products
                </p>
                <p className="p-2 text-[#1A1D1F] text-[.9375rem] leading-6 bg-[#FCFCFC] rounded-[4px]">
                  Followers
                </p>
                <p className="p-2 text-[#1A1D1F] text-[.9375rem] leading-6 bg-[#FCFCFC] rounded-[4px]">
                  Following
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <button className="flex w-[137px] h-[40px] justify-center rounded-[12px] border border-[#EFEFEF] gap-2 items-center">
                    <span>Most recent</span>
                    <img src="/arrow-down.png" alt="" />
                  </button>
                </div>
                <div className="sm:w-[40px] h-[40px] border border-[#EFEFEF] bg-[#FCFCFC] rounded-[4px] flex justify-center items-center">
                  <img src="/filter.png" alt="" />
                </div>
              </div>
            </div>
            <div className="products grid grid-cols-1 sm:grid-cols-card gap-4 mt-4">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
          <button className="bg-[#5CB85C] border border-[#4CAE4C] rounded-[4px] w-[148.17px] text-white h-[34px] mt-8 font-open-sans font-black text-sm">
            Load more
          </button>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ProductsInGrid;
