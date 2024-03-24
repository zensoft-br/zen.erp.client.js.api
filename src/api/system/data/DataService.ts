import { Client } from "../../../Client.js";
import { DataSource } from "./DataSource.js";
import { DataSourceParameter } from "./DataSourceParameter.js";

export class DataService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async dataSourceCreate(bean: DataSource): Promise<DataSource> {
    return this.#client.web.fetchJson("/system/data/dataSource", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dataSourceDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/data/dataSource/${id}`, {
      method: "DELETE",
      
    });
  }

  async dataSourceOpRead(args: any): Promise<string[]> {
    return this.#client.web.fetchJson("/system/data/dataSourceOpRead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dataSourceParameterCreate(bean: DataSourceParameter): Promise<DataSourceParameter> {
    return this.#client.web.fetchJson("/system/data/dataSourceParameter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dataSourceParameterDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/data/dataSourceParameter/${id}`, {
      method: "DELETE",
      
    });
  }

  async dataSourceParameterRead(search: any): Promise<DataSourceParameter[]> {
    return this.#client.web.fetchJson(`/system/data/dataSourceParameter?${search}`, {
      method: "GET",
      
    });
  }

  async dataSourceParameterReadById(id: number): Promise<DataSourceParameter> {
    return this.#client.web.fetchJson(`/system/data/dataSourceParameter/${id}`, {
      method: "GET",
      
    });
  }

  async dataSourceParameterUpdate(bean: DataSourceParameter): Promise<DataSourceParameter> {
    return this.#client.web.fetchJson("/system/data/dataSourceParameter", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dataSourceRead(search: any): Promise<DataSource[]> {
    return this.#client.web.fetchJson(`/system/data/dataSource?${search}`, {
      method: "GET",
      
    });
  }

  async dataSourceReadById(id: number): Promise<DataSource> {
    return this.#client.web.fetchJson(`/system/data/dataSource/${id}`, {
      method: "GET",
      
    });
  }

  async dataSourceUpdate(bean: DataSource): Promise<DataSource> {
    return this.#client.web.fetchJson("/system/data/dataSource", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
