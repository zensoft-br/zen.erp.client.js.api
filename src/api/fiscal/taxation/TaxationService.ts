import { Client } from "../../../Client.js";
import { Tax } from "./Tax.js";
import { Taxation } from "./Taxation.js";
import { TaxationOperation } from "./TaxationOperation.js";
import { TaxationRule } from "./TaxationRule.js";

export class TaxationService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async taxCreate(bean: Tax): Promise<Tax> {
    return this.#client.web.fetchJson("/fiscal/taxation/tax", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async taxDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/taxation/tax/${id}`, {
      method: "DELETE",
      
    });
  }

  async taxOpReadByCode(fiscalRegionCode: string, code: string): Promise<Tax> {
    const sp = new URLSearchParams();
    if (fiscalRegionCode) sp.set("fiscalRegionCode", String(fiscalRegionCode));
    if (code) sp.set("code", String(code));
    return this.#client.web.fetchJson(`/fiscal/taxation/taxOpReadByCode?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async taxRead(search: any): Promise<Tax[]> {
    return this.#client.web.fetchJson(`/fiscal/taxation/tax?${search}`, {
      method: "GET",
      
    });
  }

  async taxReadById(id: number): Promise<Tax> {
    return this.#client.web.fetchJson(`/fiscal/taxation/tax/${id}`, {
      method: "GET",
      
    });
  }

  async taxUpdate(bean: Tax): Promise<Tax> {
    return this.#client.web.fetchJson("/fiscal/taxation/tax", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async taxationCreate(bean: Taxation): Promise<Taxation> {
    return this.#client.web.fetchJson("/fiscal/taxation/taxation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async taxationDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxation/${id}`, {
      method: "DELETE",
      
    });
  }

  async taxationOperationCreate(bean: TaxationOperation): Promise<TaxationOperation> {
    return this.#client.web.fetchJson("/fiscal/taxation/taxationOperation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async taxationOperationDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxationOperation/${id}`, {
      method: "DELETE",
      
    });
  }

  async taxationOperationOpReadByCode(fiscalRegionCode: string, code: string): Promise<TaxationOperation> {
    const sp = new URLSearchParams();
    if (fiscalRegionCode) sp.set("fiscalRegionCode", String(fiscalRegionCode));
    if (code) sp.set("code", String(code));
    return this.#client.web.fetchJson(`/fiscal/taxation/taxationOperationOpReadByCode?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async taxationOperationRead(search: any): Promise<TaxationOperation[]> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxationOperation?${search}`, {
      method: "GET",
      
    });
  }

  async taxationOperationReadById(id: number): Promise<TaxationOperation> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxationOperation/${id}`, {
      method: "GET",
      
    });
  }

  async taxationOperationUpdate(bean: TaxationOperation): Promise<TaxationOperation> {
    return this.#client.web.fetchJson("/fiscal/taxation/taxationOperation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async taxationRead(search: any): Promise<Taxation[]> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxation?${search}`, {
      method: "GET",
      
    });
  }

  async taxationReadById(id: number): Promise<Taxation> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxation/${id}`, {
      method: "GET",
      
    });
  }

  async taxationRuleCreate(bean: TaxationRule): Promise<TaxationRule> {
    return this.#client.web.fetchJson("/fiscal/taxation/taxationRule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async taxationRuleDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxationRule/${id}`, {
      method: "DELETE",
      
    });
  }

  async taxationRuleRead(search: any): Promise<TaxationRule[]> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxationRule?${search}`, {
      method: "GET",
      
    });
  }

  async taxationRuleReadById(id: number): Promise<TaxationRule> {
    return this.#client.web.fetchJson(`/fiscal/taxation/taxationRule/${id}`, {
      method: "GET",
      
    });
  }

  async taxationRuleUpdate(bean: TaxationRule): Promise<TaxationRule> {
    return this.#client.web.fetchJson("/fiscal/taxation/taxationRule", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async taxationUpdate(bean: Taxation): Promise<Taxation> {
    return this.#client.web.fetchJson("/fiscal/taxation/taxation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
