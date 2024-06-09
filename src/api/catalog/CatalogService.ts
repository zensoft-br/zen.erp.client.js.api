import { Client } from "../../Client.js";
import { Category } from "./Category.js";

export class CatalogService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async categoryCreate(bean: Category): Promise<Category> {
    return this.#client.web.fetchJson("/catalog/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async categoryDelete(id: number): Promise<Category> {
    return this.#client.web.fetchJson(`/catalog/category/${id}`, {
      method: "DELETE",
      
    });
  }

  async categoryRead(search: any): Promise<Category[]> {
    return this.#client.web.fetchJson(`/catalog/category?${search}`, {
      method: "GET",
      
    });
  }

  async categoryReadById(id: number): Promise<Category> {
    return this.#client.web.fetchJson(`/catalog/category/${id}`, {
      method: "GET",
      
    });
  }

  async categoryUpdate(bean: Category): Promise<Category> {
    return this.#client.web.fetchJson("/catalog/category", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
