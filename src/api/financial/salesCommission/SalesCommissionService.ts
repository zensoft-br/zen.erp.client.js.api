import { Client } from "../../../Client.js";
import { ArgsSalesCommissionOpCalculate } from "./ArgsSalesCommissionOpCalculate.js";
import { SalesCommission } from "./SalesCommission.js";

export class SalesCommissionService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async salesCommissionCreate(bean: SalesCommission): Promise<SalesCommission> {
    return this.#client.web.fetchJson("/financial/salesCommission/salesCommission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salesCommissionDelete(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommission/${id}`, {
      method: "DELETE",
      
    });
  }

  async salesCommissionOpApprove(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommissionOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async salesCommissionOpApproveRevert(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommissionOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async salesCommissionOpCalculate(args: ArgsSalesCommissionOpCalculate): Promise<void> {
    return this.#client.web.fetchJson("/financial/salesCommission/salesCommissionOpCalculate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async salesCommissionOpCalculateRevert(args: ArgsSalesCommissionOpCalculate): Promise<void> {
    return this.#client.web.fetchJson("/financial/salesCommission/salesCommissionOpCalculateRevert", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async salesCommissionOpPrepare(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommissionOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async salesCommissionOpPrepareRevert(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommissionOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async salesCommissionOpPublish(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommissionOpPublish/${id}`, {
      method: "POST",
      
    });
  }

  async salesCommissionOpPublishRevert(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommissionOpPublishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async salesCommissionRead(search: any): Promise<SalesCommission[]> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommission?${search}`, {
      method: "GET",
      
    });
  }

  async salesCommissionReadById(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/financial/salesCommission/salesCommission/${id}`, {
      method: "GET",
      
    });
  }

  async salesCommissionUpdate(bean: SalesCommission): Promise<SalesCommission> {
    return this.#client.web.fetchJson("/financial/salesCommission/salesCommission", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
