import { Client } from "../../Client.js";
import { Bom } from "./Bom.js";
import { BomItem } from "./BomItem.js";
import { Operation } from "./Operation.js";
import { OperationType } from "./OperationType.js";
import { OperationTypeAccount } from "./OperationTypeAccount.js";
import { ProductionOrder } from "./ProductionOrder.js";
import { ProductionSchema } from "./ProductionSchema.js";

export class ProductionService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async bomCreate(bean: Bom): Promise<Bom> {
    return this.#client.web.fetchJson("/production/bom", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async bomDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/production/bom/${id}`, {
      method: "DELETE",
      
    });
  }

  async bomItemCreate(bean: BomItem): Promise<BomItem> {
    return this.#client.web.fetchJson("/production/bomItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async bomItemDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/production/bomItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async bomItemRead(search: any): Promise<BomItem[]> {
    return this.#client.web.fetchJson(`/production/bomItem?${search}`, {
      method: "GET",
      
    });
  }

  async bomItemReadById(id: number): Promise<BomItem> {
    return this.#client.web.fetchJson(`/production/bomItem/${id}`, {
      method: "GET",
      
    });
  }

  async bomItemUpdate(bean: BomItem): Promise<BomItem> {
    return this.#client.web.fetchJson("/production/bomItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async bomOpClone(id: number): Promise<Bom> {
    return this.#client.web.fetchJson(`/production/bomOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async bomRead(search: any): Promise<Bom[]> {
    return this.#client.web.fetchJson(`/production/bom?${search}`, {
      method: "GET",
      
    });
  }

  async bomReadById(id: number): Promise<Bom> {
    return this.#client.web.fetchJson(`/production/bom/${id}`, {
      method: "GET",
      
    });
  }

  async bomUpdate(bean: Bom): Promise<Bom> {
    return this.#client.web.fetchJson("/production/bom", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationCreate(bean: Operation): Promise<Operation> {
    return this.#client.web.fetchJson("/production/operation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/production/operation/${id}`, {
      method: "DELETE",
      
    });
  }

  async operationRead(search: any): Promise<Operation[]> {
    return this.#client.web.fetchJson(`/production/operation?${search}`, {
      method: "GET",
      
    });
  }

  async operationReadById(id: number): Promise<Operation> {
    return this.#client.web.fetchJson(`/production/operation/${id}`, {
      method: "GET",
      
    });
  }

  async operationTypeAccountCreate(bean: OperationTypeAccount): Promise<OperationTypeAccount> {
    return this.#client.web.fetchJson("/production/operationTypeAccount", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationTypeAccountDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/production/operationTypeAccount/${id}`, {
      method: "DELETE",
      
    });
  }

  async operationTypeAccountRead(search: any): Promise<OperationTypeAccount[]> {
    return this.#client.web.fetchJson(`/production/operationTypeAccount?${search}`, {
      method: "GET",
      
    });
  }

  async operationTypeAccountReadById(id: number): Promise<OperationTypeAccount> {
    return this.#client.web.fetchJson(`/production/operationTypeAccount/${id}`, {
      method: "GET",
      
    });
  }

  async operationTypeAccountUpdate(bean: OperationTypeAccount): Promise<OperationTypeAccount> {
    return this.#client.web.fetchJson("/production/operationTypeAccount", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationTypeCreate(bean: OperationType): Promise<OperationType> {
    return this.#client.web.fetchJson("/production/operationType", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationTypeDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/production/operationType/${id}`, {
      method: "DELETE",
      
    });
  }

  async operationTypeRead(search: any): Promise<OperationType[]> {
    return this.#client.web.fetchJson(`/production/operationType?${search}`, {
      method: "GET",
      
    });
  }

  async operationTypeReadById(id: number): Promise<OperationType> {
    return this.#client.web.fetchJson(`/production/operationType/${id}`, {
      method: "GET",
      
    });
  }

  async operationTypeUpdate(bean: OperationType): Promise<OperationType> {
    return this.#client.web.fetchJson("/production/operationType", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async operationUpdate(bean: Operation): Promise<Operation> {
    return this.#client.web.fetchJson("/production/operation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionOrderCreate(bean: ProductionOrder): Promise<ProductionOrder> {
    return this.#client.web.fetchJson("/production/productionOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionOrderDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/production/productionOrder/${id}`, {
      method: "DELETE",
      
    });
  }

  async productionOrderOpApprove(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrderOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpApproveRevert(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrderOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpFinish(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrderOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpFinishRevert(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrderOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpPrepare(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrderOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderOpPrepareRevert(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrderOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionOrderRead(search: any): Promise<ProductionOrder[]> {
    return this.#client.web.fetchJson(`/production/productionOrder?${search}`, {
      method: "GET",
      
    });
  }

  async productionOrderReadById(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrder/${id}`, {
      method: "GET",
      
    });
  }

  async productionOrderUpdate(bean: ProductionOrder): Promise<ProductionOrder> {
    return this.#client.web.fetchJson("/production/productionOrder", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionSchemaRead(search: any): Promise<ProductionSchema[]> {
    return this.#client.web.fetchJson(`/production/productionSchema?${search}`, {
      method: "GET",
      
    });
  }

  async productionSchemaReadById(id: number): Promise<ProductionSchema> {
    return this.#client.web.fetchJson(`/production/productionSchema/${id}`, {
      method: "GET",
      
    });
  }

  }
