import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";
type StoreDetails = {
  address: string;
  domain: string;
  name: string;
  terms: string;
  logo: null | File;
  code_warning_threshold: number;
  transaction_email: string;
};
export const saveStoreSettings = async (
  navigate: (route: string) => void,
  storeDetails: StoreDetails
) => {
  const access_token = await tokenUtil.getToken();
  if (access_token === null) {
    navigate("/login");
  }
  const endpoint = new base.StoreSetting(access_token!, {});
  const res = await endpoint.update_settings(storeDetails);
  console.log(res);
};
