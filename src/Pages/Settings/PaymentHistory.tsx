import {
  paymentHistoryBody,
  paymentHistoryHeader,
} from "../../Data/settings-data";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LayoutNavigations from "../../component/LayoutNavigations";
import PaymentHistoryTableBody from "../../component/PaymentHistoryTableBody";
import PaymentSteps from "../../component/PaymentSteps";
import SettingsWrapper from "../../component/SettingsWrapper";
import Table from "../../component/Table";

const PaymentHistory = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Settings /Payment History"
      subheader="Payment History"
    >
      <div className="mt-6 text-[#333333]">
        <SettingsWrapper>
          <LayoutNavigations>
            <PaymentSteps isSmall={false} />
          </LayoutNavigations>

          <div className="mt-6 md:mt-0">
            <p className="text-sm leading-[22.4px]">
              Below is the account top-ups history and invoices issued. Invoices
              are issued up to 7 days from the moment of topping up.
            </p>
            <Table
              header={paymentHistoryHeader}
              body={<PaymentHistoryTableBody body={paymentHistoryBody} />}
            />
            <PaymentSteps />
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default PaymentHistory;
