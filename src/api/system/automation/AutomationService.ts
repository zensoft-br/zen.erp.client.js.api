export class AutomationService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async agentCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/agent", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async agentDelete(id) {
		this.#zenClient.web.fetchJson(`/system/automation/agent/${id}`, {
			method: "DELETE",
			
		});
	}

	async agentOpGetParameters(id) {
		return this.#zenClient.web.fetchJson(`/system/automation/agentOpGetParameters/${id}`, {
			method: "POST",
			
		});
	}

	async agentOpGetTopics(id) {
		return this.#zenClient.web.fetchJson(`/system/automation/agentOpGetTopics/${id}`, {
			method: "POST",
			
		});
	}

	async agentRead(search) {
		return this.#zenClient.web.fetchJson(`/system/automation/agent?${search}`, {
			method: "GET",
			
		});
	}

	async agentReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/automation/agent/${id}`, {
			method: "GET",
			
		});
	}

	async agentRunCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/agentRun", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async agentRunDelete(id) {
		this.#zenClient.web.fetchJson(`/system/automation/agentRun/${id}`, {
			method: "DELETE",
			
		});
	}

	async agentRunOpExecute(id, parameters) {
		this.#zenClient.web.fetchJson(`/system/automation/agentRunOpExecute/${id}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(parameters),

		});
	}

	async agentRunRead(search) {
		return this.#zenClient.web.fetchJson(`/system/automation/agentRun?${search}`, {
			method: "GET",
			
		});
	}

	async agentRunReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/automation/agentRun/${id}`, {
			method: "GET",
			
		});
	}

	async agentRunUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/agentRun", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async agentUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/agent", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async scheduleCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/schedule", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async scheduleDelete(id) {
		this.#zenClient.web.fetchJson(`/system/automation/schedule/${id}`, {
			method: "DELETE",
			
		});
	}

	async scheduleOpExecute(id) {
		return this.#zenClient.web.fetchJson(`/system/automation/scheduleOpExecute/${id}`, {
			method: "POST",
			
		});
	}

	async scheduleRead(search) {
		return this.#zenClient.web.fetchJson(`/system/automation/schedule?${search}`, {
			method: "GET",
			
		});
	}

	async scheduleReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/automation/schedule/${id}`, {
			method: "GET",
			
		});
	}

	async scheduleUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/schedule", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async watcherCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/watcher", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async watcherDelete(id) {
		this.#zenClient.web.fetchJson(`/system/automation/watcher/${id}`, {
			method: "DELETE",
			
		});
	}

	async watcherRead(search) {
		return this.#zenClient.web.fetchJson(`/system/automation/watcher?${search}`, {
			method: "GET",
			
		});
	}

	async watcherReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/automation/watcher/${id}`, {
			method: "GET",
			
		});
	}

	async watcherUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/automation/watcher", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
