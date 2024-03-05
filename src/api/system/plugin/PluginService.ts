export class PluginService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async pluginCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/plugin/plugin", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async pluginDelete(id) {
		this.#zenClient.web.fetchJson(`/system/plugin/plugin/${id}`, {
			method: "DELETE",
			
		});
	}

	async pluginRead(search) {
		return this.#zenClient.web.fetchJson(`/system/plugin/plugin?${search}`, {
			method: "GET",
			
		});
	}

	}
