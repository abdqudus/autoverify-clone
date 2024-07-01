// Some base utilities here

// import * as tokenUtil from './token-utils';

// type callback = (resource?: object | string) => void;
// type error_callback = (error?: object | string) => void;

const DOMAIN = "https://be.autoverify.bloombyte.dev";

const product_endpoints = {
  list: "/api/v1/products/",
  create: "/api/v1/products/",
  read: "/api/v1/products/{product_id}/",
  update: "/api/v1/products/{product_id}/",
  partial_update: "/api/v1/products/{product_id}/",
  delete: "/api/v1/products/{product_id}/",
  buy: "/api/v1/public_store/{product_id}/",
};

const auction_endpoints = {
  list: "/api/v1/ebay_connector/{account_id}/auctions/",
  create: "/api/v1/ebay_connector/{account_id}/auctions/",
  read: "/api/v1/ebay_connector/{account_id}/auctions/{id}/",
  update: "/api/v1/ebay_connector/{account_id}/auctions/{id}/",
  partial_update: "/api/v1/ebay_connector/{account_id}/auctions/{id}/",
  delete: "/api/v1/ebay_connector/{account_id}/auctions/{id}/",
  sync: "/api/v1/ebay_connector/{account_id}/auctions/sync/",
};

const email_campaign_endpoints = {
  list: "/api/v1/campaigns/",
  create: "/api/v1/campaigns/",
  read: "/api/v1/campaigns/{id}/",
  update: "/api/v1/campaigns/{id}/",
  partial_update: "/api/v1/campaigns/{id}/",
  delete: "/api/v1/campaigns/{id}/",
};

const layout_endpoints = {
  list: "/api/v1/layouts/",
  create: "/api/v1/layouts/",
  read: "/api/v1/layouts/{id}/",
  update: "/api/v1/layouts/{id}/",
  partial_update: "/api/v1/layouts/{id}/",
  delete: "/api/v1/layouts/{id}/",
};

const user_endpoints = {
  list: "/api/v1/users/",
  create: "/api/v1/users/",
  read: "/api/v1/users/{id}/",
  update: "/api/v1/users/{id}/",
  partial_update: "/api/v1/users/{id}/",
  delete: "/api/v1/users/{id}/",
  me: "/api/v1/users/me/",
  change_password: "/api/v1/users/password_reset/",
  reset_and_send_password_to_email:
    "/api/v1/users/reset_and_send_password_to_email/",
};

const general_settings_endpoints = {
  get_settings: "/api/v1/general_settings/get_settings/",
  update_settings: "/api/v1/general_settings/update_settings/",
};

const personal_settings_endpoints = {
  get_settings: "/api/v1/personal_settings/get_settings/",
  update_settings: "/api/v1/personal_settings/update_settings/",
};

const ebay_settings_endpoints = {
  get_settings: "/api/v1/ebay_settings/get_settings/",
  update_settings: "/api/v1/ebay_settings/update_settings/",
};

const checkout_endpoints = {
  checkout: "/api/v1/checkout-endpoint/checkout/",
};

const codebase_endpoints = {
  list: "/api/v1/codebases/",
  create: "/api/v1/codebases/",
  read: "/api/v1/codebases/{id}/",
  update: "/api/v1/codebases/{id}/",
  partial_update: "//api/v1/codebases/{id}/",
  delete: "/api/v1/codebases/{id}/",
  download_all_codes: "/api/v1/codebases/{id}/download_all_codes/",
  download_sent_codes: "/api/v1/codebases/{id}/download_sent_codes/",
  download_unsent_codes: "/api/v1/codebases/{id}/download_unsent_codes/",
  handle_text_file: "/api/v1/bulk-codes/handle_text_file/",
  delete_sent_files_from_base:
    "/api/v1/codebases/{id}/delete_sent_files_from_base/",
  codes: "/api/v1/codebases/{id}/codes/",
};

const code_endpoints = {
  list: "/api/v1/codes/",
  create: "/api/v1/codes/",
  read: "/api/v1/codes/{id}/",
  update: "/api/v1/codes/{id}/",
  partial_update: "/api/v1/codes/{id}/",
  delete: "/api/v1/codes/{id}/",
};

