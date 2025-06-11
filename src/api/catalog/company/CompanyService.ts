import { Client } from "../../../Client.js";
import { Company } from "./Company.js";
import { Society } from "./Society.js";

export class CompanyService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async companyCreate(bean: Company): Promise<Company> {
    return this.#client.web.fetchJson("/catalog/company/company", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async companyDelete(id: number): Promise<Company> {
    return this.#client.web.fetchJson(`/catalog/company/company/${id}`, {
      method: "DELETE",
      
    });
  }

  async companyOpGetActive(): Promise<Company> {
    return this.#client.web.fetchJson("/catalog/company/companyOpGetActive", {
      method: "POST",
      
    });
  }

  async companyOpSetActive(id: number): Promise<Company> {
    const sp = new URLSearchParams();
    if (id) sp.set("id", String(id));
    return this.#client.web.fetchJson(`/catalog/company/companyOpSetActive?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async companyRead(search: any): Promise<Company[]> {
    return this.#client.web.fetchJson(`/catalog/company/company?${search}`, {
      method: "GET",
      
    });
  }

  async companyReadById(id: number): Promise<Company> {
    return this.#client.web.fetchJson(`/catalog/company/company/${id}`, {
      method: "GET",
      
    });
  }

  async companyUpdate(bean: Company): Promise<Company> {
    return this.#client.web.fetchJson("/catalog/company/company", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async societyCreate(bean: Society): Promise<Society> {
    return this.#client.web.fetchJson("/catalog/company/society", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async societyDelete(id: number): Promise<Society> {
    return this.#client.web.fetchJson(`/catalog/company/society/${id}`, {
      method: "DELETE",
      
    });
  }

  async societyRead(search: any): Promise<Society[]> {
    return this.#client.web.fetchJson(`/catalog/company/society?${search}`, {
      method: "GET",
      
    });
  }

  async societyReadById(id: number): Promise<Society> {
    return this.#client.web.fetchJson(`/catalog/company/society/${id}`, {
      method: "GET",
      
    });
  }

  async societyUpdate(bean: Society): Promise<Society> {
    return this.#client.web.fetchJson("/catalog/company/society", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
