export class ReportService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async reportCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/report/report", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async reportDelete(id) {
		this.#zenClient.web.fetchJson(`/system/report/report/${id}`, {
			method: "DELETE",
			
		});
	}

	async reportOpClone(id, newCode) {
		return this.#zenClient.web.fetchJson(`/system/report/reportOpClone/${id}?newCode=${newCode}`, {
			method: "POST",
			
		});
	}

	async reportOpGenerate(args) {
		return this.#zenClient.web.fetchJson("/system/report/reportOpGenerate", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async reportOpPrint(args) {
		return this.#zenClient.web.fetchJson("/system/report/reportOpPrint", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async reportRead(search) {
		return this.#zenClient.web.fetchJson(`/system/report/report?${search}`, {
			method: "GET",
			
		});
	}

	async reportReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/report/report/${id}`, {
			method: "GET",
			
		});
	}

	async reportTemplateOpUpdate(id, args) {
		this.#zenClient.web.fetchJson(`/system/report/reportTemplateOpUpdate/${id}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async reportTemplateRead(search) {
		return this.#zenClient.web.fetchJson(`/system/report/reportTemplate?${search}`, {
			method: "GET",
			
		});
	}

	async reportTemplateReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/report/reportTemplate/${id}`, {
			method: "GET",
			
		});
	}

	async reportUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/report/report", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
