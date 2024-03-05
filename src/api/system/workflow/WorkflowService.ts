export class WorkflowService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async workflowConnectorCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/workflow/workflowConnector", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async workflowConnectorDelete(id) {
		this.#zenClient.web.fetchJson(`/system/workflow/workflowConnector/${id}`, {
			method: "DELETE",
			
		});
	}

	async workflowConnectorRead(search) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowConnector?${search}`, {
			method: "GET",
			
		});
	}

	async workflowConnectorReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowConnector/${id}`, {
			method: "GET",
			
		});
	}

	async workflowConnectorUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/workflow/workflowConnector", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async workflowCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/workflow/workflow", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async workflowDelete(id) {
		this.#zenClient.web.fetchJson(`/system/workflow/workflow/${id}`, {
			method: "DELETE",
			
		});
	}

	async workflowNodeCreate(bean) {
		return this.#zenClient.web.fetchJson("/system/workflow/workflowNode", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async workflowNodeDelete(id) {
		this.#zenClient.web.fetchJson(`/system/workflow/workflowNode/${id}`, {
			method: "DELETE",
			
		});
	}

	async workflowNodeRead(search) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowNode?${search}`, {
			method: "GET",
			
		});
	}

	async workflowNodeReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowNode/${id}`, {
			method: "GET",
			
		});
	}

	async workflowNodeUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/workflow/workflowNode", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async workflowOpApprove(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowOpApprove/${id}`, {
			method: "POST",
			
		});
	}

	async workflowOpApproveRevert(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowOpApproveRevert/${id}`, {
			method: "POST",
			
		});
	}

	async workflowOpCreateOrUpdate(args) {
		return this.#zenClient.web.fetchJson("/system/workflow/workflowOpCreateOrUpdate", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(args),

		});
	}

	async workflowOpDisable(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowOpDisable/${id}`, {
			method: "POST",
			
		});
	}

	async workflowOpDisableRevert(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowOpDisableRevert/${id}`, {
			method: "POST",
			
		});
	}

	async workflowOpPrepare(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowOpPrepare/${id}`, {
			method: "POST",
			
		});
	}

	async workflowOpPrepareRevert(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflowOpPrepareRevert/${id}`, {
			method: "POST",
			
		});
	}

	async workflowRead(search) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflow?${search}`, {
			method: "GET",
			
		});
	}

	async workflowReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workflow/${id}`, {
			method: "GET",
			
		});
	}

	async workflowUpdate(bean) {
		return this.#zenClient.web.fetchJson("/system/workflow/workflow", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async workpieceNodeRead(search) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workpieceNode?${search}`, {
			method: "GET",
			
		});
	}

	async workpieceNodeReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workpieceNode/${id}`, {
			method: "GET",
			
		});
	}

	async workpieceOpForward(id, workflowNodeId) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workpieceOpForward/${id}?workflowNodeId=${workflowNodeId}`, {
			method: "POST",
			
		});
	}

	async workpieceOpRevert(id, workflowNodeId) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workpieceOpRevert/${id}?workflowNodeId=${workflowNodeId}`, {
			method: "POST",
			
		});
	}

	async workpieceRead(search) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workpiece?${search}`, {
			method: "GET",
			
		});
	}

	async workpieceReadById(id) {
		return this.#zenClient.web.fetchJson(`/system/workflow/workpiece/${id}`, {
			method: "GET",
			
		});
	}

	}
