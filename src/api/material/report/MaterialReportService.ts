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

	async stockOutflowSummary(dateStart, dateEnd, search) {
		return this.#zenClient.web.fetchJson(`/material/report/stockOutflowSummary?${search}?dateStart=${dateStart}&dateEnd=${dateEnd}`, {
			method: "GET",
			
		});
	}

	}
