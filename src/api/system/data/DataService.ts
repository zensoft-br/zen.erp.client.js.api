import { Client } from "../../../Client.js";
import { ArgsDataSourceOpRead } from "./ArgsDataSourceOpRead.js";
import { DataSource } from "./DataSource.js";
import { DataSourceField } from "./DataSourceField.js";
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
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dataSourceDelete(id: number): Promise<DataSource> {
    return this.#client.web.fetchJson(`/system/data/dataSource/${id}`, {
      method: "DELETE",
      
    });
  }

  async dataSourceFieldRead(search: any): Promise<DataSourceField[]> {
    return this.#client.web.fetchJson(`/system/data/dataSourceField?${search}`, {
      method: "GET",
      
    });
  }

  async dataSourceFieldReadById(id: number): Promise<DataSourceField> {
    return this.#client.web.fetchJson(`/system/data/dataSourceField/${id}`, {
      method: "GET",
      
    });
  }

  async dataSourceFieldUpdate(bean: DataSourceField): Promise<DataSourceField> {
    return this.#client.web.fetchJson("/system/data/dataSourceField", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dataSourceOpRead(args: ArgsDataSourceOpRead): Promise<Map<string,any>[]> {
    return this.#client.web.fetchJson("/system/data/dataSourceOpRead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async dataSourceParameterCreate(bean: DataSourceParameter): Promise<DataSourceParameter> {
    return this.#client.web.fetchJson("/system/data/dataSourceParameter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dataSourceParameterDelete(id: number): Promise<DataSourceParameter> {
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
        accept: "application/json",
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
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
