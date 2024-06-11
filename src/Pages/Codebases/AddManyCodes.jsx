import { useParams } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import CodebaseWrapper from "../../component/CodebaseWrapper";
import CodebaseNavigations from "../../component/CodebaseNavigations";
import { useState } from "react";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";


const AddManyCodes = () => {
  const [textVal, setTextVal] = useState('')
  const { id } = useParams();
  const navigate = useNavigate();


  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }


  const addToCodeBase = async () => {
    // textVal
    console.log('useparam id', id);
    const access_token = await _checkLog();
    const endpoint = new base.CodebaseEndpoint(access_token, {});
    const res = endpoint.handle_text_file(textVal, id);
    console.log(res);
  }

  return (
    <DashBoardSubRoutesWrapper
      header="Edit Codebase"
      subheader="Dashboard/Code bases/ name"
    >
      <div className="mt-6">
        <CodebaseWrapper>
          <div>
            <div className="my-6">
              <h3>Add many codes</h3>
              <p className="mt-2">
                If you have codes list you can quickly paste and load them to
                base. One code must be in one line.
              </p>
            </div>
            <textarea
              className="w-full px-4 py-2 border-2 border-[#ccc] outline-none rounded-[4px]"
              id=""
              value={textVal}
              onChange={e => setTextVal(e.target.value)}
            ></textarea>
            <p className="my-4">Code limit: 0/100</p>
            <div className="flex justify-end">
              <button onClick={addToCodeBase} className="px-3 font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
                Add codes to base
              </button>
            </div>
          </div>
          <CodebaseNavigations id={id} />
        </CodebaseWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default AddManyCodes;
