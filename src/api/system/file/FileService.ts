export class FileService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async fileCreate(args) {
		return this.#zenClient.web.fetchJson("/system/file/file", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async fileDelete(id) {
		this.#zenClient.web.fetchJson(`/system/file/file/${id}`, {
			method: "DELETE",
			
		});
	}

	async fileOpReadContent(id) {
		return this.#zenClient.web.fetchJson(`/system/file/fileOpReadContent/${id}`, {
			method: "POST",
			
		});
	}

	async fileRead(search) {
		return this.#zenClient.web.fetchJson(`/system/file/file?${search}`, {
			method: "GET",
			
		});
	}

	async fileReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/file/file/${id}`, {
			method: "GET",
			
		});
	}

	async fileUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/file/file", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
