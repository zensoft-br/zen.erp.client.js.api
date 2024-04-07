import { Client } from "../../../Client.js";
import { Contract } from "./Contract.js";
import { ContractBilling } from "./ContractBilling.js";
import { ContractFull } from "./ContractFull.js";
import { ContractIndex } from "./ContractIndex.js";
import { ContractItem } from "./ContractItem.js";
import { ContractProfile } from "./ContractProfile.js";
import { OutgoingInvoice } from "../../fiscal/OutgoingInvoice.js";

export class ContractService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async contractBillingOpCreate(contractId: number): Promise<ContractBilling[]> {
    const sp = new URLSearchParams();
    if (contractId) sp.set("contractId", String(contractId));
    return this.#client.web.fetchJson(`/commercial/contract/contractBillingOpCreate?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async contractBillingOpCreateInvoice(ids: any): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson("/commercial/contract/contractBillingOpCreateInvoice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(ids),

    });
  }

  async contractBillingOpCreateRevert(contractId: number): Promise<Contract> {
    const sp = new URLSearchParams();
    if (contractId) sp.set("contractId", String(contractId));
    return this.#client.web.fetchJson(`/commercial/contract/contractBillingOpCreateRevert?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async contractBillingRead(search: any): Promise<ContractBilling[]> {
    return this.#client.web.fetchJson(`/commercial/contract/contractBilling?${search}`, {
      method: "GET",
      
    });
  }

  async contractBillingReadById(id: number): Promise<ContractBilling> {
    return this.#client.web.fetchJson(`/commercial/contract/contractBilling/${id}`, {
      method: "GET",
      
    });
  }

  async contractCreate(bean: Contract): Promise<Contract> {
    return this.#client.web.fetchJson("/commercial/contract/contract", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/commercial/contract/contract/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractIndexCreate(bean: ContractIndex): Promise<ContractIndex> {
    return this.#client.web.fetchJson("/commercial/contract/contractIndex", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractIndexDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/commercial/contract/contractIndex/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractIndexRead(search: any): Promise<ContractIndex[]> {
    return this.#client.web.fetchJson(`/commercial/contract/contractIndex?${search}`, {
      method: "GET",
      
    });
  }

  async contractIndexReadById(id: number): Promise<ContractIndex> {
    return this.#client.web.fetchJson(`/commercial/contract/contractIndex/${id}`, {
      method: "GET",
      
    });
  }

  async contractIndexUpdate(bean: ContractIndex): Promise<ContractIndex> {
    return this.#client.web.fetchJson("/commercial/contract/contractIndex", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractItemCreate(bean: ContractItem): Promise<ContractItem> {
    return this.#client.web.fetchJson("/commercial/contract/contractItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractItemDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/commercial/contract/contractItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractItemRead(search: any): Promise<ContractItem[]> {
    return this.#client.web.fetchJson(`/commercial/contract/contractItem?${search}`, {
      method: "GET",
      
    });
  }

  async contractItemReadById(id: number): Promise<ContractItem> {
    return this.#client.web.fetchJson(`/commercial/contract/contractItem/${id}`, {
      method: "GET",
      
    });
  }

  async contractItemUpdate(bean: ContractItem): Promise<ContractItem> {
    return this.#client.web.fetchJson("/commercial/contract/contractItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractOpAdjust(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contractOpAdjust/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpApprove(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contractOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpApproveRevert(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contractOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpCancel(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contractOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpCancelRevert(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contractOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpCreate(args: any): Promise<any> {
    return this.#client.web.fetchJson("/commercial/contract/contractOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async contractOpPrepare(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contractOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpPrepareRevert(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contractOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractProfileCreate(bean: ContractProfile): Promise<ContractProfile> {
    return this.#client.web.fetchJson("/commercial/contract/contractProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractProfileDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/commercial/contract/contractProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractProfileRead(search: any): Promise<ContractProfile[]> {
    return this.#client.web.fetchJson(`/commercial/contract/contractProfile?${search}`, {
      method: "GET",
      
    });
  }

  async contractProfileReadById(id: number): Promise<ContractProfile> {
    return this.#client.web.fetchJson(`/commercial/contract/contractProfile/${id}`, {
      method: "GET",
      
    });
  }

  async contractProfileUpdate(bean: ContractProfile): Promise<ContractProfile> {
    return this.#client.web.fetchJson("/commercial/contract/contractProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractRead(search: any): Promise<Contract[]> {
    return this.#client.web.fetchJson(`/commercial/contract/contract?${search}`, {
      method: "GET",
      
    });
  }

  async contractReadById(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/commercial/contract/contract/${id}`, {
      method: "GET",
      
    });
  }

  async contractUpdate(bean: Contract): Promise<Contract> {
    return this.#client.web.fetchJson("/commercial/contract/contract", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
