export class LocationService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async cityCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/location/city", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async cityDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/location/city/${id}`, {
			method: "DELETE",
			
		});
	}

	async cityOpFind(args) {
		return this.#zenClient.web.fetchJson("/catalog/location/cityOpFind", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async cityRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/location/city?${search}`, {
			method: "GET",
			
		});
	}

	async cityReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/location/city/${id}`, {
			method: "GET",
			
		});
	}

	async cityUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/location/city", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async countryCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/location/country", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async countryDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/location/country/${id}`, {
			method: "DELETE",
			
		});
	}

	async countryRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/location/country?${search}`, {
			method: "GET",
			
		});
	}

	async countryReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/location/country/${id}`, {
			method: "GET",
			
		});
	}

	async countryUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/location/country", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async geocodeRead(address) {
		return this.#zenClient.web.fetchJson(`/catalog/location/geocode?address=${address}`, {
			method: "GET",
			
		});
	}

	async stateCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/location/state", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async stateDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/location/state/${id}`, {
			method: "DELETE",
			
		});
	}

	async stateRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/location/state?${search}`, {
			method: "GET",
			
		});
	}

	async stateReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/location/state/${id}`, {
			method: "GET",
			
		});
	}

	async stateUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/location/state", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async zipcodeRead(country, zipcode) {
		return this.#zenClient.web.fetchJson(`/catalog/location/zipcode?country=${country}&zipcode=${zipcode}`, {
			method: "GET",
			
		});
	}

	}
