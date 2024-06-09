import { Client } from "../../Client.js";
import { PriceList } from "./PriceList.js";
import { PriceListChangeRequest } from "./PriceListChangeRequest.js";
import { PriceListTransformation } from "./PriceListTransformation.js";

export class CommercialService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async priceListChangeRequestCreate(bean: PriceListChangeRequest): Promise<PriceListChangeRequest> {
    return this.#client.web.fetchJson("/commercial/priceListChangeRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListChangeRequestDelete(id: number): Promise<PriceListChangeRequest> {
    return this.#client.web.fetchJson(`/commercial/priceListChangeRequest/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListChangeRequestOpApprove(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/commercial/priceListChangeRequestOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async priceListChangeRequestOpReject(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/commercial/priceListChangeRequestOpReject/${id}`, {
      method: "POST",
      
    });
  }

  async priceListChangeRequestRead(search: any): Promise<PriceListChangeRequest[]> {
    return this.#client.web.fetchJson(`/commercial/priceListChangeRequest?${search}`, {
      method: "GET",
      
    });
  }

  async priceListChangeRequestReadById(id: number): Promise<PriceListChangeRequest> {
    return this.#client.web.fetchJson(`/commercial/priceListChangeRequest/${id}`, {
      method: "GET",
      
    });
  }

  async priceListOpFind(id: number, productId: number, productPackingId: number, currencyId: number): Promise<number> {
    const sp = new URLSearchParams();
    if (productId) sp.set("productId", String(productId));
    if (productPackingId) sp.set("productPackingId", String(productPackingId));
    if (currencyId) sp.set("currencyId", String(currencyId));
    return this.#client.web.fetchJson(`/commercial/priceListOpFind/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async priceListOpImport(id: number, args: any): Promise<PriceList> {
    return this.#client.web.fetchJson(`/commercial/priceListOpImport/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async priceListTransformationCreate(bean: PriceListTransformation): Promise<PriceListTransformation> {
    return this.#client.web.fetchJson("/commercial/priceListTransformation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListTransformationDelete(id: number): Promise<PriceListTransformation> {
    return this.#client.web.fetchJson(`/commercial/priceListTransformation/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListTransformationOpCalculate(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/commercial/priceListTransformationOpCalculate/${id}`, {
      method: "POST",
      
    });
  }

  async priceListTransformationRead(search: any): Promise<PriceListTransformation[]> {
    return this.#client.web.fetchJson(`/commercial/priceListTransformation?${search}`, {
      method: "GET",
      
    });
  }

  async priceListTransformationReadById(id: number): Promise<PriceListTransformation> {
    return this.#client.web.fetchJson(`/commercial/priceListTransformation/${id}`, {
      method: "GET",
      
    });
  }

  async priceListTransformationUpdate(bean: PriceListTransformation): Promise<PriceListTransformation> {
    return this.#client.web.fetchJson("/commercial/priceListTransformation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
