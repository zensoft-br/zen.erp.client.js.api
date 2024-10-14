import { Client } from "../../../Client.js";
import { ArgsBatchRequestOpAddInstructions } from "./ArgsBatchRequestOpAddInstructions.js";
import { ArgsBatchResponseOpCreate } from "./ArgsBatchResponseOpCreate.js";
import { ArgsInstructionRequestOpCreate } from "./ArgsInstructionRequestOpCreate.js";
import { Batch } from "./Batch.js";
import { BatchRequest } from "./BatchRequest.js";
import { BatchResponse } from "./BatchResponse.js";
import { InstructionRequest } from "./InstructionRequest.js";
import { InstructionResponse } from "./InstructionResponse.js";
import { Wallet } from "./Wallet.js";

export class BillingService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async batchRequestCreate(bean: BatchRequest): Promise<BatchRequest> {
    return this.#client.web.fetchJson("/financial/billing/batchRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async batchRequestDelete(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequest/${id}`, {
      method: "DELETE",
      
    });
  }

  async batchRequestOpAddInstructions(id: number, args: ArgsBatchRequestOpAddInstructions): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpAddInstructions/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async batchRequestOpApprove(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpApproveRevert(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpCreateFile(id: number): Promise<Batch> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpCreateFile/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpPrepare(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpPrepareRevert(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpSend(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpSend/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestOpSendRevert(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequestOpSendRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchRequestRead(search: any): Promise<BatchRequest[]> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequest?${search}`, {
      method: "GET",
      
    });
  }

  async batchRequestReadById(id: number): Promise<BatchRequest> {
    return this.#client.web.fetchJson(`/financial/billing/batchRequest/${id}`, {
      method: "GET",
      
    });
  }

  async batchRequestUpdate(bean: BatchRequest): Promise<BatchRequest> {
    return this.#client.web.fetchJson("/financial/billing/batchRequest", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async batchResponseDelete(id: number): Promise<BatchResponse> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponse/${id}`, {
      method: "DELETE",
      
    });
  }

  async batchResponseOpApprove(id: number): Promise<BatchResponse> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponseOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpApproveRevert(id: number): Promise<BatchResponse> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponseOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpCreate(args: ArgsBatchResponseOpCreate): Promise<BatchResponse> {
    return this.#client.web.fetchJson("/financial/billing/batchResponseOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async batchResponseOpPrepare(id: number): Promise<BatchResponse> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponseOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpPrepareRevert(id: number): Promise<BatchResponse> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponseOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseOpProcess(id: number): Promise<BatchResponse> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponseOpProcess/${id}`, {
      method: "POST",
      
    });
  }

  async batchResponseRead(search: any): Promise<BatchResponse[]> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponse?${search}`, {
      method: "GET",
      
    });
  }

  async batchResponseReadById(id: number): Promise<BatchResponse> {
    return this.#client.web.fetchJson(`/financial/billing/batchResponse/${id}`, {
      method: "GET",
      
    });
  }

  async instructionRequestDelete(id: number): Promise<InstructionRequest> {
    return this.#client.web.fetchJson(`/financial/billing/instructionRequest/${id}`, {
      method: "DELETE",
      
    });
  }

  async instructionRequestOpAddToBatch(id: number, batchId: number): Promise<InstructionRequest> {
    const sp = new URLSearchParams();
    if (batchId) sp.set("batchId", String(batchId));
    return this.#client.web.fetchJson(`/financial/billing/instructionRequestOpAddToBatch/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpCreate(args: ArgsInstructionRequestOpCreate): Promise<InstructionRequest> {
    return this.#client.web.fetchJson("/financial/billing/instructionRequestOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async instructionRequestOpCreateChangeDueDate(billingTitleId: number, dueDate: Date): Promise<InstructionRequest> {
    const sp = new URLSearchParams();
    if (billingTitleId) sp.set("billingTitleId", String(billingTitleId));
    if (dueDate) sp.set("dueDate", String(dueDate));
    return this.#client.web.fetchJson(`/financial/billing/instructionRequestOpCreateChangeDueDate?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpCreateRegister(billingTitleId: number, walletId: number): Promise<InstructionRequest> {
    const sp = new URLSearchParams();
    if (billingTitleId) sp.set("billingTitleId", String(billingTitleId));
    if (walletId) sp.set("walletId", String(walletId));
    return this.#client.web.fetchJson(`/financial/billing/instructionRequestOpCreateRegister?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpCreateUnregister(billingTitleId: number): Promise<InstructionRequest> {
    const sp = new URLSearchParams();
    if (billingTitleId) sp.set("billingTitleId", String(billingTitleId));
    return this.#client.web.fetchJson(`/financial/billing/instructionRequestOpCreateUnregister?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async instructionRequestOpRemoveFromBatch(id: number): Promise<InstructionRequest> {
    return this.#client.web.fetchJson(`/financial/billing/instructionRequestOpRemoveFromBatch/${id}`, {
      method: "POST",
      
    });
  }

  async instructionRequestRead(search: any): Promise<InstructionRequest[]> {
    return this.#client.web.fetchJson(`/financial/billing/instructionRequest?${search}`, {
      method: "GET",
      
    });
  }

  async instructionRequestReadById(id: number): Promise<InstructionRequest> {
    return this.#client.web.fetchJson(`/financial/billing/instructionRequest/${id}`, {
      method: "GET",
      
    });
  }

  async instructionRequestUpdate(bean: InstructionRequest): Promise<InstructionRequest> {
    return this.#client.web.fetchJson("/financial/billing/instructionRequest", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async instructionResponseCreate(bean: InstructionResponse): Promise<InstructionResponse> {
    return this.#client.web.fetchJson("/financial/billing/instructionResponse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async instructionResponseDelete(id: number): Promise<InstructionResponse> {
    return this.#client.web.fetchJson(`/financial/billing/instructionResponse/${id}`, {
      method: "DELETE",
      
    });
  }

  async instructionResponseOpIgnore(id: number): Promise<InstructionResponse> {
    return this.#client.web.fetchJson(`/financial/billing/instructionResponseOpIgnore/${id}`, {
      method: "POST",
      
    });
  }

  async instructionResponseOpIgnoreRevert(id: number): Promise<InstructionResponse> {
    return this.#client.web.fetchJson(`/financial/billing/instructionResponseOpIgnoreRevert/${id}`, {
      method: "POST",
      
    });
  }

  async instructionResponseOpProcess(id: number): Promise<InstructionResponse> {
    return this.#client.web.fetchJson(`/financial/billing/instructionResponseOpProcess/${id}`, {
      method: "POST",
      
    });
  }

  async instructionResponseRead(search: any): Promise<InstructionResponse[]> {
    return this.#client.web.fetchJson(`/financial/billing/instructionResponse?${search}`, {
      method: "GET",
      
    });
  }

  async instructionResponseReadById(id: number): Promise<InstructionResponse> {
    return this.#client.web.fetchJson(`/financial/billing/instructionResponse/${id}`, {
      method: "GET",
      
    });
  }

  async instructionResponseUpdate(bean: InstructionResponse): Promise<InstructionResponse> {
    return this.#client.web.fetchJson("/financial/billing/instructionResponse", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async walletCreate(bean: Wallet): Promise<Wallet> {
    return this.#client.web.fetchJson("/financial/billing/wallet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async walletDelete(id: number): Promise<Wallet> {
    return this.#client.web.fetchJson(`/financial/billing/wallet/${id}`, {
      method: "DELETE",
      
    });
  }

  async walletOpGetSequence(id: number): Promise<number> {
    return this.#client.web.fetchJson(`/financial/billing/walletOpGetSequence/${id}`, {
      method: "POST",
      
    });
  }

  async walletRead(search: any): Promise<Wallet[]> {
    return this.#client.web.fetchJson(`/financial/billing/wallet?${search}`, {
      method: "GET",
      
    });
  }

  async walletReadById(id: number): Promise<Wallet> {
    return this.#client.web.fetchJson(`/financial/billing/wallet/${id}`, {
      method: "GET",
      
    });
  }

  async walletUpdate(bean: Wallet): Promise<Wallet> {
    return this.#client.web.fetchJson("/financial/billing/wallet", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
