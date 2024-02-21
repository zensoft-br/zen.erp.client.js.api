export class MailService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async messageOpSend(message) {
    return this.#zenClient.web.fetchJson("/system/mail/messageOpSend", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),

    });
  }

}
