import { useState, useEffect } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LayoutList from "../../component/LayoutList";
import NewSettingsLayOut from "../../component/NewSettingsLayOut";


import { useLocation } from 'react-router-dom';

const SettingsLayout = () => {
  const location = useLocation();
  const [isNewSettings, setIsNewSetting] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const isNew = queryParams.get('q') === 'new';
    setIsNewSetting(isNew);
  }, [location.search]);

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

