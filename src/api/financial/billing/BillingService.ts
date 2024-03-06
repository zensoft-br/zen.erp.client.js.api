export class BillingService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async batchRequestCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/billing/batchRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async batchRequestDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/billing/batchRequest/${id}`, {
      method: "DELETE",
      
    });
  }

  async batchRequestOpAddInstructions(id, args) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpAddInstructions/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async batchRequestOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpCreateFile(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpCreateFile/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpSend(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpSend/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpSendRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequestOpSendRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequest?${search}`, {
      method: "GET",
      
    });
  }

  async batchRequestReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchRequest/${id}`, {
      method: "GET",
      
    });
  }

  async batchRequestUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/billing/batchRequest", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async batchResponseDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/billing/batchResponse/${id}`, {
      method: "DELETE",
      
    });
  }

  async batchResponseOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchResponseOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchResponseOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpCreate(args) {
    return this.#zenClient.web.fetchJson("/financial/billing/batchResponseOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async batchResponseOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchResponseOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchResponseOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpProcess(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchResponseOpProcess/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchResponse?${search}`, {
      method: "GET",
      
    });
  }

  async batchResponseReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/batchResponse/${id}`, {
      method: "GET",
      
    });
  }

  async instructionRequestDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/billing/instructionRequest/${id}`, {
      method: "DELETE",
      
    });
  }

  async instructionRequestOpAddToBatch(id, batchId) {
    const sp = new URLSearchParams();
    if (batchId) sp.set("batchId", batchId);
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionRequestOpAddToBatch/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpCreate(args) {
    return this.#zenClient.web.fetchJson("/financial/billing/instructionRequestOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async instructionRequestOpCreateChangeDueDate(billingTitleId, dueDate) {
    const sp = new URLSearchParams();
    if (billingTitleId) sp.set("billingTitleId", billingTitleId);
    if (dueDate) sp.set("dueDate", dueDate);
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionRequestOpCreateChangeDueDate?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpCreateRegister(billingTitleId, walletId) {
    const sp = new URLSearchParams();
    if (billingTitleId) sp.set("billingTitleId", billingTitleId);
    if (walletId) sp.set("walletId", walletId);
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionRequestOpCreateRegister?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpCreateUnregister(billingTitleId) {
    const sp = new URLSearchParams();
    if (billingTitleId) sp.set("billingTitleId", billingTitleId);
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionRequestOpCreateUnregister?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpRemoveFromBatch(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionRequestOpRemoveFromBatch/${id}`, {
      method: "POST",
      
    });
  }

  async instructionRequestRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionRequest?${search}`, {
      method: "GET",
      
    });
  }

  async instructionRequestReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionRequest/${id}`, {
      method: "GET",
      
    });
  }

  async instructionRequestUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/billing/instructionRequest", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async instructionResponseCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/billing/instructionResponse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async instructionResponseDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/billing/instructionResponse/${id}`, {
      method: "DELETE",
      
    });
  }

  async instructionResponseOpIgnore(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionResponseOpIgnore/${id}`, {
      method: "POST",
      
    });
  }

  async instructionResponseOpIgnoreRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionResponseOpIgnoreRevert/${id}`, {
      method: "POST",
      
    });
  }

  async instructionResponseOpProcess(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionResponseOpProcess/${id}`, {
      method: "POST",
      
    });
  }

  async instructionResponseRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionResponse?${search}`, {
      method: "GET",
      
    });
  }

  async instructionResponseReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/instructionResponse/${id}`, {
      method: "GET",
      
    });
  }

  async instructionResponseUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/billing/instructionResponse", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async walletCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/billing/wallet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async walletDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/billing/wallet/${id}`, {
      method: "DELETE",
      
    });
  }

  async walletOpGetSequence(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/walletOpGetSequence/${id}`, {
      method: "POST",
      
    });
  }

  async walletRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/billing/wallet?${search}`, {
      method: "GET",
      
    });
  }

  async walletReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/billing/wallet/${id}`, {
      method: "GET",
      
    });
  }

  async walletUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/billing/wallet", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
