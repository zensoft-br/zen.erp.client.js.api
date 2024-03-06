export class MailService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async mailerConfigCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/mail/mailerConfig", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async mailerConfigDelete(id) {
    this.#zenClient.web.fetchJson(`/system/mail/mailerConfig/${id}`, {
      method: "DELETE",
      
    });
  }

  async mailerConfigRead(search) {
    return this.#zenClient.web.fetchJson(`/system/mail/mailerConfig?${search}`, {
      method: "GET",
      
    });
  }

  async mailerConfigReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/mail/mailerConfig/${id}`, {
      method: "GET",
      
    });
  }

  async mailerConfigUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/mail/mailerConfig", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async messageOpSend(mailerConfigId, mailerConfigCode, message) {
    const sp = new URLSearchParams();
    if (mailerConfigId) sp.set("mailerConfigId", mailerConfigId);
    if (mailerConfigCode) sp.set("mailerConfigCode", mailerConfigCode);
    return this.#zenClient.web.fetchJson(`/system/mail/messageOpSend?${sp.toString()}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(message),

    });
  }

  }
