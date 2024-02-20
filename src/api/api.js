import { CatalogService } from "./catalog/catalog.js";

export class Api {

  #zenClient;

  #catalog;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  get catalog() {
    if (!this.#catalog)
      this.#catalog = new CatalogService(this.#zenClient);
    return this.#catalog;
  }

}
