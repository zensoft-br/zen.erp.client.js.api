export class AuditService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async logCreate(args) {
    return this.#zenClient.web.fetchJson("/system/audit/log", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async logOpDeleteExpired() {
    return this.#zenClient.web.fetchJson("/system/audit/logOpDeleteExpired", {
      method: "POST",

    });
  }

  async logRead(search) {
    return this.#zenClient.web.fetchJson(`/system/audit/log?${search}`, {
      method: "GET",

    });
  }

  async logReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/audit/log/${id}`, {
      method: "GET",

    });
  }

  async sourceOpReadByEntity(entity, entityId) {
    return this.#zenClient.web.fetchJson(`/system/audit/sourceOpReadByEntity?entity=${entity}&entityId=${entityId}`, {
      method: "POST",

    });
  }

  async sourceRead(search) {
    return this.#zenClient.web.fetchJson(`/system/audit/source?${search}`, {
      method: "GET",

    });
  }

  async sourceReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/audit/source/${id}`, {
      method: "GET",

    });
  }

  async userLogCreate(args) {
    return this.#zenClient.web.fetchJson("/system/audit/userLog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userLogDelete(id) {
    this.#zenClient.web.fetchJson(`/system/audit/userLog/${id}`, {
      method: "DELETE",

    });
  }

  async userLogRead(search) {
    return this.#zenClient.web.fetchJson(`/system/audit/userLog?${search}`, {
      method: "GET",

    });
  }

  async userLogReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/audit/userLog/${id}`, {
      method: "GET",

    });
  }

  async userLogUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/audit/userLog", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
