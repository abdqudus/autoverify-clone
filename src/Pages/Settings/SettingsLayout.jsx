import { useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LayoutList from "../../component/LayoutList";
import NewSettingsLayOut from "../../component/NewSettingsLayOut";

const SettingsLayout = () => {
  const [isNewSettings, setIsNewSetting] = useState(false);
  return (
    <DashBoardSubRoutesWrapper header="Settings /Layout" subheader="Layout">
      {isNewSettings ? (
        <NewSettingsLayOut />
      ) : (
        <LayoutList setIsNewSetting={setIsNewSetting} />
      )}
    </DashBoardSubRoutesWrapper>
  );
};

export default SettingsLayout;
