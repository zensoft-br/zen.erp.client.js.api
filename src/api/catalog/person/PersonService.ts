export class PersonService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async personAddressCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personAddress", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personAddressDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/person/personAddress/${id}`, {
			method: "DELETE",
			
		});
	}

	async personAddressOpSetDefault(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personAddressOpSetDefault/${id}`, {
			method: "POST",
			
		});
	}

	async personAddressRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personAddress?${search}`, {
			method: "GET",
			
		});
	}

	async personAddressReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personAddress/${id}`, {
			method: "GET",
			
		});
	}

	async personAddressUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personAddress", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personBasicRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personBasic?${search}`, {
			method: "GET",
			
		});
	}

	async personBasicReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personBasic/${id}`, {
			method: "GET",
			
		});
	}

	async personCommentCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personComment", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personCommentDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/person/personComment/${id}`, {
			method: "DELETE",
			
		});
	}

	async personCommentRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personComment?${search}`, {
			method: "GET",
			
		});
	}

	async personCommentReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personComment/${id}`, {
			method: "GET",
			
		});
	}

	async personCommentUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personComment", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personContactCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personContact", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personContactDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/person/personContact/${id}`, {
			method: "DELETE",
			
		});
	}

	async personContactRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personContact?${search}`, {
			method: "GET",
			
		});
	}

	async personContactReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personContact/${id}`, {
			method: "GET",
			
		});
	}

	async personContactUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personContact", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/person", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/person/person/${id}`, {
			method: "DELETE",
			
		});
	}

	async personDocumentCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personDocument", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personDocumentDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/person/personDocument/${id}`, {
			method: "DELETE",
			
		});
	}

	async personDocumentRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personDocument?${search}`, {
			method: "GET",
			
		});
	}

	async personDocumentReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personDocument/${id}`, {
			method: "GET",
			
		});
	}

	async personDocumentUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personDocument", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personGroupCreate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personGroup", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personGroupDelete(id) {
		this.#zenClient.web.fetchJson(`/catalog/person/personGroup/${id}`, {
			method: "DELETE",
			
		});
	}

	async personGroupRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personGroup?${search}`, {
			method: "GET",
			
		});
	}

	async personGroupReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personGroup/${id}`, {
			method: "GET",
			
		});
	}

	async personGroupUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/personGroup", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async personOpReadFromPersonDirectory(documentType, documentNumber) {
		return this.#zenClient.web.fetchJson(`/catalog/person/personOpReadFromPersonDirectory?documentType=${documentType}&documentNumber=${documentNumber}`, {
			method: "POST",
			
		});
	}

	async personRead(search) {
		return this.#zenClient.web.fetchJson(`/catalog/person/person?${search}`, {
			method: "GET",
			
		});
	}

	async personReadById(id) {
		return this.#zenClient.web.fetchJson(`/catalog/person/person/${id}`, {
			method: "GET",
			
		});
	}

	async personUpdate(bean) {
		return this.#zenClient.web.fetchJson("/catalog/person/person", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
