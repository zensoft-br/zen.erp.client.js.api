export class SaleService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async priceFormationCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceFormation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceFormationDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/priceFormation/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceFormationItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceFormationItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceFormationItemDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/priceFormationItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceFormationItemRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/priceFormationItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceFormationItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/priceFormationItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceFormationItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceFormationItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceFormationOpCalculate(id, value) {
    const sp = new URLSearchParams();
    if (value) sp.set("value", value);
    return this.#zenClient.web.fetchJson(`/sale/priceFormationOpCalculate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async priceFormationOpCalculateProductPacking(id, productPackingId, value) {
    const sp = new URLSearchParams();
    if (productPackingId) sp.set("productPackingId", productPackingId);
    if (value) sp.set("value", value);
    return this.#zenClient.web.fetchJson(`/sale/priceFormationOpCalculateProductPacking/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async priceFormationOpClone(id) {
    return this.#zenClient.web.fetchJson(`/sale/priceFormationOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async priceFormationRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/priceFormation?${search}`, {
      method: "GET",
      
    });
  }

  async priceFormationReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/priceFormation/${id}`, {
      method: "GET",
      
    });
  }

  async priceFormationUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceFormation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/priceList/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListItemDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/priceListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/priceListItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceListItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/priceListItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceListItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/priceList?${search}`, {
      method: "GET",
      
    });
  }

  async priceListReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/priceList/${id}`, {
      method: "GET",
      
    });
  }

  async priceListUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/priceList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/quote/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/quoteItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/quoteItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemOpFill(id, args) {
    return this.#zenClient.web.fetchJson(`/sale/quoteItemOpFill/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteItemRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/quoteItem?${search}`, {
      method: "GET",
      
    });
  }

  async quoteItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteItem/${id}`, {
      method: "GET",
      
    });
  }

  async quoteItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/quoteItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteOpApprove(id, args) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpApprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpCancel(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancelRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpReject(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpReject/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpRejectRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpRejectRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpStart(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpStartRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpSubmit(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpSubmit/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpSubmitRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/quoteOpSubmitRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/quote?${search}`, {
      method: "GET",
      
    });
  }

  async quoteReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/quote/${id}`, {
      method: "GET",
      
    });
  }

  async quoteUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/quote", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/sale", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/sale/${id}`, {
      method: "DELETE",
      
    });
  }

  async saleItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/saleItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleItemDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/saleItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async saleItemRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/saleItem?${search}`, {
      method: "GET",
      
    });
  }

  async saleItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleItem/${id}`, {
      method: "GET",
      
    });
  }

  async saleItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/saleItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpApproveUnconditionally(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpApproveUnconditionally/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpCancel(id, args) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpCancelRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpClone(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpCreate(args) {
    return this.#zenClient.web.fetchJson("/sale/saleOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpMerge(ids) {
    return this.#zenClient.web.fetchJson("/sale/saleOpMerge", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(ids),

    });
  }

  async saleOpPickingOrderCreate(id, args) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpPickingOrderCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpReleaseForPicking(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpReleaseForPicking/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpReleaseForPickingRevert(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleOpReleaseForPickingRevert/${id}`, {
      method: "POST",
      
    });
  }

  async salePaymentCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/salePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salePaymentDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/salePayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async salePaymentRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/salePayment?${search}`, {
      method: "GET",
      
    });
  }

  async salePaymentReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/salePayment/${id}`, {
      method: "GET",
      
    });
  }

  async salePaymentUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/salePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleProfileCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/saleProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleProfileDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/saleProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async saleProfileRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/saleProfile?${search}`, {
      method: "GET",
      
    });
  }

  async saleProfileReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/saleProfile/${id}`, {
      method: "GET",
      
    });
  }

  async saleProfileUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/saleProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/sale?${search}`, {
      method: "GET",
      
    });
  }

  async saleReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/sale/${id}`, {
      method: "GET",
      
    });
  }

  async saleUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/sale", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salesCommissionCreate(bean) {
    return this.#zenClient.web.fetchJson("/sale/salesCommission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salesCommissionDelete(id) {
    this.#zenClient.web.fetchJson(`/sale/salesCommission/${id}`, {
      method: "DELETE",
      
    });
  }

  async salesCommissionRead(search) {
    return this.#zenClient.web.fetchJson(`/sale/salesCommission?${search}`, {
      method: "GET",
      
    });
  }

  async salesCommissionReadById(id) {
    return this.#zenClient.web.fetchJson(`/sale/salesCommission/${id}`, {
      method: "GET",
      
    });
  }

  async salesCommissionUpdate(bean) {
    return this.#zenClient.web.fetchJson("/sale/salesCommission", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
