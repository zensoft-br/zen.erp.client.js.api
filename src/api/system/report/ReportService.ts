import { Client } from "../../../Client.js";
import { Report } from "./Report.js";
import { ReportTemplate } from "./ReportTemplate.js";
import { ResponseReportOpPrint } from "./ResponseReportOpPrint.js";

export class ReportService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async reportCreate(bean: Report): Promise<Report> {
    return this.#client.web.fetchJson("/system/report/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reportDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/report/report/${id}`, {
      method: "DELETE",
      
    });
  }

  async reportOpClone(id: number, newCode: string): Promise<Report> {
    const sp = new URLSearchParams();
    if (newCode) sp.set("newCode", String(newCode));
    return this.#client.web.fetchJson(`/system/report/reportOpClone/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async reportOpGenerate(args: any): Promise<any> {
    return this.#client.web.fetchJson("/system/report/reportOpGenerate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reportOpPrint(args: any): Promise<any> {
    return this.#client.web.fetchJson("/system/report/reportOpPrint", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reportRead(search: any): Promise<Report[]> {
    return this.#client.web.fetchJson(`/system/report/report?${search}`, {
      method: "GET",
      
    });
  }

  async reportReadById(id: number): Promise<Report> {
    return this.#client.web.fetchJson(`/system/report/report/${id}`, {
      method: "GET",
      
    });
  }

  async reportTemplateOpUpdate(id: number, args: any): Promise<void> {
    this.#client.web.fetchJson(`/system/report/reportTemplateOpUpdate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reportTemplateRead(search: any): Promise<ReportTemplate[]> {
    return this.#client.web.fetchJson(`/system/report/reportTemplate?${search}`, {
      method: "GET",
      
    });
  }

  async reportTemplateReadById(id: number): Promise<ReportTemplate> {
    return this.#client.web.fetchJson(`/system/report/reportTemplate/${id}`, {
      method: "GET",
      
    });
  }

  async reportUpdate(bean: Report): Promise<Report> {
    return this.#client.web.fetchJson("/system/report/report", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
