import { Client } from "../../Client.js";
import { Address } from "./Address.js";
import { AddressProfile } from "./AddressProfile.js";
import { ArgsIncomingListOpImportFromOutgoingList } from "./ArgsIncomingListOpImportFromOutgoingList.js";
import { ArgsMovingOrderItemOpLoad } from "./ArgsMovingOrderItemOpLoad.js";
import { ArgsMovingOrderOpAllocateStock } from "./ArgsMovingOrderOpAllocateStock.js";
import { ArgsOutgoingListOpCreateFromReservation } from "./ArgsOutgoingListOpCreateFromReservation.js";
import { ArgsOutgoingListOpOutgoingInvoiceCreate } from "./ArgsOutgoingListOpOutgoingInvoiceCreate.js";
import { ArgsOutgoingListOpVolumeCreateAuto } from "./ArgsOutgoingListOpVolumeCreateAuto.js";
import { ArgsPickingOrderOpCreate } from "./ArgsPickingOrderOpCreate.js";
import { ArgsPickingOrderOpGroup } from "./ArgsPickingOrderOpGroup.js";
import { ArgsReservationOpAllocate } from "./ArgsReservationOpAllocate.js";
import { ArgsReservationOpAllocateRevert } from "./ArgsReservationOpAllocateRevert.js";
import { ArgsStockManagementOpImport } from "./ArgsStockManagementOpImport.js";
import { ArgsStockOpUpdate } from "./ArgsStockOpUpdate.js";
import { ArgsUpdateAverageDailyConsumption } from "./ArgsUpdateAverageDailyConsumption.js";
import { ArgsVolumeOpCheck } from "./ArgsVolumeOpCheck.js";
import { ArgsVolumeOpCreate } from "./ArgsVolumeOpCreate.js";
import { HandlingUnit } from "./HandlingUnit.js";
import { IncomingList } from "./IncomingList.js";
import { IncomingListItem } from "./IncomingListItem.js";
import { IncomingRequest } from "./IncomingRequest.js";
import { IncomingRequestItem } from "./IncomingRequestItem.js";
import { Inventory } from "./Inventory.js";
import { InventoryAdjustment } from "./InventoryAdjustment.js";
import { InventoryCheck } from "./InventoryCheck.js";
import { InventoryStock } from "./InventoryStock.js";
import { Lot } from "./Lot.js";
import { MovingOrder } from "./MovingOrder.js";
import { MovingOrderItem } from "./MovingOrderItem.js";
import { OutgoingInvoice } from "../fiscal/OutgoingInvoice.js";
import { OutgoingList } from "./OutgoingList.js";
import { PickingOrder } from "./PickingOrder.js";
import { PickingOrderItem } from "./PickingOrderItem.js";
import { PickingProfile } from "./PickingProfile.js";
import { Quality } from "./Quality.js";
import { Reservation } from "./Reservation.js";
import { ReservationItem } from "./ReservationItem.js";
import { ReservationTarget } from "./ReservationTarget.js";
import { Serial } from "./Serial.js";
import { Stock } from "./Stock.js";
import { StockAvailability } from "./StockAvailability.js";
import { StockCluster } from "./StockCluster.js";
import { StockManagement } from "./StockManagement.js";
import { StockManagementItem } from "./StockManagementItem.js";
import { StockTransaction } from "./StockTransaction.js";
import { Volume } from "./Volume.js";
import { VolumeItem } from "./VolumeItem.js";
import { Warehouse } from "./Warehouse.js";

