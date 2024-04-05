import { notificationBody, notificationHeader } from "../../Data/settings-data";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LayoutNavigations from "../../component/LayoutNavigations";
import NotificationTableBody from "../../component/NotificationTableBody";
import SettingsWrapper from "../../component/SettingsWrapper";
import Table from "../../component/Table";

const Notification = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Settings /Notification"
      subheader="Notification"
    >
      <div className="mt-6 text-[#333333]">
        <SettingsWrapper>
          <LayoutNavigations />
          <div className="mt-6 md:mt-0">
            <p className="text-sm md:mb-8 leading-[22.4px] font-open-sans">
              E-mail notifications are not free of charge. For each sent
              notification via Text Message account is charged on 1 credit. To
              change notification status, click button with its status.
            </p>
            <Table
              parentStyle="bg-transparent"
              headerStyle="bg-transparent h-[31px] text-sm font-bold font-open-sans text-black border-b-2 border-[#DDDDDD]"
              header={notificationHeader}
              body={<NotificationTableBody body={notificationBody} />}
            />
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default Notification;
