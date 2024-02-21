export class MaterialReportService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async stockManagementReplenishmentNeeds(companyId, stockManagementId) {
    return this.#zenClient.web.fetchJson(`/material/report/stockManagementReplenishmentNeeds?companyId=${companyId}&stockManagementId=${stockManagementId}`, {
      method: "GET",

    });
  }

}
