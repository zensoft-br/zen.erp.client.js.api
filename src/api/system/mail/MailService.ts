export class MailService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async mailerConfigCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/mail/mailerConfig", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async mailerConfigDelete(id) {
		this.#zenClient.web.fetchJson(`/system/mail/mailerConfig/${id}`, {
			method: "DELETE",
			
		});
	}

	async mailerConfigRead(search) {
		return this.#zenClient.web.fetchJson(`/system/mail/mailerConfig?${search}`, {
			method: "GET",
			
		});
	}

	async mailerConfigReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/mail/mailerConfig/${id}`, {
			method: "GET",
			
		});
	}

	async mailerConfigUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/mail/mailerConfig", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async messageOpSend(mailerConfigId, mailerConfigCode, message) {
		return this.#zenClient.web.fetchJson(`/system/mail/messageOpSend?mailerConfigId=${mailerConfigId}&mailerConfigCode=${mailerConfigCode}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(message),

		});
	}

	}
