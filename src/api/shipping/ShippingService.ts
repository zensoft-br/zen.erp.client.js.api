export class ShippingService {

	#zenClient;

	constructor(zenClient) {
		this.#zenClient = zenClient;
	}
	
	async shipmentCreate(bean) {
		return this.#zenClient.web.fetchJson("/shipping/shipment", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	async shipmentDelete(id) {
		this.#zenClient.web.fetchJson(`/shipping/shipment/${id}`, {
			method: "DELETE",
			
		});
	}

	async shipmentOpApprove(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpApprove/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpApproveRevert(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpApproveRevert/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpFinish(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpFinish/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpFinishRevert(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpFinishRevert/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpLoadIgnore(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpLoadIgnore/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpLoadStart(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpLoadStart/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpLoadStartRevert(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpLoadStartRevert/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpLoadVolume(id, volumeId) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpLoadVolume/${id}?volumeId=${volumeId}`, {
			method: "POST",
			
		});
	}

	async shipmentOpOutgoingInvoiceBind(id, outgoingInvoiceId) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpOutgoingInvoiceBind/${id}?outgoingInvoiceId=${outgoingInvoiceId}`, {
			method: "POST",
			
		});
	}

	async shipmentOpOutgoingInvoiceBindRevert(id, outgoingInvoiceId) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpOutgoingInvoiceBindRevert/${id}?outgoingInvoiceId=${outgoingInvoiceId}`, {
			method: "POST",
			
		});
	}

	async shipmentOpPrepare(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpPrepare/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentOpPrepareRevert(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipmentOpPrepareRevert/${id}`, {
			method: "POST",
			
		});
	}

	async shipmentRead(search) {
		return this.#zenClient.web.fetchJson(`/shipping/shipment?${search}`, {
			method: "GET",
			
		});
	}

	async shipmentReadById(id) {
		return this.#zenClient.web.fetchJson(`/shipping/shipment/${id}`, {
			method: "GET",
			
		});
	}

	async shipmentUpdate(bean) {
		return this.#zenClient.web.fetchJson("/shipping/shipment", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				},
				body: JSON.stringify(bean),

		});
	}

	}
