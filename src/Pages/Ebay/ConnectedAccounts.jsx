import { useTranslation } from "react-i18next";
import ConnectedAccount from "../../component/ConnectedAccount";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const ConnectedAccounts = () => {
  const { t } = useTranslation()

  return (
    <DashBoardSubRoutesWrapper
      header={"Ebay/" + t('accounts')}
      subheader={t("accounts")}
    >
      <ConnectedAccount />
    </DashBoardSubRoutesWrapper>
  );
};

export default ConnectedAccounts;
