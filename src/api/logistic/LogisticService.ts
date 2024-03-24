import { Client } from "../../Client.js";
import { IncomingShipping } from "./IncomingShipping.js";
import { ShippingItem } from "./ShippingItem.js";

export class LogisticService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async shippingCreate(bean: IncomingShipping): Promise<IncomingShipping> {
    return this.#client.web.fetchJson("/logistic/shipping", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shippingDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/logistic/shipping/${id}`, {
      method: "DELETE",
      
    });
  }

  async shippingItemCreate(bean: ShippingItem): Promise<ShippingItem> {
    return this.#client.web.fetchJson("/logistic/shippingItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shippingItemDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/logistic/shippingItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async shippingItemRead(search: any): Promise<ShippingItem[]> {
    return this.#client.web.fetchJson(`/logistic/shippingItem?${search}`, {
      method: "GET",
      
    });
  }

  async shippingItemReadById(id: number): Promise<ShippingItem> {
    return this.#client.web.fetchJson(`/logistic/shippingItem/${id}`, {
      method: "GET",
      
    });
  }

  async shippingItemUpdate(bean: ShippingItem): Promise<ShippingItem> {
    return this.#client.web.fetchJson("/logistic/shippingItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shippingOpApprove(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/logistic/shippingOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async shippingRead(search: any): Promise<IncomingShipping[]> {
    return this.#client.web.fetchJson(`/logistic/shipping?${search}`, {
      method: "GET",
      
    });
  }

  async shippingReadById(id: number): Promise<IncomingShipping> {
    return this.#client.web.fetchJson(`/logistic/shipping/${id}`, {
      method: "GET",
      
    });
  }

  async shippingUpdate(bean: IncomingShipping): Promise<IncomingShipping> {
    return this.#client.web.fetchJson("/logistic/shipping", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
