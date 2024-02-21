export class ImageService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async imageCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/image/image", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async imageDelete(id) {
    this.#zenClient.web.fetchJson(`/system/image/image/${id}`, {
      method: "DELETE",

    });
  }

  async imageRead(search) {
    return this.#zenClient.web.fetchJson(`/system/image/image?${search}`, {
      method: "GET",

    });
  }

  async imageReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/image/image/${id}`, {
      method: "GET",

    });
  }

  async imageUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/image/image", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
