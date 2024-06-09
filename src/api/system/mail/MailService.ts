import { Client } from "../../../Client.js";
import { MailerConfig } from "./MailerConfig.js";
import { Message } from "./Message.js";

export class MailService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async mailerConfigCreate(bean: MailerConfig): Promise<MailerConfig> {
    return this.#client.web.fetchJson("/system/mail/mailerConfig", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async mailerConfigDelete(id: number): Promise<MailerConfig> {
    return this.#client.web.fetchJson(`/system/mail/mailerConfig/${id}`, {
      method: "DELETE",
      
    });
  }

  async mailerConfigRead(search: any): Promise<MailerConfig[]> {
    return this.#client.web.fetchJson(`/system/mail/mailerConfig?${search}`, {
      method: "GET",
      
    });
  }

  async mailerConfigReadById(id: number): Promise<MailerConfig> {
    return this.#client.web.fetchJson(`/system/mail/mailerConfig/${id}`, {
      method: "GET",
      
    });
  }

  async mailerConfigUpdate(bean: MailerConfig): Promise<MailerConfig> {
    return this.#client.web.fetchJson("/system/mail/mailerConfig", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async messageOpSend(mailerConfigId: number, mailerConfigCode: string, message: Message): Promise<string> {
    const sp = new URLSearchParams();
    if (mailerConfigId) sp.set("mailerConfigId", String(mailerConfigId));
    if (mailerConfigCode) sp.set("mailerConfigCode", String(mailerConfigCode));
    return this.#client.web.fetchText(`/system/mail/messageOpSend?${sp.toString()}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(message),

    });
  }

  }