const custom_transaction_endpoints = {
  list: "/api/v1/create_custom_transaction/",
  create_transaction: "/api/v1/create_custom_transaction/create_transaction/",
};

const csrf_token_endpoint = {
  endpoint: "/api/v1/products/get_csrf_token/",
};

const payment_method_endpoints = {
  list: "/api/v1/payment-method/",
  create: "/api/v1/payment-method/",
  read: "/api/v1/payment-method/{id}/",
  update: "/api/v1/payment-method/{id}/",
  partial_update: "/api/v1/payment-method/{id}/",
  delete: "/api/v1/payment-method/{id}/",
  configure_stripe: "/api/v1/payment-method/{id}/configure_stripe/",
  get_configuration: "/api/v1/payment-method/{id}/get_configuration/",
};

const ebay_account_endpoints = {
  list: "/api/v1/ebay_connector/",
  create: "/api/v1/ebay_connector/",
  read: "/api/v1/ebay_connector/{account_id}/",
  update: "/api/v1/ebay_connector/{account_id}/",
  partial_update: "/api/v1/ebay_connector/{account_id}/",
  delete: "/api/v1/ebay_connector/{account_id}/",
  activate: "/api/v1/ebay_connector/{account_id}/activate_account/",
};

const payment_history_endpoints = {
  list: "/api/v1/payment_history/",
  read: "/api/v1/payment_history/{id}",
};

const store_setting_endpoints = {
  get_settings: "/api/v1/store_settings/get_settings/",
  update_settings: "/api/v1/store_settings/update_settings/",
};

const statistics = {
  get_data: "/api/v1/statistics/statistics/",
  summary: "/api/v1/statistics/summary/",
};

const cloudinary_link =
  "https://api.cloudinary.com/v1_1/autovery-cloud-name/image/upload";

export function _join(endpoint) {
  return DOMAIN + endpoint;
}

function _isHttpMethod(method) {
  return (
    [`post`, `get`, `put`, `patch`, "delete"].indexOf(method.toLowerCase()) !==
    -1
  );
}

export const getDomain = () => {
  const { protocol, hostname, port } = window.location;
  return `${protocol}//${hostname}${port ? `:${port}` : ""}`;
};

