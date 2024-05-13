import { NavLink } from "react-router-dom";

const CodebaseNavigations = ({ id }) => {
  return (
    <div className="mt-3">
      <div className="navigations ">
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/`}>
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Base configuration</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/manage`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Add codes or files</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/edit`}>
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Add many codes</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/export`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Codes export</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/counter`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Codes counter</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/codes_history`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>History of sent codes</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/recurring`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Recurring shipments</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/stamper`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>PDF protection</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/notifications`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Notifications</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink className="" to={`/codebase/show/${id}/fallback`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Backup nominals</p>
            </div>
          </NavLink>
        </div>
        <div className="group">
          <NavLink to={`/codebase/show/${id}/history`}>
            {/* bg-[#4A99D3]  */}
            <div className="w-full group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
              <p>Codebase history</p>
            </div>
          </NavLink>
        </div>
        <div className="w-full mt-5 group-has-[.active]:text-[#FFFFFF] group-has-[.active]:bg-[#e74c3c] md-[250px] mb-2 cursor-pointer h-[42.39px] font-poppins text-sm font-normal text-[#000000] leading-[22.4px] rounded-[4px]   bg-[#EEEEEE] flex px-4 items-center">
          <NavLink to={`/codebase/show/${id}/delete_files`}>
            <p>Delete sent files from base</p>
          </NavLink>
        </div>
        <div className="my-4 px-4 py-6 rounded-[4px] bg-[#EEEEEE]">
          <h4>Activated monitorings</h4>
          <p className="mt-4">No monitoring using this codebase</p>
        </div>
        <button className="px-4 py-2 w-full bg-[#e74c3c] font-poppins text-sm font-normal leading-[22.4px] rounded-[4px]   text-white">
          delete codebase
        </button>
      </div>
    </div>
  );
};

export default CodebaseNavigations;
