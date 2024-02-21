export class SystemService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async checkAuth() {
    this.#zenClient.web.fetchJson("/system/checkAuth", {
      method: "GET",

    });
  }

  async customPropertiesOpSet(args) {
    this.#zenClient.web.fetchJson("/system/customPropertiesOpSet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async customTagsOpSet(entity, tag) {
    this.#zenClient.web.fetchJson(`/system/customTagsOpSet?entity=${entity}&tag=${tag}`, {
      method: "POST",

    });
  }

  async infoRead() {
    return this.#zenClient.web.fetchJson("/system/info", {
      method: "GET",

    });
  }

  async resourcesRead() {
    return this.#zenClient.web.fetchJson("/system/resources", {
      method: "GET",

    });
  }

  async statusCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/status", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async statusDelete(id) {
    this.#zenClient.web.fetchJson(`/system/status/${id}`, {
      method: "DELETE",

    });
  }

  async statusRead(search) {
    return this.#zenClient.web.fetchJson(`/system/status?${search}`, {
      method: "GET",

    });
  }

  async statusReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/status/${id}`, {
      method: "GET",

    });
  }

  async statusUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/status", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async testCreate(test) {
    return this.#zenClient.web.fetchJson("/system/test", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(test),

    });
  }

  async testRead() {
    return this.#zenClient.web.fetchJson("/system/test", {
      method: "GET",

    });
  }

}
