import { Client } from "../../../Client.js";
import { Dfe } from "./Dfe.js";
import { DfeNfeProcIn } from "./DfeNfeProcIn.js";
import { DfeNfeProcOut } from "./DfeNfeProcOut.js";
import { DfeProcEventoNFeIn } from "./DfeProcEventoNFeIn.js";
import { DfeProcEventoNFeOut } from "./DfeProcEventoNFeOut.js";
import { DfeProcInutNFe } from "./DfeProcInutNFe.js";
import { DfeResEvento } from "./DfeResEvento.js";
import { DfeResNFeIn } from "./DfeResNFeIn.js";
import { IncomingInvoice } from "../IncomingInvoice.js";
import { OutgoingInvoice } from "../OutgoingInvoice.js";

export class FiscalBrService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async dfeNfeProcInCreate(args: any): Promise<DfeNfeProcIn> {
    return this.#client.web.fetchJson("/fiscal/br/dfeNfeProcIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeNfeProcInDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcIn/${id}`, {
      method: "DELETE",
      
    });
  }

  async dfeNfeProcInOpIncomingInvoiceCreate(id: number, args: any): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeNfeProcInOpIncomingInvoiceCreateRevert(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert/${id}`, {
      method: "POST",
      
    });
  }

  async dfeNfeProcInRead(search: any): Promise<DfeNfeProcIn[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcIn?${search}`, {
      method: "GET",
      
    });
  }

  async dfeNfeProcInReadById(id: number): Promise<DfeNfeProcIn> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcIn/${id}`, {
      method: "GET",
      
    });
  }

  async dfeNfeProcOutDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOut/${id}`, {
      method: "DELETE",
      
    });
  }

  async dfeNfeProcOutOpCancel(id: number, args: any): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpConfirm(id: number): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpConfirm/${id}`, {
      method: "POST",
      
    });
  }

  async dfeNfeProcOutOpCorrect(id: number, args: any): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpCorrect/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpCreate(invoiceId: number): Promise<DfeNfeProcOut> {
    const sp = new URLSearchParams();
    if (invoiceId) sp.set("invoiceId", String(invoiceId));
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpCreate?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async dfeNfeProcOutOpDownload(args: any): Promise<any> {
    return this.#client.web.fetchBlob("/fiscal/br/dfeNfeProcOutOpDownload", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpOutgoingInvoiceCreate(id: number, args: any): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpSign(id: number): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpSign/${id}`, {
      method: "POST",
      
    });
  }

  async dfeNfeProcOutOpSignRevert(id: number): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpSignRevert/${id}`, {
      method: "POST",
      
    });
  }

  async dfeNfeProcOutOpTransmit(id: number): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpTransmit/${id}`, {
      method: "POST",
      
    });
  }

  async dfeNfeProcOutOpUpload(args: any): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson("/fiscal/br/dfeNfeProcOutOpUpload", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutRead(search: any): Promise<DfeNfeProcOut[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOut?${search}`, {
      method: "GET",
      
    });
  }

  async dfeNfeProcOutReadById(id: number): Promise<DfeNfeProcOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeNfeProcOut/${id}`, {
      method: "GET",
      
    });
  }

  async dfeOpReadContent(id: number): Promise<any> {
    return this.#client.web.fetchBlob(`/fiscal/br/dfeOpReadContent/${id}`, {
      method: "POST",
      
    });
  }

  async dfeProcEventoNFeInRead(search: any): Promise<DfeProcEventoNFeIn[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeProcEventoNFeIn?${search}`, {
      method: "GET",
      
    });
  }

  async dfeProcEventoNFeInReadById(id: number): Promise<DfeProcEventoNFeIn> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeProcEventoNFeIn/${id}`, {
      method: "GET",
      
    });
  }

  async dfeProcEventoNFeOutRead(search: any): Promise<DfeProcEventoNFeOut[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeProcEventoNFeOut?${search}`, {
      method: "GET",
      
    });
  }

  async dfeProcEventoNFeOutReadById(id: number): Promise<DfeProcEventoNFeOut> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeProcEventoNFeOut/${id}`, {
      method: "GET",
      
    });
  }

  async dfeProcInutNFeCreate(args: any): Promise<DfeProcInutNFe> {
    return this.#client.web.fetchJson("/fiscal/br/dfeProcInutNFe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dfeProcInutNFeRead(search: any): Promise<DfeProcInutNFe[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeProcInutNFe?${search}`, {
      method: "GET",
      
    });
  }

  async dfeProcInutNFeReadById(id: number): Promise<DfeProcInutNFe> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeProcInutNFe/${id}`, {
      method: "GET",
      
    });
  }

  async dfeRead(search: any): Promise<Dfe[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfe?${search}`, {
      method: "GET",
      
    });
  }

  async dfeReadById(id: number): Promise<Dfe> {
    return this.#client.web.fetchJson(`/fiscal/br/dfe/${id}`, {
      method: "GET",
      
    });
  }

  async dfeResEventoRead(search: any): Promise<DfeResEvento[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeResEvento?${search}`, {
      method: "GET",
      
    });
  }

  async dfeResEventoReadById(id: number): Promise<DfeResEvento> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeResEvento/${id}`, {
      method: "GET",
      
    });
  }

  async dfeResNFeInOpManifest(id: number, status: string): Promise<void> {
    const sp = new URLSearchParams();
    if (status) sp.set("status", String(status));
    return this.#client.web.fetchJson(`/fiscal/br/dfeResNFeInOpManifest/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async dfeResNFeInRead(search: any): Promise<DfeResNFeIn[]> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeResNFeIn?${search}`, {
      method: "GET",
      
    });
  }

  async dfeResNFeInReadById(id: number): Promise<DfeResNFeIn> {
    return this.#client.web.fetchJson(`/fiscal/br/dfeResNFeIn/${id}`, {
      method: "GET",
      
    });
  }

  async documentSefazOpFetch(args: any): Promise<void> {
    return this.#client.web.fetchJson("/fiscal/br/documentSefazOpFetch", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async spedOpExport(args: any): Promise<any> {
    return this.#client.web.fetchBlob("/fiscal/br/spedOpExport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  }
