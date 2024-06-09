import { Client } from "../../../Client.js";
import { CreditLine } from "./CreditLine.js";
import { CreditLineItem } from "./CreditLineItem.js";

export class CreditService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async creditLineCreate(bean: CreditLine): Promise<CreditLine> {
    return this.#client.web.fetchJson("/financial/credit/creditLine", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async creditLineDelete(id: number): Promise<CreditLine> {
    return this.#client.web.fetchJson(`/financial/credit/creditLine/${id}`, {
      method: "DELETE",
      
    });
  }

  async creditLineItemCreate(bean: CreditLineItem): Promise<CreditLineItem> {
    return this.#client.web.fetchJson("/financial/credit/creditLineItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async creditLineItemDelete(id: number): Promise<CreditLineItem> {
    return this.#client.web.fetchJson(`/financial/credit/creditLineItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async creditLineItemRead(search: any): Promise<CreditLineItem[]> {
    return this.#client.web.fetchJson(`/financial/credit/creditLineItem?${search}`, {
      method: "GET",
      
    });
  }

  async creditLineItemReadById(id: number): Promise<CreditLineItem> {
    return this.#client.web.fetchJson(`/financial/credit/creditLineItem/${id}`, {
      method: "GET",
      
    });
  }

  async creditLineItemUpdate(bean: CreditLineItem): Promise<CreditLineItem> {
    return this.#client.web.fetchJson("/financial/credit/creditLineItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async creditLineRead(search: any): Promise<CreditLine[]> {
    return this.#client.web.fetchJson(`/financial/credit/creditLine?${search}`, {
      method: "GET",
      
    });
  }

  async creditLineReadById(id: number): Promise<CreditLine> {
    return this.#client.web.fetchJson(`/financial/credit/creditLine/${id}`, {
      method: "GET",
      
    });
  }

  async creditLineUpdate(bean: CreditLine): Promise<CreditLine> {
    return this.#client.web.fetchJson("/financial/credit/creditLine", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
