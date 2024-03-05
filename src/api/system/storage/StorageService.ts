export class StorageService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async get(key) {
		return this.#zenClient.web.fetchJson(`/system/storage/?key=${key}`, {
			method: "GET",
			
		});
	}

	async getNumber(key) {
		return this.#zenClient.web.fetchJson(`/system/storage/number?key=${key}`, {
			method: "GET",
			
		});
	}

	async getString(key) {
		return this.#zenClient.web.fetchJson(`/system/storage/string?key=${key}`, {
			method: "GET",
			
		});
	}

	async put(key, value) {
		this.#zenClient.web.fetchJson(`/system/storage/?key=${key}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(value),

		});
	}

	async putNumber(key, value) {
		this.#zenClient.web.fetchJson(`/system/storage/number?key=${key}&value=${value}`, {
			method: "PUT",
			
		});
	}

	async putString(key, value) {
		this.#zenClient.web.fetchJson(`/system/storage/string?key=${key}&value=${value}`, {
			method: "PUT",
			
		});
	}

	async remove(key) {
		this.#zenClient.web.fetchJson(`/system/storage/?key=${key}`, {
			method: "DELETE",
			
		});
	}

	async userGet(key) {
		return this.#zenClient.web.fetchJson(`/system/storage/user?key=${key}`, {
			method: "GET",
			
		});
	}

	async userGetNumber(key) {
		return this.#zenClient.web.fetchJson(`/system/storage/user/number?key=${key}`, {
			method: "GET",
			
		});
	}

	async userGetString(key) {
		return this.#zenClient.web.fetchJson(`/system/storage/user/string?key=${key}`, {
			method: "GET",
			
		});
	}

	async userPut(key, value) {
		this.#zenClient.web.fetchJson(`/system/storage/user?key=${key}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(value),

		});
	}

	async userPutNumber(key, value) {
		this.#zenClient.web.fetchJson(`/system/storage/user/number?key=${key}&value=${value}`, {
			method: "PUT",
			
		});
	}

	async userPutString(key, value) {
		this.#zenClient.web.fetchJson(`/system/storage/user/string?key=${key}&value=${value}`, {
			method: "PUT",
			
		});
	}

	async userRemove(key) {
		this.#zenClient.web.fetchJson(`/system/storage/user?key=${key}`, {
			method: "DELETE",
			
		});
	}

	}
