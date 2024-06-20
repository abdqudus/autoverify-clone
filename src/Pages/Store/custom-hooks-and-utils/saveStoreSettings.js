import * as tokenUtil from "../../../utils/tokenUtil";
import * as base from "../../../utils/base";

export const saveStoreSettings = async (
  navigate,
  storeDetails,
  setIsSaving
) => {
  setIsSaving(true);
  const access_token = await tokenUtil.getToken();
  if (access_token === null) {
    navigate("/login");
  }

  const payload = storeDetails;
  const endpoint = new base.StoreSetting(access_token, {});
  const res = await endpoint.update_settings({
    name: payload.name,
    terms: payload.terms,
    domain: payload.domain,
    address: payload.address,
    code_warning_threshold: payload.code_warning_threshold,
    store: payload.store,
  });

  if (payload.logo) {
    const cloudinary_thumbnail = await endpoint.update_image(
      undefined,
      payload.logo
    );
    endpoint.update_settings({
      cloudinary_thumbnail: cloudinary_thumbnail,
    });
  }
  setIsSaving(false);
};
