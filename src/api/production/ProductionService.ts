export class ProductionService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async bomCreate(bean) {
    return this.#zenClient.web.fetchJson("/production/bom", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async bomDelete(id) {
    this.#zenClient.web.fetchJson(`/production/bom/${id}`, {
      method: "DELETE",
      
    });
  }

  async bomItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/production/bomItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async bomItemDelete(id) {
    this.#zenClient.web.fetchJson(`/production/bomItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async bomItemRead(search) {
    return this.#zenClient.web.fetchJson(`/production/bomItem?${search}`, {
      method: "GET",
      
    });
  }

  async bomItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/production/bomItem/${id}`, {
      method: "GET",
      
    });
  }

  async bomItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/production/bomItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async bomOpClone(id) {
    return this.#zenClient.web.fetchJson(`/production/bomOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async bomRead(search) {
    return this.#zenClient.web.fetchJson(`/production/bom?${search}`, {
      method: "GET",
      
    });
  }

  async bomReadById(id) {
    return this.#zenClient.web.fetchJson(`/production/bom/${id}`, {
      method: "GET",
      
    });
  }

  async bomUpdate(bean) {
    return this.#zenClient.web.fetchJson("/production/bom", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationCreate(bean) {
    return this.#zenClient.web.fetchJson("/production/operation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationDelete(id) {
    this.#zenClient.web.fetchJson(`/production/operation/${id}`, {
      method: "DELETE",
      
    });
  }

  async operationRead(search) {
    return this.#zenClient.web.fetchJson(`/production/operation?${search}`, {
      method: "GET",
      
    });
  }

  async operationReadById(id) {
    return this.#zenClient.web.fetchJson(`/production/operation/${id}`, {
      method: "GET",
      
    });
  }

  async operationTypeAccountCreate(bean) {
    return this.#zenClient.web.fetchJson("/production/operationTypeAccount", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationTypeAccountDelete(id) {
    this.#zenClient.web.fetchJson(`/production/operationTypeAccount/${id}`, {
      method: "DELETE",
      
    });
  }

  async operationTypeAccountRead(search) {
    return this.#zenClient.web.fetchJson(`/production/operationTypeAccount?${search}`, {
      method: "GET",
      
    });
  }

  async operationTypeAccountReadById(id) {
    return this.#zenClient.web.fetchJson(`/production/operationTypeAccount/${id}`, {
      method: "GET",
      
    });
  }

  async operationTypeAccountUpdate(bean) {
    return this.#zenClient.web.fetchJson("/production/operationTypeAccount", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationTypeCreate(bean) {
    return this.#zenClient.web.fetchJson("/production/operationType", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationTypeDelete(id) {
    this.#zenClient.web.fetchJson(`/production/operationType/${id}`, {
      method: "DELETE",
      
    });
  }

  async operationTypeRead(search) {
    return this.#zenClient.web.fetchJson(`/production/operationType?${search}`, {
      method: "GET",
      
    });
  }

  async operationTypeReadById(id) {
    return this.#zenClient.web.fetchJson(`/production/operationType/${id}`, {
      method: "GET",
      
    });
  }

  async operationTypeUpdate(bean) {
    return this.#zenClient.web.fetchJson("/production/operationType", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationUpdate(bean) {
    return this.#zenClient.web.fetchJson("/production/operation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionOrderCreate(bean) {
    return this.#zenClient.web.fetchJson("/production/productionOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionOrderDelete(id) {
    this.#zenClient.web.fetchJson(`/production/productionOrder/${id}`, {
      method: "DELETE",
      
    });
  }

  async productionOrderOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/production/productionOrderOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/production/productionOrderOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/production/productionOrderOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/production/productionOrderOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/production/productionOrderOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/production/productionOrderOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderRead(search) {
    return this.#zenClient.web.fetchJson(`/production/productionOrder?${search}`, {
      method: "GET",
      
    });
  }

  async productionOrderReadById(id) {
    return this.#zenClient.web.fetchJson(`/production/productionOrder/${id}`, {
      method: "GET",
      
    });
  }

  async productionOrderUpdate(bean) {
    return this.#zenClient.web.fetchJson("/production/productionOrder", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionSchemaRead(search) {
    return this.#zenClient.web.fetchJson(`/production/productionSchema?${search}`, {
      method: "GET",
      
    });
  }

  async productionSchemaReadById(id) {
    return this.#zenClient.web.fetchJson(`/production/productionSchema/${id}`, {
      method: "GET",
      
    });
  }

  }
