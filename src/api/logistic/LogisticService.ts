export class LogisticService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async shippingCreate(bean) {
		return this.#zenClient.web.fetchJson("/logistic/shipping", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async shippingDelete(id) {
		this.#zenClient.web.fetchJson(`/logistic/shipping/${id}`, {
			method: "DELETE",
			
		});
	}

	async shippingItemCreate(bean) {
		return this.#zenClient.web.fetchJson("/logistic/shippingItem", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async shippingItemDelete(id) {
		this.#zenClient.web.fetchJson(`/logistic/shippingItem/${id}`, {
			method: "DELETE",
			
		});
	}

	async shippingItemRead(search) {
		return this.#zenClient.web.fetchJson(`/logistic/shippingItem?${search}`, {
			method: "GET",
			
		});
	}

	async shippingItemReadById(id) {
		return this.#zenClient.web.fetchJson(`/logistic/shippingItem/${id}`, {
			method: "GET",
			
		});
	}

	async shippingItemUpdate(bean) {
		return this.#zenClient.web.fetchJson("/logistic/shippingItem", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async shippingOpApprove(id) {
		this.#zenClient.web.fetchJson(`/logistic/shippingOpApprove/${id}`, {
			method: "POST",
			
		});
	}

	async shippingRead(search) {
		return this.#zenClient.web.fetchJson(`/logistic/shipping?${search}`, {
			method: "GET",
			
		});
	}

	async shippingReadById(id) {
		return this.#zenClient.web.fetchJson(`/logistic/shipping/${id}`, {
			method: "GET",
			
		});
	}

	async shippingUpdate(bean) {
		return this.#zenClient.web.fetchJson("/logistic/shipping", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
