import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";
// import LayoutList from "./LayoutList";
import NewSettingsLayOut from "./NewSettingsLayOut";

const SettingsLayout = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Settings /Layout"
      subheader="Layout"
    >
      {/* <LayoutList /> */}
      <NewSettingsLayOut />
    </DashBoardSubRoutesWrapper>
  );
};

export default SettingsLayout;
