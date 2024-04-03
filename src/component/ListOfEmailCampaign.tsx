import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";
import MarketingNav from "./MarketingNav";

const ListOfEmailCampaign = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Marketing/List of Email Campaigns"
      subheader="List of Email Campaigns"
    >
      <div className="mt-6">
        <div className="mt-4">
          <MarketingNav />
          <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480] md:mt-8 overflow-x-scroll md:overflow-hidden mt-3">
            <table className="min-w-[550px] w-full">
              <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
                <tr>
                  <th className="h-[50px] border-r md:border-r-0 border-white">
                    ID
                  </th>
                  <th className="border-r  md:border-r-0 ">Campaign name</th>
                  <th className="border-r  md:border-r-0 ">
                    Activation phrase
                  </th>
                  <th className=" h-[50px] border-r  md:border-r-0  border-white">
                    Status
                  </th>
                </tr>
              </thead>
            </table>
            <p className="mt-4 p-4">No scheduled shipments.</p>
          </div>
          <button className="sm:w-[173px] w-full mt-8 h-[34px] rounded-[4px] text-white font-open-sans text-[.75rem] leading-5 font-normal bg-[#428BCA] border border-[#3276B1]">
            New Automatic Shipment
          </button>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ListOfEmailCampaign;
