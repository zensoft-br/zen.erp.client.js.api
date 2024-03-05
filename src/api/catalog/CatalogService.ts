export class CatalogService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async categoryCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/category", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async categoryDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/category/${id}`, {
			method: "DELETE",
			
		});
	}

	async categoryRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/category?${search}`, {
			method: "GET",
			
		});
	}

	async categoryReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/category/${id}`, {
			method: "GET",
			
		});
	}

	async categoryUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/category", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
