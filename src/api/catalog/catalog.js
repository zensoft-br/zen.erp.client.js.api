export class CatalogService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async categoryCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),
    });
  }

  async categoryDelete(id) {
    return null;
  }

  async categoryRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/category${search ? `?${ search}` : ""}`);
  }

  async categoryReadById(id) {
    return null;
  }

  async categoryUpdate(bean) {
    return null;
  }

}
