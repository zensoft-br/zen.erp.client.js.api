export class CompanyService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async companyCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/company/company", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async companyDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/company/company/${id}`, {
      method: "DELETE",

    });
  }

  async companyOpGetActive() {
    return this.#zenClient.web.fetchJson("/catalog/company/companyOpGetActive", {
      method: "POST",

    });
  }

  async companyOpSetActive(id) {
    return this.#zenClient.web.fetchJson(`/catalog/company/companyOpSetActive/${id}`, {
      method: "POST",

    });
  }

  async companyRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/company/company?${search}`, {
      method: "GET",

    });
  }

  async companyReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/company/company/${id}`, {
      method: "GET",

    });
  }

  async companyUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/company/company", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async societyCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/company/society", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async societyDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/company/society/${id}`, {
      method: "DELETE",

    });
  }

  async societyRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/company/society?${search}`, {
      method: "GET",

    });
  }

  async societyReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/company/society/${id}`, {
      method: "GET",

    });
  }

  async societyUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/company/society", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
