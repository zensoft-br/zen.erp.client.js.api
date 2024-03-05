export class TreasuryService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async accountStatementCreate(bean) {
		return this.#zenClient.web.fetchJson("/financial/treasury/accountStatement", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async accountStatementDelete(id) {
		this.#zenClient.web.fetchJson(`/financial/treasury/accountStatement/${id}`, {
			method: "DELETE",
			
		});
	}

	async accountStatementOpConsolidate(id, args) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpConsolidate/${id}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async accountStatementOpConsolidateRevert(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpConsolidateRevert/${id}`, {
			method: "POST",
			
		});
	}

	async accountStatementOpIdentify(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpIdentify/${id}`, {
			method: "POST",
			
		});
	}

	async accountStatementOpIdentifyRevert(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpIdentifyRevert/${id}`, {
			method: "POST",
			
		});
	}

	async accountStatementOpIgnore(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpIgnore/${id}`, {
			method: "POST",
			
		});
	}

	async accountStatementOpIgnoreRevert(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpIgnoreRevert/${id}`, {
			method: "POST",
			
		});
	}

	async accountStatementOpSettle(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpSettle/${id}`, {
			method: "POST",
			
		});
	}

	async accountStatementOpSettleRevert(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatementOpSettleRevert/${id}`, {
			method: "POST",
			
		});
	}

	async accountStatementRead(search) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatement?${search}`, {
			method: "GET",
			
		});
	}

	async accountStatementReadById(id) {
		return this.#zenClient.web.fetchJson(`/financial/treasury/accountStatement/${id}`, {
			method: "GET",
			
		});
	}

	async accountStatementUpdate(bean) {
		return this.#zenClient.web.fetchJson("/financial/treasury/accountStatement", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async expenseOpCreate(args) {
		return this.#zenClient.web.fetchJson("/financial/treasury/expenseOpCreate", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async revenueOpCreate(args) {
		return this.#zenClient.web.fetchJson("/financial/treasury/revenueOpCreate", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	}
