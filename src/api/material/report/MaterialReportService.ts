export class MaterialReportService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async stockManagementReplenishmentNeeds(companyId, stockManagementId) {
    const sp = new URLSearchParams();
    if (companyId) sp.set("companyId", companyId);
    if (stockManagementId) sp.set("stockManagementId", stockManagementId);
    return this.#zenClient.web.fetchJson(`/material/report/stockManagementReplenishmentNeeds?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async stockOutflowSummary(dateStart, dateEnd, search) {
    const sp = new URLSearchParams();
    if (dateStart) sp.set("dateStart", dateStart);
    if (dateEnd) sp.set("dateEnd", dateEnd);
    return this.#zenClient.web.fetchJson(`/material/report/stockOutflowSummary?${search}?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  }
