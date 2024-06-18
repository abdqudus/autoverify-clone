import ConnectedAccount from "../../component/ConnectedAccount";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const ConnectedAccounts = () => {


  return (
    <DashBoardSubRoutesWrapper
      header="Ebay/accounts"
      subheader=" Accounts"
    >
      <ConnectedAccount />
    </DashBoardSubRoutesWrapper>
  );
};

export default ConnectedAccounts;
