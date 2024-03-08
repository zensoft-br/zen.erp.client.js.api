import { Client } from "../../Client.js";
import { Shipment } from "./Shipment.js";

export class ShippingService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async shipmentCreate(bean: Shipment): Promise<Shipment> {
    return this.#client.web.fetchJson("/shipping/shipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shipmentDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/shipping/shipment/${id}`, {
      method: "DELETE",
      
    });
  }

  async shipmentOpApprove(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpApproveRevert(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpFinish(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpFinishRevert(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpLoadIgnore(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpLoadIgnore/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpLoadStart(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpLoadStart/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpLoadStartRevert(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpLoadStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpLoadVolume(id: number, volumeId: number): Promise<Shipment> {
    const sp = new URLSearchParams();
    if (volumeId) sp.set("volumeId", String(volumeId));
    return this.#client.web.fetchJson(`/shipping/shipmentOpLoadVolume/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async shipmentOpOutgoingInvoiceBind(id: number, outgoingInvoiceId: number): Promise<Shipment> {
    const sp = new URLSearchParams();
    if (outgoingInvoiceId) sp.set("outgoingInvoiceId", String(outgoingInvoiceId));
    return this.#client.web.fetchJson(`/shipping/shipmentOpOutgoingInvoiceBind/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async shipmentOpOutgoingInvoiceBindRevert(id: number, outgoingInvoiceId: number): Promise<Shipment> {
    const sp = new URLSearchParams();
    if (outgoingInvoiceId) sp.set("outgoingInvoiceId", String(outgoingInvoiceId));
    return this.#client.web.fetchJson(`/shipping/shipmentOpOutgoingInvoiceBindRevert/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async shipmentOpPrepare(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpPrepareRevert(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipmentOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentRead(search: any): Promise<Shipment[]> {
    return this.#client.web.fetchJson(`/shipping/shipment?${search}`, {
      method: "GET",
      
    });
  }

  async shipmentReadById(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/shipping/shipment/${id}`, {
      method: "GET",
      
    });
  }

  async shipmentUpdate(bean: Shipment): Promise<Shipment> {
    return this.#client.web.fetchJson("/shipping/shipment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
