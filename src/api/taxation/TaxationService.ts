export class TaxationService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async taxCreate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/tax", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async taxDelete(id) {
		this.#zenClient.web.fetchJson(`/taxation/tax/${id}`, {
			method: "DELETE",
			
		});
	}

	async taxOpReadByCode(fiscalRegionCode, code) {
		return this.#zenClient.web.fetchJson(`/taxation/taxOpReadByCode?fiscalRegionCode=${fiscalRegionCode}&code=${code}`, {
			method: "POST",
			
		});
	}

	async taxRead(search) {
		return this.#zenClient.web.fetchJson(`/taxation/tax?${search}`, {
			method: "GET",
			
		});
	}

	async taxReadById(id) {
		return this.#zenClient.web.fetchJson(`/taxation/tax/${id}`, {
			method: "GET",
			
		});
	}

	async taxUpdate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/tax", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async taxationCreate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/taxation", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async taxationDelete(id) {
		this.#zenClient.web.fetchJson(`/taxation/taxation/${id}`, {
			method: "DELETE",
			
		});
	}

	async taxationOperationCreate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/taxationOperation", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async taxationOperationDelete(id) {
		this.#zenClient.web.fetchJson(`/taxation/taxationOperation/${id}`, {
			method: "DELETE",
			
		});
	}

	async taxationOperationOpReadByCode(fiscalRegionCode, code) {
		return this.#zenClient.web.fetchJson(`/taxation/taxationOperationOpReadByCode?fiscalRegionCode=${fiscalRegionCode}&code=${code}`, {
			method: "POST",
			
		});
	}

	async taxationOperationRead(search) {
		return this.#zenClient.web.fetchJson(`/taxation/taxationOperation?${search}`, {
			method: "GET",
			
		});
	}

	async taxationOperationReadById(id) {
		return this.#zenClient.web.fetchJson(`/taxation/taxationOperation/${id}`, {
			method: "GET",
			
		});
	}

	async taxationOperationUpdate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/taxationOperation", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async taxationRead(search) {
		return this.#zenClient.web.fetchJson(`/taxation/taxation?${search}`, {
			method: "GET",
			
		});
	}

	async taxationReadById(id) {
		return this.#zenClient.web.fetchJson(`/taxation/taxation/${id}`, {
			method: "GET",
			
		});
	}

	async taxationRuleCreate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/taxationRule", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async taxationRuleDelete(id) {
		this.#zenClient.web.fetchJson(`/taxation/taxationRule/${id}`, {
			method: "DELETE",
			
		});
	}

	async taxationRuleRead(search) {
		return this.#zenClient.web.fetchJson(`/taxation/taxationRule?${search}`, {
			method: "GET",
			
		});
	}

	async taxationRuleReadById(id) {
		return this.#zenClient.web.fetchJson(`/taxation/taxationRule/${id}`, {
			method: "GET",
			
		});
	}

	async taxationRuleUpdate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/taxationRule", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async taxationUpdate(bean) {
		return this.#zenClient.web.fetchJson("/taxation/taxation", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
