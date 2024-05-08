// Some base utilities here

// import * as tokenUtil from './token-utils';

type callback = (resource?: object | string) => void;
type error_callback = (error?: object | string) => void;

const DOMAIN = "https://apps.autoverify-be.bloombyte.dev";

const product_endpoints = {
  list: "/api/v1/products/",
  create: "/api/v1/products/",
  read: "/api/v1/products/{product_id}/",
  update: "/api/v1/products/{product_id}/",
  partial_update: "/api/v1/products/{product_id}/",
  delete: "/api/v1/products/{product_id}/",
};

const codebase_endpoints = {
  list: "/api/v1/codebases/",
  create: "/api/v1/codebases/",
  read: "/api/v1/codebases/{id}/",
  update: "/api/v1/codebases/{id}/",
  partial_update: "//api/v1/codebases/{id}/",
  delete: "/api/v1/codebases/{id}/",
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

const store_setting_endpoints = {
  get_settings: "/api/v1/store_settings/get_settings/",
  update_settings: "/api/v1/store_settings/update_settings/",
};

function _join(endpoint: string) {
  return DOMAIN + endpoint;
}

function _isHttpMethod(method: string) {
  return (
    [`post`, `get`, `put`, `patch`, "delete"].indexOf(method.toLowerCase()) !==
    -1
  );
}

class _BaseRequestEndpoint {
  public headers: Record<string, string>;

  constructor(headers: Record<string, string>) {
    this.headers = headers;
  }

  add_header(header: string, value: string) {
    this.headers[header] = value;
  }

  del_header(header: string) {
    delete this.headers[header];
  }
}

class _RequestEndpoint extends _BaseRequestEndpoint {
  public access_token: string;

  constructor(access_token: string, headers: Record<string, string>) {
    super(headers);
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

  async get(
    endpoint: string,
    queryParams: Record<string, string | number>,
    callback?: callback
  ) {
    const queryString = Object.keys(queryParams)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
      )
      .join("&");

    const url = endpoint + (queryString ? `?${queryString}` : "");

    return await this._fetch(url, "GET", undefined, callback);
  }

  async post(endpoint: string, body: object, callback?: callback) {
    return await this._fetch(endpoint, "POST", body, callback);
  }

  async put(endpoint: string, body: object, callback?: callback) {
    return await this._fetch(endpoint, "PUT", body, callback);
  }

  async patch(endpoint: string, body: object, callback?: callback) {
    return await this._fetch(endpoint, "PATCH", body, callback);
  }

  async _fetch(
    endpoint: string,
    method: string,
    body: object | undefined | null,
    callback?: callback,
    error?: error_callback
  ) {
    if (!_isHttpMethod(method)) {
      throw Error(
        `RequestError: Failed to fetch data, the method ${method} is not recognised`
      );
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

      if (res.ok && callback) {
        try {
          callback(resource);
        } catch (error) {
          console.error(
            "Request Success But Failed To Call success Callback:",
            error
          );
        }
      } else {
        if (error) {
          console.error(`Failed at ${endpoint} calling callback ...`);
          try {
            error!(resource);
          } catch (error) {
            console.error("Failed to call error callback");
          }
        }
      }
      return resource;

      console.error(`Request Failed: ${res.statusText}`);
      console.error(await res.text());
    } catch (error) {
      console.error("Request Failed:", error);
    }

    return null;
  }

  async list(
    endpoint: string,
    limit?: number,
    offset?: number,
    order_by?: string,
    reverse_order?: boolean
  ) {
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
}

export class ProductEndpoint extends _RequestEndpoint {
  public endpoints = product_endpoints;
  public id_name = "product_id";

  async list(...args) {
    // if limit is null then return unpaginated data
    const limit = args[0];
    const endpoint = _join(this.endpoints.list);

    if (limit !== null) {
      return await super.list(endpoint, ...args);
    }

    // return unpaginated data
    let paginated_res = await super.list(endpoint, 10000); // get as much as possible
    const list = paginated_res.results;
    while (paginated_res.next !== null) {
      paginated_res = await this._fetch(paginated_res.next, "GET", undefined);
      list.push(...paginated_res.results);
    }
    return list;
  }

  async read(id, ...args) {
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
}

export class CodebaseEndpoint extends ProductEndpoint {
  public endpoints = codebase_endpoints;
  public id_name = "id";
}

export class PaymentMethod extends ProductEndpoint {
  public endpoints = payment_method_endpoints;
  public id_name = "id";

  async get_configuration() {
    const endpoint = _join(this.endpoints.get_configuration);
    return await this.get(endpoint, {});
  }

  async configure_stripe(id, body: object) {
    const endpoint = _join(
      this.endpoints.configure_stripe.replace(`{${this.id_name}}`, id)
    );
    return await this.patch(endpoint, body);
  }
}

export class StoreSetting extends ProductEndpoint {
  public endpoints = store_setting_endpoints;

  async get_settings() {
    console.log("called in base");
    const endpoint = _join(this.endpoints.get_settings);
    return await this.get(endpoint, {});
  }

  async update_settings(body: object) {
    console.log(body);
    const endpoint = _join(this.endpoints.update_settings);
    return await this.patch(endpoint, body);
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
// {
//   "name": "Shoe",
//   "price": "30.4",
//   "use_codebase": true,
//   "codebase": 1
// }`;
//   const p2 = await p.create(data);
//   console.log(p2);

//   console.log(`Updatating the product`);
//   data = `
// {
//   "name": "Shoe lala",
//   "price": "30.4",
//   "use_codebase": true,
//   "codebase": 1
// }`;
//   let p1_update = await p.update(pid, data);
//   console.log(p1_update);

//   console.log(`Partialy Updatating the product`);
//   data = `
// {
//   "name": "Shoe lala"
// }`;
//   p1_update = await p.partial_update(pid, data);
//   console.log(p1_update);
// }
