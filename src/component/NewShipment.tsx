import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";
import MarketingNav from "./MarketingNav";
import { TextEditor } from "./TextEditor";

const NewShipment = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Marketing/New Shipment"
      subheader="New automatic shipment"
    >
      <div className="mt-6 text-sm">
        <div className="mt-4">
          <MarketingNav />
          <div className="mt-4">
            <div className=" p-4 text-[#8A6D3B] bg-[#FCF8E3] border rounded-[5px] border-[#FAEBCC]">
              <div className="flex text-sm items-start gap-4">
                <p>
                  <span className="font-bold">Note: </span> for marketing
                  mailings, we require you to set your own message sender name
                  in the{" "}
                  <span className="text-[#2980B9] ">
                    {" "}
                    personalization settings.
                  </span>
                </p>
                <img src="/close (2).png" alt="" className="mt-1" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg leading-[19.8px] text-[#333333]">
              Select a group of recipients
            </h3>
            <p className="mt-4 text-[.75rem] leading-[22.4px] font-normal text-[#333333]">
              <span> Your account has </span>
              <span className="inline-block mx-1">
                <button className="h-[22.98px] w-[76.09px] text-white bg-[#5BC0DE] rounded-[3px]">
                  0 (refresh)
                </button>
              </span>
              <span>
                transactions from the last 90 days, that meet the criteria.
              </span>
            </p>
            <div className="mt-4">
              <label htmlFor="field-1">
                Customers who have purchased product with name that contains
                words (empty to send to all): *
              </label>
              <input
                className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                type="text"
                id="field-1"
              />
            </div>
            <div className="mt-4  md:grid grid-cols-resp-grid gap-4">
              <div className="mt-6 md:mt-4">
                <label htmlFor="source">Purchase source:</label>
                <input
                  className="w-full border px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                  type="text"
                  id="source"
                  placeholder="any"
                />
              </div>
              <div className="mt-4 ">
                <label htmlFor="status">Payment status:</label>
                <input
                  className="w-full border  px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                  type="text"
                  id="status"
                  placeholder="any"
                />
              </div>
              <div className="mt-4 ">
                <label htmlFor="language">Client language:</label>
                <input
                  className="w-full border  px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                  type="text"
                  id="language"
                  placeholder="any"
                />
              </div>
              <div className="mt-4 ">
                <label htmlFor="min-purchase">Min. purchased quantity:</label>
                <input
                  className="w-full border  px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                  type="text"
                  id="min-purchase"
                  placeholder="any"
                />
              </div>
            </div>
            <div className="mt-4 text-sm ">
              <h3 className="text-lg leading-[19.8px] text-[#333333]">
                Conditions for shipment activation
              </h3>
              <div className="md:flex justify-between items-center gap-4">
                <div className="mt-4">
                  <label htmlFor="send-day">
                    Send after X days from purchase (e.g. 30, after 30 days): *
                  </label>
                  <input
                    className="w-full border  px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                    type="text"
                    id="send-day"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="send-time">
                    Send a message at a specific time (e.g. 9, at 9:00): *
                  </label>
                  <input
                    className="w-full border  px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                    type="text"
                    id="send-time"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg leading-[19.8px] text-[#333333]">
                Configure the subject and body of the message
              </h3>
              <div>
                <div className="mt-4">
                  <label htmlFor="shipping-name">Shipping name: *</label>
                  <input
                    className="w-full border  px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                    type="text"
                    id="shipping-name"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="email-address">
                    E-mail address for message replies: *
                  </label>
                  <input
                    className="w-full border  px-4 border-[#CCCCCC] rounded-[4px] h-[34px] mt-3"
                    type="email"
                    id="email-address"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="your-mssg">
                    E-mail message (show preview): *
                  </label>
                  <div className="bg-[#F5F5F5] text-[#333333] text-sm mt-4 border border-[#F5F5F5] rounded-[4px] p-4">
                    <p>You can use the following tags in the message:</p>
                    <p>
                      <span className="font-bold">[DATE] -</span>
                      purchase date in format DD-MM-YYYY
                    </p>
                    <p>
                      <span className="font-bold">[PRODUCT] - </span> product
                      name
                    </p>
                  </div>
                  <TextEditor />
                </div>
                <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
                  <button className="text-white font-open-sans h-[34px] text-sm border w-[123.47px] border-[#4CAE4C] bg-[#5CB85C] rounded-[4px]">
                    Save campaign
                  </button>
                  <div className="border mt-3 p-4 border-[#E3E3E3] rounded-[4px] sm:w-[330px] bg-[#F5F5F5]">
                    <h3 className="text-[1.118125rem] leading-[19.8px]  text-[#333333]">
                      Automatic shipments
                    </h3>
                    <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                      This option allows you to send advertising or
                      informational e-mails to Clients with specific criteria
                      and after the indicated time from purchase.
                    </p>
                    <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                      <span className="text-[#428BCA]">Example:</span> If you
                      sell codes that are valid for 30 days, you can send
                      message to your clients 25 days after purchase with a
                      reminder about the expiry code and encouraging to buy new.
                      you defined Seller logo it will be attached to the message
                      in the header.
                    </p>
                    <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] ">
                      Cost of sending 20 messages is 1 credit. You will be
                      charged automatically after shipment.
                    </p>
                    <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] ">
                      If in the{" "}
                      <span className="text-[#428BCA]">
                        personalization settings{" "}
                      </span>{" "}
                      you defined Seller logo it will be attached to the message
                      in the header.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewShipment;
