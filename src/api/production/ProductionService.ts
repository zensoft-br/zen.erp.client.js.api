import { Client } from "../../Client.js";
import { Bom } from "./Bom.js";
import { BomItem } from "./BomItem.js";
import { Operation } from "./Operation.js";
import { OperationType } from "./OperationType.js";
import { OperationTypeAccount } from "./OperationTypeAccount.js";
import { ProductionBatch } from "./ProductionBatch.js";
import { ProductionOrder } from "./ProductionOrder.js";
import { ProductionProfile } from "./ProductionProfile.js";
import { ProductionStep } from "./ProductionStep.js";
import { ProductionStepInput } from "./ProductionStepInput.js";
import { ProductionStepOutput } from "./ProductionStepOutput.js";

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

  async bomDelete(id: number): Promise<Bom> {
    return this.#client.web.fetchJson(`/production/bom/${id}`, {
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

  async bomItemDelete(id: number): Promise<BomItem> {
    return this.#client.web.fetchJson(`/production/bomItem/${id}`, {
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

  async operationDelete(id: number): Promise<Operation> {
    return this.#client.web.fetchJson(`/production/operation/${id}`, {
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

  async operationTypeAccountDelete(id: number): Promise<OperationTypeAccount> {
    return this.#client.web.fetchJson(`/production/operationTypeAccount/${id}`, {
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

  async operationTypeDelete(id: number): Promise<OperationType> {
    return this.#client.web.fetchJson(`/production/operationType/${id}`, {
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

  async productionBatchCreate(bean: ProductionBatch): Promise<ProductionBatch> {
    return this.#client.web.fetchJson("/production/productionBatch", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionBatchDelete(id: number): Promise<ProductionBatch> {
    return this.#client.web.fetchJson(`/production/productionBatch/${id}`, {
      method: "DELETE",
      
    });
  }

  async productionBatchOpApprove(id: number): Promise<ProductionBatch> {
    return this.#client.web.fetchJson(`/production/productionBatchOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async productionBatchOpApproveRevert(id: number): Promise<ProductionBatch> {
    return this.#client.web.fetchJson(`/production/productionBatchOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionBatchOpPrepare(id: number): Promise<ProductionBatch> {
    return this.#client.web.fetchJson(`/production/productionBatchOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async productionBatchOpPrepareRevert(id: number): Promise<ProductionBatch> {
    return this.#client.web.fetchJson(`/production/productionBatchOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async productionBatchRead(search: any): Promise<ProductionBatch[]> {
    return this.#client.web.fetchJson(`/production/productionBatch?${search}`, {
      method: "GET",
      
    });
  }

  async productionBatchReadById(id: number): Promise<ProductionBatch> {
    return this.#client.web.fetchJson(`/production/productionBatch/${id}`, {
      method: "GET",
      
    });
  }

  async productionBatchUpdate(bean: ProductionBatch): Promise<ProductionBatch> {
    return this.#client.web.fetchJson("/production/productionBatch", {
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

  async productionOrderDelete(id: number): Promise<ProductionOrder> {
    return this.#client.web.fetchJson(`/production/productionOrder/${id}`, {
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

  async productionOrderOpCreate(args: any): Promise<ProductionOrder> {
    return this.#client.web.fetchJson("/production/productionOrderOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

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

  async productionProfileCreate(bean: ProductionProfile): Promise<ProductionProfile> {
    return this.#client.web.fetchJson("/production/productionProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionProfileDelete(id: number): Promise<ProductionProfile> {
    return this.#client.web.fetchJson(`/production/productionProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async productionProfileRead(search: any): Promise<ProductionProfile[]> {
    return this.#client.web.fetchJson(`/production/productionProfile?${search}`, {
      method: "GET",
      
    });
  }

  async productionProfileReadById(id: number): Promise<ProductionProfile> {
    return this.#client.web.fetchJson(`/production/productionProfile/${id}`, {
      method: "GET",
      
    });
  }

  async productionProfileUpdate(bean: ProductionProfile): Promise<ProductionProfile> {
    return this.#client.web.fetchJson("/production/productionProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionStepCreate(bean: ProductionStep): Promise<ProductionStep> {
    return this.#client.web.fetchJson("/production/productionStep", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionStepDelete(id: number): Promise<ProductionStep> {
    return this.#client.web.fetchJson(`/production/productionStep/${id}`, {
      method: "DELETE",
      
    });
  }

  async productionStepInputCreate(bean: ProductionStepInput): Promise<ProductionStepInput> {
    return this.#client.web.fetchJson("/production/productionStepInput", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionStepInputDelete(id: number): Promise<ProductionStepInput> {
    return this.#client.web.fetchJson(`/production/productionStepInput/${id}`, {
      method: "DELETE",
      
    });
  }

  async productionStepInputRead(search: any): Promise<ProductionStepInput[]> {
    return this.#client.web.fetchJson(`/production/productionStepInput?${search}`, {
      method: "GET",
      
    });
  }

  async productionStepInputReadById(id: number): Promise<ProductionStepInput> {
    return this.#client.web.fetchJson(`/production/productionStepInput/${id}`, {
      method: "GET",
      
    });
  }

  async productionStepInputUpdate(bean: ProductionStepInput): Promise<ProductionStepInput> {
    return this.#client.web.fetchJson("/production/productionStepInput", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionStepOpCalculateInput(id: number): Promise<ProductionStep> {
    return this.#client.web.fetchJson(`/production/productionStepOpCalculateInput/${id}`, {
      method: "POST",
      
    });
  }

  async productionStepOutputCreate(bean: ProductionStepOutput): Promise<ProductionStepOutput> {
    return this.#client.web.fetchJson("/production/productionStepOutput", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionStepOutputDelete(id: number): Promise<ProductionStepOutput> {
    return this.#client.web.fetchJson(`/production/productionStepOutput/${id}`, {
      method: "DELETE",
      
    });
  }

  async productionStepOutputRead(search: any): Promise<ProductionStepOutput[]> {
    return this.#client.web.fetchJson(`/production/productionStepOutput?${search}`, {
      method: "GET",
      
    });
  }

  async productionStepOutputReadById(id: number): Promise<ProductionStepOutput> {
    return this.#client.web.fetchJson(`/production/productionStepOutput/${id}`, {
      method: "GET",
      
    });
  }

  async productionStepOutputUpdate(bean: ProductionStepOutput): Promise<ProductionStepOutput> {
    return this.#client.web.fetchJson("/production/productionStepOutput", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productionStepRead(search: any): Promise<ProductionStep[]> {
    return this.#client.web.fetchJson(`/production/productionStep?${search}`, {
      method: "GET",
      
    });
  }

  async productionStepReadById(id: number): Promise<ProductionStep> {
    return this.#client.web.fetchJson(`/production/productionStep/${id}`, {
      method: "GET",
      
    });
  }

  async productionStepUpdate(bean: ProductionStep): Promise<ProductionStep> {
    return this.#client.web.fetchJson("/production/productionStep", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
