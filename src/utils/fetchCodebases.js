import * as tokenUtils from "./tokenUtil.ts";
import * as base from "./base.js";

const fetchCodebases = async () => {
  const limit = undefined;
  const offset = undefined;
  const order_by = undefined;
  const reverse_order = undefined;

  const access_token = await tokenUtils.getToken();
  if (access_token === null) {
    throw Error("TokenError: the both tokens have expired login the user.");
  }
  const codebase_endpoint = new base.CodebaseEndpoint(access_token, {});

  const codebases = await codebase_endpoint.list(
    limit,
    offset,
    order_by,
    reverse_order
  );

  console.log(codebases);

  return codebases.results;
};
export default fetchCodebases;