export function createAndClickLink(url, external) {
  const link = document.createElement("a");
  link.href = url;

  if (!url || url === ".") {
    link.href = location.href;
  }

  if (external) {
    link.target = "_blank";
  }

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function reloadPage() {
  createAndClickLink("");
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

const DEFAULT_ERROR_METHOD = (res, content) => {
  console.warn("you are suppose to handle this error", res);
  console.warn(content);
};

export function _formatDate(date) {
  // Get the year, month, and day from the date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-based month
  const day = String(date.getDate()).padStart(2, "0"); // getDate() returns 1-based day

  // Combine them into the desired format
  return `${year}-${month}-${day}`;
}

export async function downloadAsFile(data, mimeType, fileName) {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

class _BaseRequestEndpoint {
  constructor(headers) {
    this.headers = headers;
  }

  add_header(header, value) {
    this.headers[header] = value;
  }

  del_header(header) {
    delete this.headers[header];
  }
}

class _RequestEndpoint extends _BaseRequestEndpoint {
  access_token;
  csrf_token_endpoint = csrf_token_endpoint;
  csrf_token;

  constructor(access_token, headers, error) {
    super(headers);
    this.error = error || DEFAULT_ERROR_METHOD;
    this.access_token = access_token;
    this.add_jwt_header();
    this.finish_constructor();
  }

  add_jwt_header() {
    this.add_header("Authorization", `JWT ${this.access_token}`);
    this.add_header("Content-Type", "application/json");
    this.add_header("accept", "application/json");
  }

  finish_constructor() {}

  async get(endpoint, queryParams, callback) {
    const queryString = Object.keys(queryParams)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
      )
      .join("&");

    const url = endpoint + (queryString ? `?${queryString}` : "");

    return await this._fetch(url, "GET", undefined, callback);
  }

  pre_render_url(endpoint) {
    return endpoint;
  }

  async post(endpoint, body, callback) {
    return await this._fetch(endpoint, "POST", body, callback);
  }

  async put(endpoint, body, callback) {
    return await this._fetch(endpoint, "PUT", body, callback);
  }

  async patch(endpoint, body, callback) {
    return await this._fetch(endpoint, "PATCH", body, callback);
  }

  async _fetch(endpoint, method, body, callback) {
    endpoint = this.pre_render_url(endpoint);

    const error = this.error;

    if (!_isHttpMethod(method)) {
      throw Error(
        `RequestError: Failed to fetch data, the method ${method} is not recognised`
      );
    }
    if (this.csrf_token && !(body instanceof FormData)) {
      const e = `When uploading data the body should be of type FormData not ${typeof body}`;
      console.error(e);
      throw Error(e);
    }

    if (this.csrf_token) {
      const formdata = body;
      formdata.set("csrfmiddlewaretoken", this.csrf_token);
    }

    try {
      if (typeof body === "object") {
        body = JSON.stringify(body);
      }

      const res = await fetch(endpoint, {
        method: method,
        headers: this.headers,
        body: body,
      });

      let resource = await res.text();

      try {
        resource = JSON.parse(resource);
      } catch (e) {
        console.warn(`Return data is not json at ${endpoint}`);
      }

      if (res.ok) {
        if (callback) {
          try {
            callback(resource, res); // callback(data, res)
          } catch (error) {
            console.error(
              "Request Success But Failed To Call success Callback:",
              error
            );
          }
        }
      } else {
        try {
          error(res, resource);
        } catch (error) {
          console.error("Error call back throwed an error", error);
          console.error(
            "Why in God's name will the code to handle error throw an error"
          );
        }
      }

      return resource;
    } catch (error) {
      console.warn("Request Failed:", error);
    }

    return null;
  }

  async list(endpoint, limit, offset, order_by, reverse_order) {
    const queryParams = {};
    if (order_by) {
      if (reverse_order) {
        order_by = `-${order_by}`;
      }
      queryParams["ordering"] = order_by;
    }
    if (offset) {
      queryParams["offset"] = offset;
    }
    if (limit) {
      queryParams["limit"] = limit;
    }
    return await this.get(endpoint, queryParams);
  }

  // csrf token is for uploading data, that is sending Form Data

  async _get_csrf_token() {
    // example return data {csrfToken: 'cE8v3aLNdBRuw94W6repsz1Jap1NIWeygCoAV9JdLICvMkyFJleKRisrxVMF7d8t'}
    const endpoint = _join(this.csrf_token_endpoint.endpoint);
    const csrf_token = await this.get(endpoint, {});
    return csrf_token.csrfToken;
  }

  async setup_for_upload() {
    const csrf_token = await this._get_csrf_token();
    this.csrf_token = csrf_token;
    // this.add_header("Content-Type", "multipart/form-data"); // God sent solution was to comment this
    this.del_header("Content-Type"); // some browser default Content-type to text plain
    // this.add_header("Content-Type", null);

    // this.add_header("X-Requested-With", "XMLHttpRequest"); // so backend knows this wasnt a browser request but from JS
  }
}

export class ProductEndpoint extends _RequestEndpoint {
  endpoints = product_endpoints;
  id_name = "product_id";
  cloudinary_upload_preset = "autoverify_upload_preset";

  pre_render_url(endpoint) {
    return super.pre_render_url(endpoint);
  }

  async update_image(id, image) {
    const form = new FormData();
    form.append("file", image);
    form.append("upload_preset", "autoverify_upload_preset");
    form.append("folder", "somewhere_up_there");

    const res = await fetch(cloudinary_link, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      throw Error("Could not upload image");
    }

    const data = await res.json();
    const image_url = data.secure_url;

    if (id) {
      return await this.partial_update(id, {
        cloudinary_thumbnail: image_url,
      });
    }

    return image_url;
  }
  async list(...args) {
    // if limit is null then return unpaginated data
    const limit = args[0];
    const endpoint = _join(this.endpoints.list);

    if (limit !== null) {
      return await super.list(endpoint, ...args);
    }

    // return unpaginated data
    let paginated_res = await super.list(endpoint, 1000); // get as much as possible
    const list = paginated_res.results;
    while (paginated_res.next !== null) {
      paginated_res = await this._fetch(paginated_res.next, "GET", undefined);
      list.push(...paginated_res.results);
    }
    return list;
  }
  async grand_list(...args) {
    return await super.list(...args);
  }
  async list_unpaginated(...args) {
    return await this.list(null, ...args);
  }
  async read(id) {
    const endpoint = _join(
      this.endpoints.read.replace(`{${this.id_name}}`, id)
    );
    return await this.get(endpoint, {});
  }

  async create(data) {
    const endpoint = _join(this.endpoints.create);
    return await this.post(endpoint, data);
  }

  async update(id, data) {
    const endpoint = _join(
      this.endpoints.update.replace(`{${this.id_name}}`, id)
    );
    return await this.put(endpoint, data);
  }

  async partial_update(id, data) {
    const endpoint = _join(
      this.endpoints.partial_update.replace(`{${this.id_name}}`, id)
    );
    return await this.patch(endpoint, data);
  }

  async delete(id) {
    const endpoint = _join(
      this.endpoints.delete.replace(`{${this.id_name}}`, id)
    );
    return await this._fetch(endpoint, "DELETE", {});
  }

  async get_buy_data(id) {
    const endpoint = _join(this.endpoints.buy.replace(`{${this.id_name}}`, id));
    return await this.get(endpoint, {});
  }
}

export class CodebaseEndpoint extends ProductEndpoint {
  endpoints = codebase_endpoints;
  id_name = "id";

  async handle_text_file(text, codebase_id) {
    const endpoint = _join(this.endpoints.handle_text_file);
    return await this.post(endpoint, {
      code_list: text,
      codebase_id: codebase_id,
    });
  }

  async delete_sent_files_from_base(codebase_id) {
    const endpoint = _join(
      this.endpoints.delete_sent_files_from_base.replace(
        `{${this.id_name}}`,
        codebase_id
      )
    );
    return await this.put(endpoint, {});
  }

  async codes(codebase_id, ...list_arguments) {
    const endpoint = _join(
      this.endpoints.codes.replace(`{${this.id_name}}`, codebase_id)
    );
    console.log("codebase_id", codebase_id);
    console.log("endpoint ", endpoint);
    console.log("...list_arguments", list_arguments);
    return await this.grand_list(endpoint, ...list_arguments);
  }
}

export class PaymentMethod extends ProductEndpoint {
  endpoints = payment_method_endpoints;
  id_name = "id";

  async get_configuration() {
    const endpoint = _join(this.endpoints.get_configuration);
    return await this.get(endpoint, {});
  }

  async configure_stripe(id, body) {
    const endpoint = _join(
      this.endpoints.configure_stripe.replace(`{${this.id_name}}`, id)
    );
    return await this.patch(endpoint, body);
  }
}

export class StoreSetting extends ProductEndpoint {
  endpoints = store_setting_endpoints;

  async get_settings() {
    const endpoint = _join(this.endpoints.get_settings);
    return await this.get(endpoint, {});
  }

  async update_settings(body) {
    const endpoint = _join(this.endpoints.update_settings);
    return await this.patch(endpoint, body);
  }
}

export class EbayAccount extends ProductEndpoint {
  endpoints = ebay_account_endpoints;
  id_name = "account_id";

  async activate(id, payload) {
    const endpoint = _join(
      this.endpoints.activate.replace(`{${this.id_name}}`, id)
    );
    return await this.post(endpoint, payload);
  }
}

export class Statistics extends ProductEndpoint {
  endpoints = statistics;

  async get_data(startDate, endDate) {
    const endpoint = _join(this.endpoints.get_data);
    const payload = {
      start_date: _formatDate(startDate || new Date()),
      end_date: _formatDate(endDate || new Date()),
    };
    return await this.post(endpoint, payload);
  }

  async get_last_7_days() {
    const now = new Date();
    const last7days = new Date();
    now.setDate(now.getDate() - 7);
    return await this.get_data(now, last7days);
  }

  async summary() {
    const endpoint = _join(this.endpoints.summary);
    return await this.get(endpoint, {});
  }
}

export class CheckoutEndpoint extends ProductEndpoint {
  endpoints = checkout_endpoints;

  async checkout(payload) {
    const endpoint = _join(this.endpoints.checkout);
    return await this.post(endpoint, payload);
  }
}

export class LayoutEndpoint extends ProductEndpoint {
  endpoints = layout_endpoints;
  id_name = "id";
}

export class UserEndpoint extends ProductEndpoint {
  endpoints = user_endpoints;
  id_name = "id";

  async me() {
    const endpoint = _join(this.endpoints.me);
    return await this.get(endpoint, {});
  }

  async change_password(new_password, repeat_new_password, old_password) {
    const endpoint = _join(this.endpoints.change_password);
    return await this.put(endpoint, {
      new_password: new_password,
      repeat_new_password: repeat_new_password,
      old_password: old_password,
    });
  }

  async reset_and_send_password_to_email(email) {
    const endpoint = _join(this.endpoints.reset_and_send_password_to_email);

    return await this.put(endpoint, {
      email: email,
    });
  }
}

export class GeneralSettingsEndpoint extends ProductEndpoint {
  endpoints = general_settings_endpoints;
  id_name = "id";

  async get_settings() {
    const endpoint = _join(this.endpoints.get_settings);
    return await this.get(endpoint, {});
  }

  async update_settings(payload) {
    const endpoint = _join(this.endpoints.update_settings);
    return await this.post(endpoint, payload);
  }
}

export class PersonalSettingsEndpoint extends GeneralSettingsEndpoint {
  endpoints = personal_settings_endpoints;
}

export class EbaySettingsEndpoint extends GeneralSettingsEndpoint {
  endpoints = ebay_settings_endpoints;
}

export class CodeEndpoint extends ProductEndpoint {
  endpoints = code_endpoints;
  id_name = "id";
}

export class PaymentHistory extends ProductEndpoint {
  endpoints = payment_history_endpoints;
  id_name = "id";
}

export class CustomTransactionEndpoint extends ProductEndpoint {
  endpoints = custom_transaction_endpoints;
  id_name = "id";

  async create_transaction(data) {
    const endpoint = _join(this.endpoints.create_transaction);
    return await this.post(endpoint, data);
  }
}

export class Campaign extends ProductEndpoint {
  endpoints = email_campaign_endpoints;
  id_name = "id";
}

export class Auction extends ProductEndpoint {
  endpoints = auction_endpoints;
  id_name = "id";
  account_id = undefined;
  account_id_name = "account_id";

  pre_render_url(endpoint) {
    // this is needed because auction endpoints usually have 2 ids `account_id` and `id`
    return endpoint.replace(`{${this.account_id_name}}`, this.account_id);
  }
}

// async function test() {
//   const res = await loginUser(credentials);
//   const p = new ProductEndpoint(res, {});

//   console.log(`List all products...`);
//   const list = await p.list();
//   console.log(list);

//   console.log(`Get one product`);
//   const pid = list.results[0].product_id;
//   const p1 = await p.read(pid);
//   console.log(p1);

//   console.log(`Create one Product`);
//   let data = `
//   {
//     "name": "Shoe",
//     "price": "30.4",
//     "use_codebase": true,
//     "codebase": 1
//   }`;
//   const p2 = await p.create(data);
//   console.log(p2);

//   console.log(`Updatating the product`);
//   data = `
//   {
//     "name": "Shoe lala",
//     "price": "30.4",
//     "use_codebase": true,
//     "codebase": 1
//   }`;
//   let p1_update = await p.update(pid, data);
//   console.log(p1_update);

//   console.log(`Partialy Updatating the product`);
//   data = `
//   {
//     "name": "Shoe lala"
//   }`;
//   p1_update = await p.partial_update(pid, data);
//   console.log(p1_update);
// }
