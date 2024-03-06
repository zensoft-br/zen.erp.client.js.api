export class ContractService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async contractBillingOpCreate(contractId) {
    const sp = new URLSearchParams();
    if (contractId) sp.set("contractId", contractId);
    return this.#zenClient.web.fetchJson(`/service/contract/contractBillingOpCreate?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async contractBillingOpCreateRevert(contractId) {
    const sp = new URLSearchParams();
    if (contractId) sp.set("contractId", contractId);
    return this.#zenClient.web.fetchJson(`/service/contract/contractBillingOpCreateRevert?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async contractBillingRead(search) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractBilling?${search}`, {
      method: "GET",
      
    });
  }

  async contractBillingReadById(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractBilling/${id}`, {
      method: "GET",
      
    });
  }

  async contractCreate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contract", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractDelete(id) {
    this.#zenClient.web.fetchJson(`/service/contract/contract/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractIndexCreate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contractIndex", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractIndexDelete(id) {
    this.#zenClient.web.fetchJson(`/service/contract/contractIndex/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractIndexRead(search) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractIndex?${search}`, {
      method: "GET",
      
    });
  }

  async contractIndexReadById(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractIndex/${id}`, {
      method: "GET",
      
    });
  }

  async contractIndexUpdate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contractIndex", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contractItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractItemDelete(id) {
    this.#zenClient.web.fetchJson(`/service/contract/contractItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractItemRead(search) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractItem?${search}`, {
      method: "GET",
      
    });
  }

  async contractItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractItem/${id}`, {
      method: "GET",
      
    });
  }

  async contractItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contractItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractOpAdjust(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractOpAdjust/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpCancel(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpCancelRevert(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpCreate(args) {
    return this.#zenClient.web.fetchJson("/service/contract/contractOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async contractOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractProfileCreate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contractProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractProfileDelete(id) {
    this.#zenClient.web.fetchJson(`/service/contract/contractProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractProfileRead(search) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractProfile?${search}`, {
      method: "GET",
      
    });
  }

  async contractProfileReadById(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contractProfile/${id}`, {
      method: "GET",
      
    });
  }

  async contractProfileUpdate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contractProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractRead(search) {
    return this.#zenClient.web.fetchJson(`/service/contract/contract?${search}`, {
      method: "GET",
      
    });
  }

  async contractReadById(id) {
    return this.#zenClient.web.fetchJson(`/service/contract/contract/${id}`, {
      method: "GET",
      
    });
  }

  async contractUpdate(bean) {
    return this.#zenClient.web.fetchJson("/service/contract/contract", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
