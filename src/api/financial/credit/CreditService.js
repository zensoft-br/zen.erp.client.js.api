export class CreditService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async creditLineCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/credit/creditLine", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async creditLineDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/credit/creditLine/${id}`, {
      method: "DELETE",

    });
  }

  async creditLineItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/credit/creditLineItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async creditLineItemDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/credit/creditLineItem/${id}`, {
      method: "DELETE",

    });
  }

  async creditLineItemRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/credit/creditLineItem?${search}`, {
      method: "GET",

    });
  }

  async creditLineItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/credit/creditLineItem/${id}`, {
      method: "GET",

    });
  }

  async creditLineItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/credit/creditLineItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async creditLineRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/credit/creditLine?${search}`, {
      method: "GET",

    });
  }

  async creditLineReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/credit/creditLine/${id}`, {
      method: "GET",

    });
  }

  async creditLineUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/credit/creditLine", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
