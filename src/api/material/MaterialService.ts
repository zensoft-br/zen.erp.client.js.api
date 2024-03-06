export class MaterialService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async addressCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/address", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async addressDelete(id) {
    this.#zenClient.web.fetchJson(`/material/address/${id}`, {
      method: "DELETE",
      
    });
  }

  async addressRead(search) {
    return this.#zenClient.web.fetchJson(`/material/address?${search}`, {
      method: "GET",
      
    });
  }

  async addressReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/address/${id}`, {
      method: "GET",
      
    });
  }

  async addressUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/address", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async handlingUnitCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/handlingUnit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async handlingUnitDelete(id) {
    this.#zenClient.web.fetchJson(`/material/handlingUnit/${id}`, {
      method: "DELETE",
      
    });
  }

  async handlingUnitRead(search) {
    return this.#zenClient.web.fetchJson(`/material/handlingUnit?${search}`, {
      method: "GET",
      
    });
  }

  async handlingUnitReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/handlingUnit/${id}`, {
      method: "GET",
      
    });
  }

  async handlingUnitUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/handlingUnit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/incomingList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListDelete(id) {
    this.#zenClient.web.fetchJson(`/material/incomingList/${id}`, {
      method: "DELETE",
      
    });
  }

  async incomingListItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/incomingListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListItemDelete(id) {
    this.#zenClient.web.fetchJson(`/material/incomingListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async incomingListItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/incomingListItem?${search}`, {
      method: "GET",
      
    });
  }

  async incomingListItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/incomingListItem/${id}`, {
      method: "GET",
      
    });
  }

  async incomingListItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/incomingListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingListOpImport(args) {
    return this.#zenClient.web.fetchJson("/material/incomingListOpImport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async incomingListOpImportFromOutgoingList(id, args) {
    return this.#zenClient.web.fetchJson(`/material/incomingListOpImportFromOutgoingList/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async incomingListOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/material/incomingListOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async incomingListOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/incomingListOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async incomingListRead(search) {
    return this.#zenClient.web.fetchJson(`/material/incomingList?${search}`, {
      method: "GET",
      
    });
  }

  async incomingListReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/incomingList/${id}`, {
      method: "GET",
      
    });
  }

  async incomingListUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/incomingList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingRequestItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/incomingRequestItem?${search}`, {
      method: "GET",
      
    });
  }

  async incomingRequestItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/incomingRequestItem/${id}`, {
      method: "GET",
      
    });
  }

  async incomingRequestRead(search) {
    return this.#zenClient.web.fetchJson(`/material/incomingRequest?${search}`, {
      method: "GET",
      
    });
  }

  async incomingRequestReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/incomingRequest/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryAdjustmentCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventoryAdjustment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryAdjustmentDelete(id) {
    this.#zenClient.web.fetchJson(`/material/inventoryAdjustment/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryAdjustmentOpCreate(id, stockId, quantity) {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", stockId);
    if (quantity) sp.set("quantity", quantity);
    return this.#zenClient.web.fetchJson(`/material/inventoryAdjustmentOpCreate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async inventoryAdjustmentRead(search) {
    return this.#zenClient.web.fetchJson(`/material/inventoryAdjustment?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryAdjustmentReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryAdjustment/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryAdjustmentUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventoryAdjustment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryCheckCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventoryCheck", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryCheckDelete(id) {
    this.#zenClient.web.fetchJson(`/material/inventoryCheck/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryCheckRead(search) {
    return this.#zenClient.web.fetchJson(`/material/inventoryCheck?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryCheckReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryCheck/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryCheckUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventoryCheck", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryDelete(id) {
    this.#zenClient.web.fetchJson(`/material/inventory/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpProcess(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpProcess/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpProcessRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpProcessRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpStart(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryOpStartRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async inventoryRead(search) {
    return this.#zenClient.web.fetchJson(`/material/inventory?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/inventory/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryStockCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventoryStock", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryStockDelete(id) {
    this.#zenClient.web.fetchJson(`/material/inventoryStock/${id}`, {
      method: "DELETE",
      
    });
  }

  async inventoryStockOpCreate(id, stockId) {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", stockId);
    return this.#zenClient.web.fetchJson(`/material/inventoryStockOpCreate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async inventoryStockRead(search) {
    return this.#zenClient.web.fetchJson(`/material/inventoryStock?${search}`, {
      method: "GET",
      
    });
  }

  async inventoryStockReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/inventoryStock/${id}`, {
      method: "GET",
      
    });
  }

  async inventoryStockUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventoryStock", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async inventoryUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/inventory", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async lotCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/lot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async lotDelete(id) {
    this.#zenClient.web.fetchJson(`/material/lot/${id}`, {
      method: "DELETE",
      
    });
  }

  async lotRead(search) {
    return this.#zenClient.web.fetchJson(`/material/lot?${search}`, {
      method: "GET",
      
    });
  }

  async lotReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/lot/${id}`, {
      method: "GET",
      
    });
  }

  async lotUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/lot", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async movingOrderCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/movingOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async movingOrderDelete(id) {
    this.#zenClient.web.fetchJson(`/material/movingOrder/${id}`, {
      method: "DELETE",
      
    });
  }

  async movingOrderItemDelete(id) {
    this.#zenClient.web.fetchJson(`/material/movingOrderItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async movingOrderItemOpCreate(args) {
    return this.#zenClient.web.fetchJson("/material/movingOrderItemOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async movingOrderItemOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderItemOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderItemOpLoad(id, args) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderItemOpLoad/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async movingOrderItemOpStart(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderItemOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderItemOpStartRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderItemOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderItemOpUnload(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderItemOpUnload/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderItem?${search}`, {
      method: "GET",
      
    });
  }

  async movingOrderItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderItem/${id}`, {
      method: "GET",
      
    });
  }

  async movingOrderItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/movingOrderItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async movingOrderOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpStart(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderOpStartRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrderOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async movingOrderRead(search) {
    return this.#zenClient.web.fetchJson(`/material/movingOrder?${search}`, {
      method: "GET",
      
    });
  }

  async movingOrderReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/movingOrder/${id}`, {
      method: "GET",
      
    });
  }

  async movingOrderUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/movingOrder", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingListDelete(id) {
    this.#zenClient.web.fetchJson(`/material/outgoingList/${id}`, {
      method: "DELETE",
      
    });
  }

  async outgoingListItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListItem?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingListItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListItem/${id}`, {
      method: "GET",
      
    });
  }

  async outgoingListOpCreateFromReservation(id, args) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListOpCreateFromReservation/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingListOpMerge(ids) {
    return this.#zenClient.web.fetchJson("/material/outgoingListOpMerge", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(ids),

    });
  }

  async outgoingListOpOutgoingInvoiceCreate(id, args) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListOpOutgoingInvoiceCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingListOpOutgoingInvoiceCreateRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListOpOutgoingInvoiceCreateRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingListOpPacked(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListOpPacked/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingListOpPackedRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListOpPackedRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingListOpVolumeCreateAuto(id, args) {
    return this.#zenClient.web.fetchJson(`/material/outgoingListOpVolumeCreateAuto/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingListRead(search) {
    return this.#zenClient.web.fetchJson(`/material/outgoingList?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingListReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingList/${id}`, {
      method: "GET",
      
    });
  }

  async outgoingRequestCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/outgoingRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingRequestDelete(id) {
    this.#zenClient.web.fetchJson(`/material/outgoingRequest/${id}`, {
      method: "DELETE",
      
    });
  }

  async outgoingRequestItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/outgoingRequestItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingRequestItemDelete(id) {
    this.#zenClient.web.fetchJson(`/material/outgoingRequestItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async outgoingRequestItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestItem?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingRequestItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestItem/${id}`, {
      method: "GET",
      
    });
  }

  async outgoingRequestItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/outgoingRequestItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingRequestOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingRequestOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingRequestOpForwardAuto(id, args) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestOpForwardAuto/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingRequestOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingRequestOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingRequestOpReleaseForPicking(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestOpReleaseForPicking/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingRequestOpReleaseForPickingRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequestOpReleaseForPickingRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingRequestRead(search) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequest?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingRequestReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/outgoingRequest/${id}`, {
      method: "GET",
      
    });
  }

  async outgoingRequestUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/outgoingRequest", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingOrderCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/pickingOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingOrderDelete(id) {
    this.#zenClient.web.fetchJson(`/material/pickingOrder/${id}`, {
      method: "DELETE",
      
    });
  }

  async pickingOrderItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/pickingOrderItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingOrderItemDelete(id) {
    this.#zenClient.web.fetchJson(`/material/pickingOrderItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async pickingOrderItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderItem?${search}`, {
      method: "GET",
      
    });
  }

  async pickingOrderItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderItem/${id}`, {
      method: "GET",
      
    });
  }

  async pickingOrderOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpCreate(args) {
    return this.#zenClient.web.fetchJson("/material/pickingOrderOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async pickingOrderOpDistribute(id, outgoingListId, stockId, quantity) {
    const sp = new URLSearchParams();
    if (outgoingListId) sp.set("outgoingListId", outgoingListId);
    if (stockId) sp.set("stockId", stockId);
    if (quantity) sp.set("quantity", quantity);
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpDistribute/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpDistributeAuto(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpDistributeAuto/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpDistributeRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpDistributeRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpReservationFinish(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpReservationFinish/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpReservationFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpReservationFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpUngrouped(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpUngrouped/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpUngroupedDivergent(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpUngroupedDivergent/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderOpUngroupedRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrderOpUngroupedRevert/${id}`, {
      method: "POST",
      
    });
  }

  async pickingOrderRead(search) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrder?${search}`, {
      method: "GET",
      
    });
  }

  async pickingOrderReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingOrder/${id}`, {
      method: "GET",
      
    });
  }

  async pickingOrderUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/pickingOrder", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingProfileCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/pickingProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pickingProfileDelete(id) {
    this.#zenClient.web.fetchJson(`/material/pickingProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async pickingProfileRead(search) {
    return this.#zenClient.web.fetchJson(`/material/pickingProfile?${search}`, {
      method: "GET",
      
    });
  }

  async pickingProfileReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/pickingProfile/${id}`, {
      method: "GET",
      
    });
  }

  async pickingProfileUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/pickingProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async qualityCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/quality", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async qualityDelete(id) {
    this.#zenClient.web.fetchJson(`/material/quality/${id}`, {
      method: "DELETE",
      
    });
  }

  async qualityRead(search) {
    return this.#zenClient.web.fetchJson(`/material/quality?${search}`, {
      method: "GET",
      
    });
  }

  async qualityReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/quality/${id}`, {
      method: "GET",
      
    });
  }

  async qualityUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/quality", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationDelete(id) {
    this.#zenClient.web.fetchJson(`/material/reservation/${id}`, {
      method: "DELETE",
      
    });
  }

  async reservationOpAllocate(id, args) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpAllocate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reservationOpAllocateAuto(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpAllocateAuto/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpAllocateAutoRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpAllocateAutoRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpAllocateRevert(id, args) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpAllocateRevert/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reservationOpAllocateStock(id, stockId, quantity) {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", stockId);
    if (quantity) sp.set("quantity", quantity);
    return this.#zenClient.web.fetchJson(`/material/reservationOpAllocateStock/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async reservationOpAllocateStockRevert(id, stockId, quantity) {
    const sp = new URLSearchParams();
    if (stockId) sp.set("stockId", stockId);
    if (quantity) sp.set("quantity", quantity);
    return this.#zenClient.web.fetchJson(`/material/reservationOpAllocateStockRevert/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async reservationOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpFinishDivergent(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpFinishDivergent/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpStart(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async reservationOpStartRevert(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async reservationRead(search) {
    return this.#zenClient.web.fetchJson(`/material/reservation?${search}`, {
      method: "GET",
      
    });
  }

  async reservationReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/reservation/${id}`, {
      method: "GET",
      
    });
  }

  async reservationTargetCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/reservationTarget", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationTargetDelete(id) {
    this.#zenClient.web.fetchJson(`/material/reservationTarget/${id}`, {
      method: "DELETE",
      
    });
  }

  async reservationTargetRead(search) {
    return this.#zenClient.web.fetchJson(`/material/reservationTarget?${search}`, {
      method: "GET",
      
    });
  }

  async reservationTargetReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/reservationTarget/${id}`, {
      method: "GET",
      
    });
  }

  async reservationTargetUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/reservationTarget", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async reservationUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/reservation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async serialCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/serial", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async serialDelete(id) {
    this.#zenClient.web.fetchJson(`/material/serial/${id}`, {
      method: "DELETE",
      
    });
  }

  async serialRead(search) {
    return this.#zenClient.web.fetchJson(`/material/serial?${search}`, {
      method: "GET",
      
    });
  }

  async serialReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/serial/${id}`, {
      method: "GET",
      
    });
  }

  async serialUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/serial", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockAvailabilityRead(search) {
    return this.#zenClient.web.fetchJson(`/material/stockAvailability?${search}`, {
      method: "GET",
      
    });
  }

  async stockClusterCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/stockCluster", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockClusterDelete(id) {
    this.#zenClient.web.fetchJson(`/material/stockCluster/${id}`, {
      method: "DELETE",
      
    });
  }

  async stockClusterRead(search) {
    return this.#zenClient.web.fetchJson(`/material/stockCluster?${search}`, {
      method: "GET",
      
    });
  }

  async stockClusterReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/stockCluster/${id}`, {
      method: "GET",
      
    });
  }

  async stockClusterUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/stockCluster", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/stockManagement", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementDelete(id) {
    this.#zenClient.web.fetchJson(`/material/stockManagement/${id}`, {
      method: "DELETE",
      
    });
  }

  async stockManagementItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/stockManagementItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementItemDelete(id) {
    this.#zenClient.web.fetchJson(`/material/stockManagementItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async stockManagementItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/stockManagementItem?${search}`, {
      method: "GET",
      
    });
  }

  async stockManagementItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/stockManagementItem/${id}`, {
      method: "GET",
      
    });
  }

  async stockManagementItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/stockManagementItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockManagementOpImport(args) {
    this.#zenClient.web.fetchJson("/material/stockManagementOpImport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async stockManagementOpUpdateAverageDailyConsumption(args) {
    this.#zenClient.web.fetchJson("/material/stockManagementOpUpdateAverageDailyConsumption", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async stockManagementRead(search) {
    return this.#zenClient.web.fetchJson(`/material/stockManagement?${search}`, {
      method: "GET",
      
    });
  }

  async stockManagementReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/stockManagement/${id}`, {
      method: "GET",
      
    });
  }

  async stockManagementUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/stockManagement", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stockOpUpdate(id, args) {
    return this.#zenClient.web.fetchJson(`/material/stockOpUpdate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async stockPointRead(dateTime, search) {
    const sp = new URLSearchParams();
    if (dateTime) sp.set("dateTime", dateTime);
    return this.#zenClient.web.fetchJson(`/material/stockPoint?${search}?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async stockRead(search) {
    return this.#zenClient.web.fetchJson(`/material/stock?${search}`, {
      method: "GET",
      
    });
  }

  async stockReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/stock/${id}`, {
      method: "GET",
      
    });
  }

  async stockSummaryRead(search) {
    return this.#zenClient.web.fetchJson(`/material/stockSummary?${search}`, {
      method: "GET",
      
    });
  }

  async stockSummaryReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/stockSummary/${id}`, {
      method: "GET",
      
    });
  }

  async stockTransactionRead(search) {
    return this.#zenClient.web.fetchJson(`/material/stockTransaction?${search}`, {
      method: "GET",
      
    });
  }

  async volumeCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/volume", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async volumeDelete(id) {
    this.#zenClient.web.fetchJson(`/material/volume/${id}`, {
      method: "DELETE",
      
    });
  }

  async volumeItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/volumeItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async volumeItemDelete(id) {
    this.#zenClient.web.fetchJson(`/material/volumeItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async volumeItemRead(search) {
    return this.#zenClient.web.fetchJson(`/material/volumeItem?${search}`, {
      method: "GET",
      
    });
  }

  async volumeItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/volumeItem/${id}`, {
      method: "GET",
      
    });
  }

  async volumeOpCreate(args) {
    return this.#zenClient.web.fetchJson("/material/volumeOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async volumeRead(search) {
    return this.#zenClient.web.fetchJson(`/material/volume?${search}`, {
      method: "GET",
      
    });
  }

  async volumeReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/volume/${id}`, {
      method: "GET",
      
    });
  }

  async volumeUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/volume", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async warehouseCreate(bean) {
    return this.#zenClient.web.fetchJson("/material/warehouse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async warehouseDelete(id) {
    this.#zenClient.web.fetchJson(`/material/warehouse/${id}`, {
      method: "DELETE",
      
    });
  }

  async warehouseRead(search) {
    return this.#zenClient.web.fetchJson(`/material/warehouse?${search}`, {
      method: "GET",
      
    });
  }

  async warehouseReadById(id) {
    return this.#zenClient.web.fetchJson(`/material/warehouse/${id}`, {
      method: "GET",
      
    });
  }

  async warehouseUpdate(bean) {
    return this.#zenClient.web.fetchJson("/material/warehouse", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
