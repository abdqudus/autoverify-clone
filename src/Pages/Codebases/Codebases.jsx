import { Route, Routes } from "react-router-dom";
import SearchCodes from "./SearchCodes";
import NewBaseCodes from "./NewBaseCodes";
import CodeList from "./CodeList";
import ExportCode from "./ExportCode";
import BaseConfig from "./BaseConfig";
import AddManyCodes from "./AddManyCodes";
import CodesExport from "./CodesExport";

const Codebases = () => {
  return (
    <Routes>
      <Route path="search-codes" element={<SearchCodes />} />
      <Route path="new-base-code" element={<NewBaseCodes />} />
      <Route path="code-list" element={<CodeList />} />
      <Route path="show/:id" element={<BaseConfig />} />
      <Route path="show/:id/manage" element={<p>Manage</p>} />
      <Route path="show/:id/edit" element={<AddManyCodes />} />
      <Route path="show/:id/export" element={<CodesExport />} />
      <Route path="show/:id/counter" element={<p>codes counter</p>} />
      <Route
        path="show/:id/codes_history"
        element={<p>History of sent codes</p>}
      />
      <Route path="show/:id/recurring" element={<p>Recurring Shipment</p>} />
      <Route path="show/:id/stamper" element={<p>PDF protection</p>} />
      <Route path="show/:id/notifications" element={<p>notification</p>} />
      <Route path="show/:id/fallback" element={<p>backup nominals</p>} />
      <Route path="show/:id/history" element={<p>codebase history</p>} />
      <Route path="show/:id/delete_files" element={<p>Delete files</p>} />
      <Route path="export-code" element={<ExportCode />} />
    </Routes>
  );
};

export default Codebases;
