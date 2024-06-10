import * as tokenUtils from "./tokenUtil.js";
import * as base from "./base.js";
import { Paginator } from "./pagination.js";

const fetchProducts = async () => {
  const access_token = await tokenUtils.getToken();
  if (access_token === null) {
    throw Error("TokenError: the both tokens have expired login the user.");
  }
  const product_endpoint = new base.ProductEndpoint(access_token, {});
  const paginator = new Paginator(product_endpoint, 0);

  const results = (await paginator.current()).results;
  results.paginator = paginator;

  return results;
};
export default fetchProducts;
