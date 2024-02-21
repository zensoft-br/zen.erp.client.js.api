export class FiscalService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async fiscalProfileOperationCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalProfileOperation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalProfileOperationDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/fiscalProfileOperation/${id}`, {
      method: "DELETE",

    });
  }

  async fiscalProfileOperationOpReadByCode(fiscalRegionCode, code) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalProfileOperationOpReadByCode?fiscalRegionCode=${fiscalRegionCode}&code=${code}`, {
      method: "POST",

    });
  }

  async fiscalProfileOperationRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalProfileOperation?${search}`, {
      method: "GET",

    });
  }

  async fiscalProfileOperationReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalProfileOperation/${id}`, {
      method: "GET",

    });
  }

  async fiscalProfileOperationUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalProfileOperation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalProfilePersonCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalProfilePerson", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalProfilePersonDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/fiscalProfilePerson/${id}`, {
      method: "DELETE",

    });
  }

  async fiscalProfilePersonRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalProfilePerson?${search}`, {
      method: "GET",

    });
  }

  async fiscalProfilePersonReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalProfilePerson/${id}`, {
      method: "GET",

    });
  }

  async fiscalProfilePersonUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalProfilePerson", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalProfileProductCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalProfileProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalProfileProductDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/fiscalProfileProduct/${id}`, {
      method: "DELETE",

    });
  }

  async fiscalProfileProductRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalProfileProduct?${search}`, {
      method: "GET",

    });
  }

  async fiscalProfileProductReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalProfileProduct/${id}`, {
      method: "GET",

    });
  }

  async fiscalProfileProductUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalProfileProduct", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalRegionCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalRegion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalRegionDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/fiscalRegion/${id}`, {
      method: "DELETE",

    });
  }

  async fiscalRegionOpReadByCode(code) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalRegionOpReadByCode?code=${code}`, {
      method: "POST",

    });
  }

  async fiscalRegionRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalRegion?${search}`, {
      method: "GET",

    });
  }

  async fiscalRegionReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalRegion/${id}`, {
      method: "GET",

    });
  }

  async fiscalRegionUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalRegion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalYearCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalYear", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async fiscalYearDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/fiscalYear/${id}`, {
      method: "DELETE",

    });
  }

  async fiscalYearOpPublish(id) {
    this.#zenClient.web.fetchJson(`/fiscal/fiscalYearOpPublish/${id}`, {
      method: "POST",

    });
  }

  async fiscalYearOpPublishRevert(id) {
    this.#zenClient.web.fetchJson(`/fiscal/fiscalYearOpPublishRevert/${id}`, {
      method: "POST",

    });
  }

  async fiscalYearOpRead(companyId, date) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalYearOpRead?companyId=${companyId}&date=${date}`, {
      method: "POST",

    });
  }

  async fiscalYearRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalYear?${search}`, {
      method: "GET",

    });
  }

  async fiscalYearReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/fiscalYear/${id}`, {
      method: "GET",

    });
  }

  async fiscalYearUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/fiscalYear", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/incomingInvoice/${id}`, {
      method: "DELETE",

    });
  }

  async incomingInvoiceItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoiceItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceItemDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceItem/${id}`, {
      method: "DELETE",

    });
  }

  async incomingInvoiceItemRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceItem?${search}`, {
      method: "GET",

    });
  }

  async incomingInvoiceItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceItem/${id}`, {
      method: "GET",

    });
  }

  async incomingInvoiceItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoiceItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpApprove/${id}`, {
      method: "POST",

    });
  }

  async incomingInvoiceOpApproveDivergences(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpApproveDivergences/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async incomingInvoiceOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpApproveRevert/${id}`, {
      method: "POST",

    });
  }

  async incomingInvoiceOpCreate(args) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoiceOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async incomingInvoiceOpCreateFromIncomingList(args) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoiceOpCreateFromIncomingList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async incomingInvoiceOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpPrepare/${id}`, {
      method: "POST",

    });
  }

  async incomingInvoiceOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpPrepareRevert/${id}`, {
      method: "POST",

    });
  }

  async incomingInvoiceOpReject(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpReject/${id}`, {
      method: "POST",

    });
  }

  async incomingInvoiceOpRejectRevert(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpRejectRevert/${id}`, {
      method: "POST",

    });
  }

  async incomingInvoiceOpReturn(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoiceOpReturn/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async incomingInvoicePaymentCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoicePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async incomingInvoicePaymentDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/incomingInvoicePayment/${id}`, {
      method: "DELETE",

    });
  }

  async incomingInvoicePaymentRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoicePayment?${search}`, {
      method: "GET",

    });
  }

  async incomingInvoicePaymentReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoicePayment/${id}`, {
      method: "GET",

    });
  }

  async incomingInvoicePaymentUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoicePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoice?${search}`, {
      method: "GET",

    });
  }

  async incomingInvoiceReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/incomingInvoice/${id}`, {
      method: "GET",

    });
  }

  async incomingInvoiceUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/incomingInvoice", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async invoiceItemAccountingCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/invoiceItemAccounting", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async invoiceItemAccountingDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/invoiceItemAccounting/${id}`, {
      method: "DELETE",

    });
  }

  async invoiceItemAccountingRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/invoiceItemAccounting?${search}`, {
      method: "GET",

    });
  }

  async invoiceReferenceCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/invoiceReference", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async invoiceReferenceDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/invoiceReference/${id}`, {
      method: "DELETE",

    });
  }

  async invoiceReferenceRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/invoiceReference?${search}`, {
      method: "GET",

    });
  }

  async invoiceReferenceReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/invoiceReference/${id}`, {
      method: "GET",

    });
  }

  async invoiceReferenceUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/invoiceReference", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async invoiceSeriesCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/invoiceSeries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async invoiceSeriesDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/invoiceSeries/${id}`, {
      method: "DELETE",

    });
  }

  async invoiceSeriesOpGetNextNumber(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/invoiceSeriesOpGetNextNumber/${id}`, {
      method: "POST",

    });
  }

  async invoiceSeriesOpUpdateLastNumber(id, lastNumber) {
    this.#zenClient.web.fetchJson(`/fiscal/invoiceSeriesOpUpdateLastNumber/${id}?lastNumber=${lastNumber}`, {
      method: "POST",

    });
  }

  async invoiceSeriesRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/invoiceSeries?${search}`, {
      method: "GET",

    });
  }

  async invoiceSeriesReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/invoiceSeries/${id}`, {
      method: "GET",

    });
  }

  async invoiceSeriesUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/invoiceSeries", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/outgoingInvoice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoice/${id}`, {
      method: "DELETE",

    });
  }

  async outgoingInvoiceItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/outgoingInvoiceItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceItemDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceItem/${id}`, {
      method: "DELETE",

    });
  }

  async outgoingInvoiceItemRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceItem?${search}`, {
      method: "GET",

    });
  }

  async outgoingInvoiceItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceItem/${id}`, {
      method: "GET",

    });
  }

  async outgoingInvoiceItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/outgoingInvoiceItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceOpApprove/${id}`, {
      method: "POST",

    });
  }

  async outgoingInvoiceOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceOpApproveRevert/${id}`, {
      method: "POST",

    });
  }

  async outgoingInvoiceOpCancel(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async outgoingInvoiceOpCreate(args) {
    return this.#zenClient.web.fetchJson("/fiscal/outgoingInvoiceOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async outgoingInvoiceOpDiscount(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceOpDiscount/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async outgoingInvoiceOpPrepare(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceOpPrepare/${id}`, {
      method: "POST",

    });
  }

  async outgoingInvoiceOpPrepareRevert(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceOpPrepareRevert/${id}`, {
      method: "POST",

    });
  }

  async outgoingInvoiceOpReturn(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoiceOpReturn/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async outgoingInvoicePaymentCreate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/outgoingInvoicePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async outgoingInvoicePaymentDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoicePayment/${id}`, {
      method: "DELETE",

    });
  }

  async outgoingInvoicePaymentRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoicePayment?${search}`, {
      method: "GET",

    });
  }

  async outgoingInvoicePaymentReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoicePayment/${id}`, {
      method: "GET",

    });
  }

  async outgoingInvoicePaymentUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/outgoingInvoicePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoice?${search}`, {
      method: "GET",

    });
  }

  async outgoingInvoiceReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/outgoingInvoice/${id}`, {
      method: "GET",

    });
  }

  async outgoingInvoiceUpdate(bean) {
    return this.#zenClient.web.fetchJson("/fiscal/outgoingInvoice", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
