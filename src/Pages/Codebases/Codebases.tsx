import { Route, Routes } from "react-router-dom";
import SearchCodes from "./SearchCodes";
import NewBaseCodes from "./NewBaseCodes";
import CodeList from "./CodeList";
import ExportCode from "./ExportCode";

const Codebases = () => {
  return (
    <Routes>
      <Route path="search-codes" element={<SearchCodes />} />
      <Route path="new-base-code" element={<NewBaseCodes />} />
      <Route path="code-list" element={<CodeList />} />
      <Route path="export-code" element={<ExportCode />} />
    </Routes>
  );
};

export default Codebases;
