import * as tokenUtils from "./tokenUtil.ts";
import * as base from "./base.js";

const fetchProducts = async () => {
  const limit = undefined;
  const offset = undefined;
  const order_by = undefined;
  const reverse_order = undefined;

  // const credentials = {
  //   username: "admin",
  //   password: "theadmin123",
  // };
  // await tokenUtils.loginUser(credentials);

  const access_token = await tokenUtils.getToken();
  if (access_token === null) {
    throw Error("TokenError: the both tokens have expired login the user.");
  }
  const product_endpoint = new base.ProductEndpoint(access_token, {});

  const products = await product_endpoint.list(
    limit,
    offset,
    order_by,
    reverse_order
  );

  console.log(products);

  return products.results;
};
export default fetchProducts;