export class MaterialService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async addressCreate(bean: Address): Promise<Address> {
    return this.#client.web.fetchJson("/material/address", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async addressDelete(id: number): Promise<Address> {
    return this.#client.web.fetchJson(`/material/address/${id}`, {
      method: "DELETE",
      
    });
  }

  async addressProfileCreate(bean: AddressProfile): Promise<AddressProfile> {
    return this.#client.web.fetchJson("/material/addressProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async addressProfileDelete(id: number): Promise<AddressProfile> {
    return this.#client.web.fetchJson(`/material/addressProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async addressProfileRead(search: any): Promise<AddressProfile[]> {
    return this.#client.web.fetchJson(`/material/addressProfile?${search}`, {
      method: "GET",
      
    });
  }

  async addressProfileReadById(id: number): Promise<AddressProfile> {
    return this.#client.web.fetchJson(`/material/addressProfile/${id}`, {
      method: "GET",
      
    });
  }

  async addressProfileUpdate(bean: AddressProfile): Promise<AddressProfile> {
    return this.#client.web.fetchJson("/material/addressProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async addressRead(search: any): Promise<Address[]> {
    return this.#client.web.fetchJson(`/material/address?${search}`, {
      method: "GET",
      
    });
  }

  async addressReadById(id: number): Promise<Address> {
    return this.#client.web.fetchJson(`/material/address/${id}`, {
      method: "GET",
      
    });
  }

  async addressUpdate(bean: Address): Promise<Address> {
    return this.#client.web.fetchJson("/material/address", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async handlingUnitCreate(bean: HandlingUnit): Promise<HandlingUnit> {
    return this.#client.web.fetchJson("/material/handlingUnit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async handlingUnitDelete(id: number): Promise<HandlingUnit> {
    return this.#client.web.fetchJson(`/material/handlingUnit/${id}`, {
      method: "DELETE",
      
    });
  }

  async handlingUnitRead(search: any): Promise<HandlingUnit[]> {
    return this.#client.web.fetchJson(`/material/handlingUnit?${search}`, {
      method: "GET",
      
    });
  }

  async handlingUnitReadById(id: number): Promise<HandlingUnit> {
    return this.#client.web.fetchJson(`/material/handlingUnit/${id}`, {
      method: "GET",
      
    });
  }

  async handlingUnitUpdate(bean: HandlingUnit): Promise<HandlingUnit> {
    return this.#client.web.fetchJson("/material/handlingUnit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListCreate(bean: IncomingList): Promise<IncomingList> {
    return this.#client.web.fetchJson("/material/incomingList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListDelete(id: number): Promise<IncomingList> {
    return this.#client.web.fetchJson(`/material/incomingList/${id}`, {
      method: "DELETE",
      
    });
  }

  async incomingListItemCreate(bean: IncomingListItem): Promise<IncomingListItem> {
    return this.#client.web.fetchJson("/material/incomingListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListItemDelete(id: number): Promise<IncomingListItem> {
    return this.#client.web.fetchJson(`/material/incomingListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async incomingListItemRead(search: any): Promise<IncomingListItem[]> {
    return this.#client.web.fetchJson(`/material/incomingListItem?${search}`, {
      method: "GET",
      
    });
  }

  async incomingListItemReadById(id: number): Promise<IncomingListItem> {
    return this.#client.web.fetchJson(`/material/incomingListItem/${id}`, {
      method: "GET",
      
    });
  }

  async incomingListItemUpdate(bean: IncomingListItem): Promise<IncomingListItem> {
    return this.#client.web.fetchJson("/material/incomingListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListOpImportFromOutgoingList(id: number, args: ArgsIncomingListOpImportFromOutgoingList): Promise<IncomingList> {
    return this.#client.web.fetchJson(`/material/incomingListOpImportFromOutgoingList/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async incomingListOpPrepare(id: number): Promise<IncomingList> {
    return this.#client.web.fetchJson(`/material/incomingListOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async incomingListOpPrepareRevert(id: number): Promise<IncomingList> {
    return this.#client.web.fetchJson(`/material/incomingListOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async incomingListRead(search: any): Promise<IncomingList[]> {
    return this.#client.web.fetchJson(`/material/incomingList?${search}`, {
      method: "GET",
      
    });
  }

  async incomingListReadById(id: number): Promise<IncomingList> {
    return this.#client.web.fetchJson(`/material/incomingList/${id}`, {
      method: "GET",
      
    });
  }

  async incomingListUpdate(bean: IncomingList): Promise<IncomingList> {
    return this.#client.web.fetchJson("/material/incomingList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingRequestItemRead(search: any): Promise<IncomingRequestItem[]> {
    return this.#client.web.fetchJson(`/material/incomingRequestItem?${search}`, {
      method: "GET",
      
    });
  }

  async incomingRequestItemReadById(id: number): Promise<IncomingRequestItem> {
    return this.#client.web.fetchJson(`/material/incomingRequestItem/${id}`, {
      method: "GET",
      
    });
  }

  async incomingRequestRead(search: any): Promise<IncomingRequest[]> {
    return this.#client.web.fetchJson(`/material/incomingRequest?${search}`, {
      method: "GET",
      
    });
  }

  async incomingRequestReadById(id: number): Promise<IncomingRequest> {
    return this.#client.web.fetchJson(`/material/incomingRequest/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryAdjustmentCreate(bean: InventoryAdjustment): Promise<InventoryAdjustment> {
    return this.#client.web.fetchJson("/material/inventoryAdjustment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryAdjustmentDelete(id: number): Promise<InventoryAdjustment> {
    return this.#client.web.fetchJson(`/material/inventoryAdjustment/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryAdjustmentOpCreate(id: number, stockId: number, quantity: number): Promise<InventoryAdjustment> {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", String(stockId));
    if (quantity) sp.set("quantity", String(quantity));
    return this.#client.web.fetchJson(`/material/inventoryAdjustmentOpCreate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async inventoryAdjustmentRead(search: any): Promise<InventoryAdjustment[]> {
    return this.#client.web.fetchJson(`/material/inventoryAdjustment?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryAdjustmentReadById(id: number): Promise<InventoryAdjustment> {
    return this.#client.web.fetchJson(`/material/inventoryAdjustment/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryAdjustmentUpdate(bean: InventoryAdjustment): Promise<InventoryAdjustment> {
    return this.#client.web.fetchJson("/material/inventoryAdjustment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryCheckCreate(bean: InventoryCheck): Promise<InventoryCheck> {
    return this.#client.web.fetchJson("/material/inventoryCheck", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryCheckDelete(id: number): Promise<InventoryCheck> {
    return this.#client.web.fetchJson(`/material/inventoryCheck/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryCheckRead(search: any): Promise<InventoryCheck[]> {
    return this.#client.web.fetchJson(`/material/inventoryCheck?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryCheckReadById(id: number): Promise<InventoryCheck> {
    return this.#client.web.fetchJson(`/material/inventoryCheck/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryCheckUpdate(bean: InventoryCheck): Promise<InventoryCheck> {
    return this.#client.web.fetchJson("/material/inventoryCheck", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryCreate(bean: Inventory): Promise<Inventory> {
    return this.#client.web.fetchJson("/material/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryDelete(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventory/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryOpApprove(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpApproveRevert(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpFinish(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpFinishRevert(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpPrepare(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpPrepareRevert(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpProcess(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpProcess/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpProcessRevert(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpProcessRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpStart(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpStartRevert(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventoryOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryRead(search: any): Promise<Inventory[]> {
    return this.#client.web.fetchJson(`/material/inventory?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryReadById(id: number): Promise<Inventory> {
    return this.#client.web.fetchJson(`/material/inventory/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryStockCreate(bean: InventoryStock): Promise<InventoryStock> {
    return this.#client.web.fetchJson("/material/inventoryStock", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryStockDelete(id: number): Promise<InventoryStock> {
    return this.#client.web.fetchJson(`/material/inventoryStock/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryStockOpCreate(id: number, stockId: number): Promise<InventoryStock> {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", String(stockId));
    return this.#client.web.fetchJson(`/material/inventoryStockOpCreate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async inventoryStockRead(search: any): Promise<InventoryStock[]> {
    return this.#client.web.fetchJson(`/material/inventoryStock?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryStockReadById(id: number): Promise<InventoryStock> {
    return this.#client.web.fetchJson(`/material/inventoryStock/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryStockUpdate(bean: InventoryStock): Promise<InventoryStock> {
    return this.#client.web.fetchJson("/material/inventoryStock", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryUpdate(bean: Inventory): Promise<Inventory> {
    return this.#client.web.fetchJson("/material/inventory", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async lotCreate(bean: Lot): Promise<Lot> {
    return this.#client.web.fetchJson("/material/lot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async lotDelete(id: number): Promise<Lot> {
    return this.#client.web.fetchJson(`/material/lot/${id}`, {
      method: "DELETE",
      
    });
  }

  async lotRead(search: any): Promise<Lot[]> {
    return this.#client.web.fetchJson(`/material/lot?${search}`, {
      method: "GET",
      
    });
  }

  async lotReadById(id: number): Promise<Lot> {
    return this.#client.web.fetchJson(`/material/lot/${id}`, {
      method: "GET",
      
    });
  }

  async lotUpdate(bean: Lot): Promise<Lot> {
    return this.#client.web.fetchJson("/material/lot", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async movingOrderCreate(bean: MovingOrder): Promise<MovingOrder> {
    return this.#client.web.fetchJson("/material/movingOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async movingOrderDelete(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrder/${id}`, {
      method: "DELETE",
      
    });
  }

  async movingOrderItemDelete(id: number): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson(`/material/movingOrderItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async movingOrderItemOpFinish(id: number): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson(`/material/movingOrderItemOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderItemOpLoad(id: number, args: ArgsMovingOrderItemOpLoad): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson(`/material/movingOrderItemOpLoad/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async movingOrderItemOpStart(id: number): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson(`/material/movingOrderItemOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderItemOpStartRevert(id: number): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson(`/material/movingOrderItemOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderItemRead(search: any): Promise<MovingOrderItem[]> {
    return this.#client.web.fetchJson(`/material/movingOrderItem?${search}`, {
      method: "GET",
      
    });
  }

  async movingOrderItemReadById(id: number): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson(`/material/movingOrderItem/${id}`, {
      method: "GET",
      
    });
  }

  async movingOrderItemUpdate(bean: MovingOrderItem): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson("/material/movingOrderItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async movingOrderOpAllocateStock(id: number, args: ArgsMovingOrderOpAllocateStock): Promise<MovingOrderItem> {
    return this.#client.web.fetchJson(`/material/movingOrderOpAllocateStock/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async movingOrderOpApprove(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrderOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpApproveRevert(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrderOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpFinish(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrderOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpPrepare(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrderOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpPrepareRevert(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrderOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpStart(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrderOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpStartRevert(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrderOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpUnload(id: number, userId: number): Promise<MovingOrder> {
    const sp = new URLSearchParams();
    if (userId) sp.set("userId", String(userId));
    return this.#client.web.fetchJson(`/material/movingOrderOpUnload/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async movingOrderRead(search: any): Promise<MovingOrder[]> {
    return this.#client.web.fetchJson(`/material/movingOrder?${search}`, {
      method: "GET",
      
    });
  }

  async movingOrderReadById(id: number): Promise<MovingOrder> {
    return this.#client.web.fetchJson(`/material/movingOrder/${id}`, {
      method: "GET",
      
    });
  }

  async movingOrderUpdate(bean: MovingOrder): Promise<MovingOrder> {
    return this.#client.web.fetchJson("/material/movingOrder", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingListDelete(id: number): Promise<OutgoingList> {
    return this.#client.web.fetchJson(`/material/outgoingList/${id}`, {
      method: "DELETE",
      
    });
  }

  async outgoingListOpCreateFromReservation(id: number, args: ArgsOutgoingListOpCreateFromReservation): Promise<OutgoingList> {
    return this.#client.web.fetchJson(`/material/outgoingListOpCreateFromReservation/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingListOpMerge(ids: any): Promise<OutgoingList> {
    return this.#client.web.fetchJson("/material/outgoingListOpMerge", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(ids),

    });
  }

  async outgoingListOpOutgoingInvoiceCreate(id: number, args: ArgsOutgoingListOpOutgoingInvoiceCreate): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/material/outgoingListOpOutgoingInvoiceCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingListOpOutgoingInvoiceCreateRevert(id: number): Promise<OutgoingList> {
    return this.#client.web.fetchJson(`/material/outgoingListOpOutgoingInvoiceCreateRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingListOpPacked(id: number): Promise<OutgoingList> {
    return this.#client.web.fetchJson(`/material/outgoingListOpPacked/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingListOpPackedRevert(id: number): Promise<OutgoingList> {
    return this.#client.web.fetchJson(`/material/outgoingListOpPackedRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingListOpVolumeCreateAuto(id: number, args: ArgsOutgoingListOpVolumeCreateAuto): Promise<OutgoingList> {
    return this.#client.web.fetchJson(`/material/outgoingListOpVolumeCreateAuto/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingListRead(search: any): Promise<OutgoingList[]> {
    return this.#client.web.fetchJson(`/material/outgoingList?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingListReadById(id: number): Promise<OutgoingList> {
    return this.#client.web.fetchJson(`/material/outgoingList/${id}`, {
      method: "GET",
      
    });
  }

  async pickingOrderCreate(bean: PickingOrder): Promise<PickingOrder> {
    return this.#client.web.fetchJson("/material/pickingOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingOrderDelete(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrder/${id}`, {
      method: "DELETE",
      
    });
  }

  async pickingOrderItemCreate(bean: PickingOrderItem): Promise<PickingOrderItem> {
    return this.#client.web.fetchJson("/material/pickingOrderItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingOrderItemDelete(id: number): Promise<PickingOrderItem> {
    return this.#client.web.fetchJson(`/material/pickingOrderItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async pickingOrderItemRead(search: any): Promise<PickingOrderItem[]> {
    return this.#client.web.fetchJson(`/material/pickingOrderItem?${search}`, {
      method: "GET",
      
    });
  }

  async pickingOrderItemReadById(id: number): Promise<PickingOrderItem> {
    return this.#client.web.fetchJson(`/material/pickingOrderItem/${id}`, {
      method: "GET",
      
    });
  }

  async pickingOrderItemUpdate(bean: PickingOrderItem): Promise<PickingOrderItem> {
    return this.#client.web.fetchJson("/material/pickingOrderItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingOrderOpApprove(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpApproveRevert(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpCreate(args: ArgsPickingOrderOpCreate): Promise<PickingOrder> {
    return this.#client.web.fetchJson("/material/pickingOrderOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async pickingOrderOpDistribute(id: number, outgoingListId: number, stockId: number, quantity: number): Promise<PickingOrder> {
    const sp = new URLSearchParams();
    if (outgoingListId) sp.set("outgoingListId", String(outgoingListId));
    if (stockId) sp.set("stockId", String(stockId));
    if (quantity) sp.set("quantity", String(quantity));
    return this.#client.web.fetchJson(`/material/pickingOrderOpDistribute/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpDistributeAuto(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpDistributeAuto/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpDistributeRevert(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpDistributeRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpFinish(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpGroup(args: ArgsPickingOrderOpGroup): Promise<PickingOrder> {
    return this.#client.web.fetchJson("/material/pickingOrderOpGroup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async pickingOrderOpGroupRevert(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpGroupRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpPrepare(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpPrepareRevert(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpReservationFinish(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpReservationFinish/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpReservationFinishRevert(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpReservationFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpUngroup(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpUngroup/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpUngroupDivergent(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpUngroupDivergent/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpUngroupRevert(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrderOpUngroupRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderRead(search: any): Promise<PickingOrder[]> {
    return this.#client.web.fetchJson(`/material/pickingOrder?${search}`, {
      method: "GET",
      
    });
  }

  async pickingOrderReadById(id: number): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/material/pickingOrder/${id}`, {
      method: "GET",
      
    });
  }

  async pickingOrderUpdate(bean: PickingOrder): Promise<PickingOrder> {
    return this.#client.web.fetchJson("/material/pickingOrder", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingProfileCreate(bean: PickingProfile): Promise<PickingProfile> {
    return this.#client.web.fetchJson("/material/pickingProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingProfileDelete(id: number): Promise<PickingProfile> {
    return this.#client.web.fetchJson(`/material/pickingProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async pickingProfileRead(search: any): Promise<PickingProfile[]> {
    return this.#client.web.fetchJson(`/material/pickingProfile?${search}`, {
      method: "GET",
      
    });
  }

  async pickingProfileReadById(id: number): Promise<PickingProfile> {
    return this.#client.web.fetchJson(`/material/pickingProfile/${id}`, {
      method: "GET",
      
    });
  }

  async pickingProfileUpdate(bean: PickingProfile): Promise<PickingProfile> {
    return this.#client.web.fetchJson("/material/pickingProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async qualityCreate(bean: Quality): Promise<Quality> {
    return this.#client.web.fetchJson("/material/quality", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async qualityDelete(id: number): Promise<Quality> {
    return this.#client.web.fetchJson(`/material/quality/${id}`, {
      method: "DELETE",
      
    });
  }

  async qualityRead(search: any): Promise<Quality[]> {
    return this.#client.web.fetchJson(`/material/quality?${search}`, {
      method: "GET",
      
    });
  }

  async qualityReadById(id: number): Promise<Quality> {
    return this.#client.web.fetchJson(`/material/quality/${id}`, {
      method: "GET",
      
    });
  }

  async qualityUpdate(bean: Quality): Promise<Quality> {
    return this.#client.web.fetchJson("/material/quality", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationCreate(bean: Reservation): Promise<Reservation> {
    return this.#client.web.fetchJson("/material/reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationDelete(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservation/${id}`, {
      method: "DELETE",
      
    });
  }

  async reservationItemRead(search: any): Promise<ReservationItem[]> {
    return this.#client.web.fetchJson(`/material/reservationItem?${search}`, {
      method: "GET",
      
    });
  }

  async reservationItemReadById(id: number): Promise<ReservationItem> {
    return this.#client.web.fetchJson(`/material/reservationItem/${id}`, {
      method: "GET",
      
    });
  }

  async reservationOpAllocate(id: number, args: any): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpAllocate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reservationOpAllocateAuto(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpAllocateAuto/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpAllocateAutoRevert(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpAllocateAutoRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpAllocateRevert(id: number, args: any): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpAllocateRevert/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reservationOpAllocateStock(id: number, stockId: number, quantity: number): Promise<Reservation> {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", String(stockId));
    if (quantity) sp.set("quantity", String(quantity));
    return this.#client.web.fetchJson(`/material/reservationOpAllocateStock/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async reservationOpAllocateStockRevert(id: number, stockId: number, quantity: number): Promise<Reservation> {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", String(stockId));
    if (quantity) sp.set("quantity", String(quantity));
    return this.#client.web.fetchJson(`/material/reservationOpAllocateStockRevert/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async reservationOpApprove(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpApproveRevert(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpFinish(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpFinishDivergent(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpFinishDivergent/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpFinishRevert(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpPrepare(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpPrepareRevert(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpStart(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpStartRevert(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservationOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationRead(search: any): Promise<Reservation[]> {
    return this.#client.web.fetchJson(`/material/reservation?${search}`, {
      method: "GET",
      
    });
  }

  async reservationReadById(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/material/reservation/${id}`, {
      method: "GET",
      
    });
  }

  async reservationTargetCreate(bean: ReservationTarget): Promise<ReservationTarget> {
    return this.#client.web.fetchJson("/material/reservationTarget", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationTargetDelete(id: number): Promise<ReservationTarget> {
    return this.#client.web.fetchJson(`/material/reservationTarget/${id}`, {
      method: "DELETE",
      
    });
  }

  async reservationTargetRead(search: any): Promise<ReservationTarget[]> {
    return this.#client.web.fetchJson(`/material/reservationTarget?${search}`, {
      method: "GET",
      
    });
  }

  async reservationTargetReadById(id: number): Promise<ReservationTarget> {
    return this.#client.web.fetchJson(`/material/reservationTarget/${id}`, {
      method: "GET",
      
    });
  }

  async reservationTargetUpdate(bean: ReservationTarget): Promise<ReservationTarget> {
    return this.#client.web.fetchJson("/material/reservationTarget", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationUpdate(bean: Reservation): Promise<Reservation> {
    return this.#client.web.fetchJson("/material/reservation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async serialCreate(bean: Serial): Promise<Serial> {
    return this.#client.web.fetchJson("/material/serial", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async serialDelete(id: number): Promise<Serial> {
    return this.#client.web.fetchJson(`/material/serial/${id}`, {
      method: "DELETE",
      
    });
  }

  async serialRead(search: any): Promise<Serial[]> {
    return this.#client.web.fetchJson(`/material/serial?${search}`, {
      method: "GET",
      
    });
  }

  async serialReadById(id: number): Promise<Serial> {
    return this.#client.web.fetchJson(`/material/serial/${id}`, {
      method: "GET",
      
    });
  }

  async serialUpdate(bean: Serial): Promise<Serial> {
    return this.#client.web.fetchJson("/material/serial", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockAvailabilityRead(search: any): Promise<StockAvailability[]> {
    return this.#client.web.fetchJson(`/material/stockAvailability?${search}`, {
      method: "GET",
      
    });
  }

  async stockClusterCreate(bean: StockCluster): Promise<StockCluster> {
    return this.#client.web.fetchJson("/material/stockCluster", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockClusterDelete(id: number): Promise<StockCluster> {
    return this.#client.web.fetchJson(`/material/stockCluster/${id}`, {
      method: "DELETE",
      
    });
  }

  async stockClusterRead(search: any): Promise<StockCluster[]> {
    return this.#client.web.fetchJson(`/material/stockCluster?${search}`, {
      method: "GET",
      
    });
  }

  async stockClusterReadById(id: number): Promise<StockCluster> {
    return this.#client.web.fetchJson(`/material/stockCluster/${id}`, {
      method: "GET",
      
    });
  }

  async stockClusterUpdate(bean: StockCluster): Promise<StockCluster> {
    return this.#client.web.fetchJson("/material/stockCluster", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementCreate(bean: StockManagement): Promise<StockManagement> {
    return this.#client.web.fetchJson("/material/stockManagement", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementDelete(id: number): Promise<StockManagement> {
    return this.#client.web.fetchJson(`/material/stockManagement/${id}`, {
      method: "DELETE",
      
    });
  }

  async stockManagementItemCreate(bean: StockManagementItem): Promise<StockManagementItem> {
    return this.#client.web.fetchJson("/material/stockManagementItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementItemDelete(id: number): Promise<StockManagementItem> {
    return this.#client.web.fetchJson(`/material/stockManagementItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async stockManagementItemRead(search: any): Promise<StockManagementItem[]> {
    return this.#client.web.fetchJson(`/material/stockManagementItem?${search}`, {
      method: "GET",
      
    });
  }

  async stockManagementItemReadById(id: number): Promise<StockManagementItem> {
    return this.#client.web.fetchJson(`/material/stockManagementItem/${id}`, {
      method: "GET",
      
    });
  }

  async stockManagementItemUpdate(bean: StockManagementItem): Promise<StockManagementItem> {
    return this.#client.web.fetchJson("/material/stockManagementItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementOpImport(args: ArgsStockManagementOpImport): Promise<void> {
    return this.#client.web.fetchJson("/material/stockManagementOpImport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async stockManagementOpUpdateAverageDailyConsumption(args: ArgsUpdateAverageDailyConsumption): Promise<void> {
    return this.#client.web.fetchJson("/material/stockManagementOpUpdateAverageDailyConsumption", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async stockManagementRead(search: any): Promise<StockManagement[]> {
    return this.#client.web.fetchJson(`/material/stockManagement?${search}`, {
      method: "GET",
      
    });
  }

  async stockManagementReadById(id: number): Promise<StockManagement> {
    return this.#client.web.fetchJson(`/material/stockManagement/${id}`, {
      method: "GET",
      
    });
  }

  async stockManagementUpdate(bean: StockManagement): Promise<StockManagement> {
    return this.#client.web.fetchJson("/material/stockManagement", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockOpBarcode(stock: Stock): Promise<string> {
    return this.#client.web.fetchJson("/material/stockOpBarcode", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(stock),

    });
  }

  async stockOpUpdate(id: number, args: ArgsStockOpUpdate): Promise<Stock> {
    return this.#client.web.fetchJson(`/material/stockOpUpdate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async stockPointRead(dateTime: Date, search: any): Promise<Stock[]> {
    const sp = new URLSearchParams();
    if (dateTime) sp.set("dateTime", String(dateTime));
    return this.#client.web.fetchJson(`/material/stockPoint?${search}?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async stockRead(search: any): Promise<Stock[]> {
    return this.#client.web.fetchJson(`/material/stock?${search}`, {
      method: "GET",
      
    });
  }

  async stockReadById(id: number): Promise<Stock> {
    return this.#client.web.fetchJson(`/material/stock/${id}`, {
      method: "GET",
      
    });
  }

  async stockTransactionOpRevert(id: number): Promise<StockTransaction[]> {
    return this.#client.web.fetchJson(`/material/stockTransactionOpRevert/${id}`, {
      method: "POST",
      
    });
  }

  async stockTransactionRead(search: any): Promise<StockTransaction[]> {
    return this.#client.web.fetchJson(`/material/stockTransaction?${search}`, {
      method: "GET",
      
    });
  }

  async stockTransactionReadById(id: number): Promise<StockTransaction> {
    return this.#client.web.fetchJson(`/material/stockTransaction/${id}`, {
      method: "GET",
      
    });
  }

  async volumeCreate(bean: Volume): Promise<Volume> {
    return this.#client.web.fetchJson("/material/volume", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async volumeDelete(id: number): Promise<Volume> {
    return this.#client.web.fetchJson(`/material/volume/${id}`, {
      method: "DELETE",
      
    });
  }

  async volumeItemCreate(bean: VolumeItem): Promise<VolumeItem> {
    return this.#client.web.fetchJson("/material/volumeItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async volumeItemDelete(id: number): Promise<VolumeItem> {
    return this.#client.web.fetchJson(`/material/volumeItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async volumeItemRead(search: any): Promise<VolumeItem[]> {
    return this.#client.web.fetchJson(`/material/volumeItem?${search}`, {
      method: "GET",
      
    });
  }

  async volumeItemReadById(id: number): Promise<VolumeItem> {
    return this.#client.web.fetchJson(`/material/volumeItem/${id}`, {
      method: "GET",
      
    });
  }

  async volumeOpCheck(id: number, args: ArgsVolumeOpCheck): Promise<Volume> {
    return this.#client.web.fetchJson(`/material/volumeOpCheck/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async volumeOpCheckRevert(id: number): Promise<Volume> {
    return this.#client.web.fetchJson(`/material/volumeOpCheckRevert/${id}`, {
      method: "POST",
      
    });
  }

  async volumeOpCreate(args: ArgsVolumeOpCreate): Promise<Volume> {
    return this.#client.web.fetchJson("/material/volumeOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async volumeOpHandlingUnitSet(id: number, handlingUnitId: number): Promise<Volume> {
    const sp = new URLSearchParams();
    if (handlingUnitId) sp.set("handlingUnitId", String(handlingUnitId));
    return this.#client.web.fetchJson(`/material/volumeOpHandlingUnitSet/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async volumeRead(search: any): Promise<Volume[]> {
    return this.#client.web.fetchJson(`/material/volume?${search}`, {
      method: "GET",
      
    });
  }

  async volumeReadById(id: number): Promise<Volume> {
    return this.#client.web.fetchJson(`/material/volume/${id}`, {
      method: "GET",
      
    });
  }

  async volumeUpdate(bean: Volume): Promise<Volume> {
    return this.#client.web.fetchJson("/material/volume", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async warehouseCreate(bean: Warehouse): Promise<Warehouse> {
    return this.#client.web.fetchJson("/material/warehouse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async warehouseDelete(id: number): Promise<Warehouse> {
    return this.#client.web.fetchJson(`/material/warehouse/${id}`, {
      method: "DELETE",
      
    });
  }

  async warehouseRead(search: any): Promise<Warehouse[]> {
    return this.#client.web.fetchJson(`/material/warehouse?${search}`, {
      method: "GET",
      
    });
  }

  async warehouseReadById(id: number): Promise<Warehouse> {
    return this.#client.web.fetchJson(`/material/warehouse/${id}`, {
      method: "GET",
      
    });
  }

  async warehouseUpdate(bean: Warehouse): Promise<Warehouse> {
    return this.#client.web.fetchJson("/material/warehouse", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
