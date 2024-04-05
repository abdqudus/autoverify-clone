import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import MarketingNav from "../../component/MarketingNav";

const ListOfAutomaticShipment = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Marketing/List of Automaitc Shipment"
      subheader="List of Automatic Shipment"
    >
      <div className="mt-6">
        <div className="mt-4">
          <MarketingNav />
          <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480]  overflow-x-scroll md:overflow-hidden mt-3">
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
          <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
            <button className="sm:w-[173px] w-full mt-8 h-[34px] rounded-[4px] text-white font-open-sans text-[.75rem] leading-5 font-normal bg-[#428BCA] border border-[#3276B1]">
              new automatic shipment
            </button>
            <div className="border mt-3 p-4 border-[#E3E3E3] rounded-[4px] sm:w-[330px] bg-[#F5F5F5]">
              <h3 className="text-[1.118125rem] leading-[19.8px]  text-[#333333]">
                E-mail campaign
              </h3>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                This option allows you to send advertising or informational
                emails to Customers served by the system.
              </p>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                If in the{" "}
                <span className="text-[#428BCA]">
                  personalization settings{" "}
                </span>{" "}
                you defined Seller logo it will be attached to the message in
                the header.
              </p>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] ">
                When you go to the next step, you'll see a summary of where you
                will be able to realize the shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ListOfAutomaticShipment;
