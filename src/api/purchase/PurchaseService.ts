export class PurchaseService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async priceListCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/priceList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/priceList/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/priceListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListItemDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/priceListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/priceListItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceListItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/priceListItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceListItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/priceListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/priceList?${search}`, {
      method: "GET",
      
    });
  }

  async priceListReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/priceList/${id}`, {
      method: "GET",
      
    });
  }

  async priceListUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/priceList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/proposal", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/proposal/${id}`, {
      method: "DELETE",
      
    });
  }

  async proposalItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/proposalItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalItemDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/proposalItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async proposalItemOpApprove(id, args) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalItemOpApprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async proposalItemOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalItemOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalItemOpDisapprove(id, args) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalItemOpDisapprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async proposalItemOpDisapproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalItemOpDisapproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalItemRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalItem?${search}`, {
      method: "GET",
      
    });
  }

  async proposalItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalItem/${id}`, {
      method: "GET",
      
    });
  }

  async proposalItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/proposalItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalOpCancel(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpCancelRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposalOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/proposal?${search}`, {
      method: "GET",
      
    });
  }

  async proposalReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/proposal/${id}`, {
      method: "GET",
      
    });
  }

  async proposalUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/proposal", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/purchase/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchaseItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseItemDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/purchaseItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseItemRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseItem?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseItem/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchaseItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpCancel(id, args) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async purchaseOpCancelRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpClone(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpFinish(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchasePaymentCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchasePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchasePaymentDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/purchasePayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchasePaymentRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/purchasePayment?${search}`, {
      method: "GET",
      
    });
  }

  async purchasePaymentReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchasePayment/${id}`, {
      method: "GET",
      
    });
  }

  async purchasePaymentUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchasePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseProfileCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchaseProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseProfileDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/purchaseProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseProfileRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseProfile?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseProfileReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchaseProfile/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseProfileUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchaseProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/purchase?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/purchase/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/purchase", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/quote/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/quoteItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemDelete(id) {
    this.#zenClient.web.fetchJson(`/purchase/quoteItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteItem?${search}`, {
      method: "GET",
      
    });
  }

  async quoteItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteItem/${id}`, {
      method: "GET",
      
    });
  }

  async quoteItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/quoteItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancel(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancelRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCreate(args) {
    return this.#zenClient.web.fetchJson("/purchase/quoteOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpFinish(id, args) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpFinish/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpFinishRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quoteOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteRead(search) {
    return this.#zenClient.web.fetchJson(`/purchase/quote?${search}`, {
      method: "GET",
      
    });
  }

  async quoteReadById(id) {
    return this.#zenClient.web.fetchJson(`/purchase/quote/${id}`, {
      method: "GET",
      
    });
  }

  async quoteUpdate(bean) {
    return this.#zenClient.web.fetchJson("/purchase/quote", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
