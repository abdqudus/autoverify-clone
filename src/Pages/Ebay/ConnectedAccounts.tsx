import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import EbayConnected from "../../component/EbayConnected";
import EbayUnConnected from "../../component/EbayUnConnected";
import Loader from "../../component/Loader";
import useGetConnectedAccount from "./customHooks/useGetConnectedAccount";

const ConnectedAccounts = () => {
  const { data, isLoading, isError } = useGetConnectedAccount();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>An error occured</p>;
  }

  return (
    <DashBoardSubRoutesWrapper
      header="Ebay/Connected accounts"
      subheader="Connected Accounts"
    >
      <div className="mt-6">
        {data?.results.length ? (
          <EbayConnected data={data?.results} />
        ) : (
          <EbayUnConnected />
        )}
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ConnectedAccounts;
