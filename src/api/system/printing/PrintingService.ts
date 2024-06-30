import { Client } from "../../../Client.js";
import { ArgsPrinterJobCreate } from "./ArgsPrinterJobCreate.js";
import { Printer } from "./Printer.js";
import { PrinterJob } from "./PrinterJob.js";
import { PrinterJobData } from "./PrinterJobData.js";

export class PrintingService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async printerCreate(bean: Printer): Promise<Printer> {
    return this.#client.web.fetchJson("/system/printing/printer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async printerDelete(id: number): Promise<Printer> {
    return this.#client.web.fetchJson(`/system/printing/printer/${id}`, {
      method: "DELETE",
      
    });
  }

  async printerJobCreate(args: ArgsPrinterJobCreate): Promise<PrinterJob> {
    return this.#client.web.fetchJson("/system/printing/printerJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async printerJobDataReadById(id: number): Promise<PrinterJobData> {
    return this.#client.web.fetchJson(`/system/printing/printerJobData/${id}`, {
      method: "GET",
      
    });
  }

  async printerJobDelete(id: number): Promise<PrinterJob> {
    return this.#client.web.fetchJson(`/system/printing/printerJob/${id}`, {
      method: "DELETE",
      
    });
  }

  async printerJobOpFetch(id: number): Promise<PrinterJobData> {
    return this.#client.web.fetchJson(`/system/printing/printerJobOpFetch/${id}`, {
      method: "POST",
      
    });
  }

  async printerJobOpPrinted(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/printing/printerJobOpPrinted/${id}`, {
      method: "POST",
      
    });
  }

  async printerJobOpUnlock(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/printing/printerJobOpUnlock/${id}`, {
      method: "POST",
      
    });
  }

  async printerJobRead(search: any): Promise<PrinterJob[]> {
    return this.#client.web.fetchJson(`/system/printing/printerJob?${search}`, {
      method: "GET",
      
    });
  }

  async printerJobReadById(id: number): Promise<PrinterJob> {
    return this.#client.web.fetchJson(`/system/printing/printerJob/${id}`, {
      method: "GET",
      
    });
  }

  async printerOpPause(id: number): Promise<Printer> {
    return this.#client.web.fetchJson(`/system/printing/printerOpPause/${id}`, {
      method: "POST",
      
    });
  }

  async printerOpPauseRevert(id: number): Promise<Printer> {
    return this.#client.web.fetchJson(`/system/printing/printerOpPauseRevert/${id}`, {
      method: "POST",
      
    });
  }

  async printerOpPrintTestPage(id: number): Promise<PrinterJob> {
    return this.#client.web.fetchJson(`/system/printing/printerOpPrintTestPage/${id}`, {
      method: "POST",
      
    });
  }

  async printerOpPrinterJobFetch(id: number): Promise<PrinterJobData> {
    return this.#client.web.fetchJson(`/system/printing/printerOpPrinterJobFetch/${id}`, {
      method: "POST",
      
    });
  }

  async printerRead(search: any): Promise<Printer[]> {
    return this.#client.web.fetchJson(`/system/printing/printer?${search}`, {
      method: "GET",
      
    });
  }

  async printerReadById(id: number): Promise<Printer> {
    return this.#client.web.fetchJson(`/system/printing/printer/${id}`, {
      method: "GET",
      
    });
  }

  async printerUpdate(bean: Printer): Promise<Printer> {
    return this.#client.web.fetchJson("/system/printing/printer", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
