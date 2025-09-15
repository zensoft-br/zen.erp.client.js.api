import { Client } from "../../Client.js";
import { Clearance } from "./Clearance.js";
import { ClearanceItem } from "./ClearanceItem.js";
import { Contract } from "./Contract.js";
import { ContractItem } from "./ContractItem.js";
import { ContractPayment } from "./ContractPayment.js";
import { Cost } from "./Cost.js";
import { CostAllocation } from "./CostAllocation.js";
import { ExchangeContract } from "./ExchangeContract.js";
import { Shipment } from "./Shipment.js";
import { ShipmentContainer } from "./ShipmentContainer.js";
import { ShipmentItem } from "./ShipmentItem.js";

export class TradeService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async clearanceCreate(bean: Clearance): Promise<Clearance> {
    return this.#client.web.fetchJson("/trade/clearance", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async clearanceDelete(id: number): Promise<Clearance> {
    return this.#client.web.fetchJson(`/trade/clearance/${id}`, {
      method: "DELETE",
      
    });
  }

  async clearanceItemCreate(bean: ClearanceItem): Promise<ClearanceItem> {
    return this.#client.web.fetchJson("/trade/clearanceItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async clearanceItemDelete(id: number): Promise<ClearanceItem> {
    return this.#client.web.fetchJson(`/trade/clearanceItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async clearanceItemRead(search: any): Promise<ClearanceItem[]> {
    return this.#client.web.fetchJson(`/trade/clearanceItem?${search}`, {
      method: "GET",
      
    });
  }

  async clearanceItemReadById(id: number): Promise<ClearanceItem> {
    return this.#client.web.fetchJson(`/trade/clearanceItem/${id}`, {
      method: "GET",
      
    });
  }

  async clearanceItemUpdate(bean: ClearanceItem): Promise<ClearanceItem> {
    return this.#client.web.fetchJson("/trade/clearanceItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async clearanceOpApprove(id: number): Promise<Clearance> {
    return this.#client.web.fetchJson(`/trade/clearanceOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async clearanceOpApproveRevert(id: number): Promise<Clearance> {
    return this.#client.web.fetchJson(`/trade/clearanceOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async clearanceOpPrepare(id: number): Promise<Clearance> {
    return this.#client.web.fetchJson(`/trade/clearanceOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async clearanceOpPrepareRevert(id: number): Promise<Clearance> {
    return this.#client.web.fetchJson(`/trade/clearanceOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async clearanceRead(search: any): Promise<Clearance[]> {
    return this.#client.web.fetchJson(`/trade/clearance?${search}`, {
      method: "GET",
      
    });
  }

  async clearanceReadById(id: number): Promise<Clearance> {
    return this.#client.web.fetchJson(`/trade/clearance/${id}`, {
      method: "GET",
      
    });
  }

  async clearanceUpdate(bean: Clearance): Promise<Clearance> {
    return this.#client.web.fetchJson("/trade/clearance", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractCreate(bean: Contract): Promise<Contract> {
    return this.#client.web.fetchJson("/trade/contract", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractDelete(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/trade/contract/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractItemCreate(bean: ContractItem): Promise<ContractItem> {
    return this.#client.web.fetchJson("/trade/contractItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractItemDelete(id: number): Promise<ContractItem> {
    return this.#client.web.fetchJson(`/trade/contractItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractItemRead(search: any): Promise<ContractItem[]> {
    return this.#client.web.fetchJson(`/trade/contractItem?${search}`, {
      method: "GET",
      
    });
  }

  async contractItemReadById(id: number): Promise<ContractItem> {
    return this.#client.web.fetchJson(`/trade/contractItem/${id}`, {
      method: "GET",
      
    });
  }

  async contractItemUpdate(bean: ContractItem): Promise<ContractItem> {
    return this.#client.web.fetchJson("/trade/contractItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractOpApprove(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/trade/contractOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpApproveRevert(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/trade/contractOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpPrepare(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/trade/contractOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async contractOpPrepareRevert(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/trade/contractOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractPaymentCreate(bean: ContractPayment): Promise<ContractPayment> {
    return this.#client.web.fetchJson("/trade/contractPayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractPaymentDelete(id: number): Promise<ContractPayment> {
    return this.#client.web.fetchJson(`/trade/contractPayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async contractPaymentOpApprove(id: number): Promise<ContractPayment> {
    return this.#client.web.fetchJson(`/trade/contractPaymentOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async contractPaymentOpApproveRevert(id: number): Promise<ContractPayment> {
    return this.#client.web.fetchJson(`/trade/contractPaymentOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractPaymentOpPrepare(id: number): Promise<ContractPayment> {
    return this.#client.web.fetchJson(`/trade/contractPaymentOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async contractPaymentOpPrepareRevert(id: number): Promise<ContractPayment> {
    return this.#client.web.fetchJson(`/trade/contractPaymentOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async contractPaymentRead(search: any): Promise<ContractPayment[]> {
    return this.#client.web.fetchJson(`/trade/contractPayment?${search}`, {
      method: "GET",
      
    });
  }

  async contractPaymentReadById(id: number): Promise<ContractPayment> {
    return this.#client.web.fetchJson(`/trade/contractPayment/${id}`, {
      method: "GET",
      
    });
  }

  async contractPaymentUpdate(bean: ContractPayment): Promise<ContractPayment> {
    return this.#client.web.fetchJson("/trade/contractPayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async contractRead(search: any): Promise<Contract[]> {
    return this.#client.web.fetchJson(`/trade/contract?${search}`, {
      method: "GET",
      
    });
  }

  async contractReadById(id: number): Promise<Contract> {
    return this.#client.web.fetchJson(`/trade/contract/${id}`, {
      method: "GET",
      
    });
  }

  async contractUpdate(bean: Contract): Promise<Contract> {
    return this.#client.web.fetchJson("/trade/contract", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async costAllocationCreate(bean: CostAllocation): Promise<CostAllocation> {
    return this.#client.web.fetchJson("/trade/costAllocation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async costAllocationDelete(id: number): Promise<CostAllocation> {
    return this.#client.web.fetchJson(`/trade/costAllocation/${id}`, {
      method: "DELETE",
      
    });
  }

  async costAllocationRead(search: any): Promise<CostAllocation[]> {
    return this.#client.web.fetchJson(`/trade/costAllocation?${search}`, {
      method: "GET",
      
    });
  }

  async costAllocationReadById(id: number): Promise<CostAllocation> {
    return this.#client.web.fetchJson(`/trade/costAllocation/${id}`, {
      method: "GET",
      
    });
  }

  async costAllocationUpdate(bean: CostAllocation): Promise<CostAllocation> {
    return this.#client.web.fetchJson("/trade/costAllocation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async costCreate(bean: Cost): Promise<Cost> {
    return this.#client.web.fetchJson("/trade/cost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async costDelete(id: number): Promise<Cost> {
    return this.#client.web.fetchJson(`/trade/cost/${id}`, {
      method: "DELETE",
      
    });
  }

  async costRead(search: any): Promise<Cost[]> {
    return this.#client.web.fetchJson(`/trade/cost?${search}`, {
      method: "GET",
      
    });
  }

  async costReadById(id: number): Promise<Cost> {
    return this.#client.web.fetchJson(`/trade/cost/${id}`, {
      method: "GET",
      
    });
  }

  async costUpdate(bean: Cost): Promise<Cost> {
    return this.#client.web.fetchJson("/trade/cost", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async exchangeContractCreate(bean: ExchangeContract): Promise<ExchangeContract> {
    return this.#client.web.fetchJson("/trade/exchangeContract", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async exchangeContractDelete(id: number): Promise<ExchangeContract> {
    return this.#client.web.fetchJson(`/trade/exchangeContract/${id}`, {
      method: "DELETE",
      
    });
  }

  async exchangeContractOpApprove(id: number): Promise<ExchangeContract> {
    return this.#client.web.fetchJson(`/trade/exchangeContractOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async exchangeContractOpApproveRevert(id: number): Promise<ExchangeContract> {
    return this.#client.web.fetchJson(`/trade/exchangeContractOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async exchangeContractOpPrepare(id: number): Promise<ExchangeContract> {
    return this.#client.web.fetchJson(`/trade/exchangeContractOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async exchangeContractOpPrepareRevert(id: number): Promise<ExchangeContract> {
    return this.#client.web.fetchJson(`/trade/exchangeContractOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async exchangeContractRead(search: any): Promise<ExchangeContract[]> {
    return this.#client.web.fetchJson(`/trade/exchangeContract?${search}`, {
      method: "GET",
      
    });
  }

  async exchangeContractReadById(id: number): Promise<ExchangeContract> {
    return this.#client.web.fetchJson(`/trade/exchangeContract/${id}`, {
      method: "GET",
      
    });
  }

  async exchangeContractUpdate(bean: ExchangeContract): Promise<ExchangeContract> {
    return this.#client.web.fetchJson("/trade/exchangeContract", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shipmentContainerCreate(bean: ShipmentContainer): Promise<ShipmentContainer> {
    return this.#client.web.fetchJson("/trade/shipmentContainer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shipmentContainerDelete(id: number): Promise<ShipmentContainer> {
    return this.#client.web.fetchJson(`/trade/shipmentContainer/${id}`, {
      method: "DELETE",
      
    });
  }

  async shipmentContainerRead(search: any): Promise<ShipmentContainer[]> {
    return this.#client.web.fetchJson(`/trade/shipmentContainer?${search}`, {
      method: "GET",
      
    });
  }

  async shipmentContainerReadById(id: number): Promise<ShipmentContainer> {
    return this.#client.web.fetchJson(`/trade/shipmentContainer/${id}`, {
      method: "GET",
      
    });
  }

  async shipmentContainerUpdate(bean: ShipmentContainer): Promise<ShipmentContainer> {
    return this.#client.web.fetchJson("/trade/shipmentContainer", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shipmentCreate(bean: Shipment): Promise<Shipment> {
    return this.#client.web.fetchJson("/trade/shipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shipmentDelete(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/trade/shipment/${id}`, {
      method: "DELETE",
      
    });
  }

  async shipmentItemCreate(bean: ShipmentItem): Promise<ShipmentItem> {
    return this.#client.web.fetchJson("/trade/shipmentItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shipmentItemDelete(id: number): Promise<ShipmentItem> {
    return this.#client.web.fetchJson(`/trade/shipmentItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async shipmentItemRead(search: any): Promise<ShipmentItem[]> {
    return this.#client.web.fetchJson(`/trade/shipmentItem?${search}`, {
      method: "GET",
      
    });
  }

  async shipmentItemReadById(id: number): Promise<ShipmentItem> {
    return this.#client.web.fetchJson(`/trade/shipmentItem/${id}`, {
      method: "GET",
      
    });
  }

  async shipmentItemUpdate(bean: ShipmentItem): Promise<ShipmentItem> {
    return this.#client.web.fetchJson("/trade/shipmentItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async shipmentOpApprove(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/trade/shipmentOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpApproveRevert(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/trade/shipmentOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpPrepare(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/trade/shipmentOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentOpPrepareRevert(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/trade/shipmentOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async shipmentRead(search: any): Promise<Shipment[]> {
    return this.#client.web.fetchJson(`/trade/shipment?${search}`, {
      method: "GET",
      
    });
  }

  async shipmentReadById(id: number): Promise<Shipment> {
    return this.#client.web.fetchJson(`/trade/shipment/${id}`, {
      method: "GET",
      
    });
  }

  async shipmentUpdate(bean: Shipment): Promise<Shipment> {
    return this.#client.web.fetchJson("/trade/shipment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
