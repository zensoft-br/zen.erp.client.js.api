import { Client } from "../../../Client.js";
import { Image } from "./Image.js";

export class ImageService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async imageCreate(bean: Image): Promise<Image> {
    return this.#client.web.fetchJson("/system/image/image", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async imageDelete(id: number): Promise<Image> {
    return this.#client.web.fetchJson(`/system/image/image/${id}`, {
      method: "DELETE",
      
    });
  }

  async imageRead(search: any): Promise<Image[]> {
    return this.#client.web.fetchJson(`/system/image/image?${search}`, {
      method: "GET",
      
    });
  }

  async imageReadById(id: number): Promise<Image> {
    return this.#client.web.fetchJson(`/system/image/image/${id}`, {
      method: "GET",
      
    });
  }

  async imageUpdate(bean: Image): Promise<Image> {
    return this.#client.web.fetchJson("/system/image/image", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
