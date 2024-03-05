export class DataService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async dataSourceCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/data/dataSource", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async dataSourceDelete(id) {
		this.#zenClient.web.fetchJson(`/system/data/dataSource/${id}`, {
			method: "DELETE",
			
		});
	}

	async dataSourceOpRead(args) {
		return this.#zenClient.web.fetchJson("/system/data/dataSourceOpRead", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async dataSourceParameterCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/data/dataSourceParameter", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async dataSourceParameterDelete(id) {
		this.#zenClient.web.fetchJson(`/system/data/dataSourceParameter/${id}`, {
			method: "DELETE",
			
		});
	}

	async dataSourceParameterRead(search) {
		return this.#zenClient.web.fetchJson(`/system/data/dataSourceParameter?${search}`, {
			method: "GET",
			
		});
	}

	async dataSourceParameterReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/data/dataSourceParameter/${id}`, {
			method: "GET",
			
		});
	}

	async dataSourceParameterUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/data/dataSourceParameter", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async dataSourceRead(search) {
		return this.#zenClient.web.fetchJson(`/system/data/dataSource?${search}`, {
			method: "GET",
			
		});
	}

	async dataSourceReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/data/dataSource/${id}`, {
			method: "GET",
			
		});
	}

	async dataSourceUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/data/dataSource", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
