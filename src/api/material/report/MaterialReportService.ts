import { Client } from "../../../Client.js";
import { StockManagementReplenishmentNeeds } from "./StockManagementReplenishmentNeeds.js";
import { StockOutflowSummary } from "./StockOutflowSummary.js";

export class MaterialReportService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async stockManagementReplenishmentNeeds(companyId: number, stockManagementId: number): Promise<StockManagementReplenishmentNeeds[]> {
    const sp = new URLSearchParams();
    if (companyId) sp.set("companyId", String(companyId));
    if (stockManagementId) sp.set("stockManagementId", String(stockManagementId));
    return this.#client.web.fetchJson(`/material/report/stockManagementReplenishmentNeeds?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async stockOutflowSummary(dateStart: Date, dateEnd: Date, search: any): Promise<StockOutflowSummary[]> {
    const sp = new URLSearchParams();
    if (dateStart) sp.set("dateStart", String(dateStart));
    if (dateEnd) sp.set("dateEnd", String(dateEnd));
    return this.#client.web.fetchJson(`/material/report/stockOutflowSummary?${search}?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  }
