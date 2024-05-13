const EbayConnected = ({ data }) => {
  return (
    <div className="mt-4">
      <div className="lg:grid mt-8 grid-cols-[1fr_300px] gap-4">
        <div>
          <h1 className="text-[#333333] sm:w-[60%] pb-2 border-b border-[#CCCCCC]  text-[1rem] font-open-sans leading-[17.68px]">
            Connected Accounts
          </h1>
          <div className="">
            <div className="border max-w-full overflow-x-scroll md:overflow-hidden mt-3  border-[#DDDDDD]">
              <table className="min-w-[550px] w-full">
                <thead className="bg-[#2c2c2c] text-white font-open-sans px-2  text-[.75rem]">
                  <tr>
                    <th className=" py-2 w-[10%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      ID
                    </th>
                    <th className=" w-[45%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      Ebay username
                    </th>
                    <th className=" w-[15%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      Connection
                    </th>
                    <th className=" w-[15%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold">
                      Status
                    </th>
                    <th className=" w-[15%]  text-white text-left px-2  border-white  text-[.75rem] font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr
                      key={d.account_id}
                      className={`h-[48px] border ${i % 2 !== 0 ? "bg-white" : "bg-[#f9f9f9]"
                        }   w-full `}
                    >
                      <td className="px-3 border-r text-ellipsis">
                        <p className="w-[5rem] whitespace-nowrap overflow-hidden text-ellipsis">
                          {" "}
                          {d.account_id}
                        </p>
                      </td>
                      <td className="px-3 border-r">{d.name}</td>
                      <td className="px-3 border-r">
                        <button className=" px-3 py-1 rounded-[5px] bg-[#5cb85c] flex justify-center items-center text-white font-open-sans text-[.75rem] leading-[15px]">
                          edit
                        </button>
                      </td>
                      <td className="px-3 border-r">
                        <button className="  px-3 py-1 rounded-[5px] bg-[#5cb85c] flex justify-center items-center text-white font-open-sans text-[.75rem] leading-[15px]">
                          active
                        </button>
                      </td>
                      <td className="px-3">
                        <button className="px-2 h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#e57a55] font-open-sans text-[.75rem] leading-[15px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="mt-4 lg:mt-0 pb-2 border-b border-[#CCCCCC] ">
            Connect new account
          </h3>
          <button className="w-full  px-3 h-[34px] bg-[#5cb85c] text-white border border-[#4cae4c] rounded-[4px]">
            Connect new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbayConnected;
// className="lg:grid grid-cols-[1fr_200px]"
