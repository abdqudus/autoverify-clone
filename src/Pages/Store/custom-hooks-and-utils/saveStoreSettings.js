import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";

export const saveStoreSettings = async (navigate, storeDetails) => {
  const access_token = await tokenUtil.getToken();
  if (access_token === null) {
    navigate("/login");
  }

  const payload = storeDetails;
  payload.logo_b64 = payload.logo;
  const endpoint = new base.StoreSetting(access_token, {});
  const res = await endpoint.update_settings(payload);
  console.log(res);
};
