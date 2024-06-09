import { Client } from "../../Client.js";
import { FiscalProfileOperation } from "./FiscalProfileOperation.js";
import { FiscalProfilePerson } from "./FiscalProfilePerson.js";
import { FiscalProfileProduct } from "./FiscalProfileProduct.js";
import { FiscalRegion } from "./FiscalRegion.js";
import { FiscalYear } from "./FiscalYear.js";
import { IncomingInvoice } from "./IncomingInvoice.js";
import { IncomingInvoiceItem } from "./IncomingInvoiceItem.js";
import { InvoiceItemAccounting } from "./InvoiceItemAccounting.js";
import { InvoicePayment } from "./InvoicePayment.js";
import { InvoiceReference } from "./InvoiceReference.js";
import { InvoiceSeries } from "./InvoiceSeries.js";
import { OutgoingInvoice } from "./OutgoingInvoice.js";
import { OutgoingInvoiceItem } from "./OutgoingInvoiceItem.js";

export class FiscalService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async fiscalProfileOperationCreate(bean: FiscalProfileOperation): Promise<FiscalProfileOperation> {
    return this.#client.web.fetchJson("/fiscal/fiscalProfileOperation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalProfileOperationDelete(id: number): Promise<FiscalProfileOperation> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfileOperation/${id}`, {
      method: "DELETE",
      
    });
  }

  async fiscalProfileOperationOpReadByCode(fiscalRegionCode: string, code: string): Promise<FiscalProfileOperation> {
    const sp = new URLSearchParams();
    if (fiscalRegionCode) sp.set("fiscalRegionCode", String(fiscalRegionCode));
    if (code) sp.set("code", String(code));
    return this.#client.web.fetchJson(`/fiscal/fiscalProfileOperationOpReadByCode?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async fiscalProfileOperationRead(search: any): Promise<FiscalProfileOperation[]> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfileOperation?${search}`, {
      method: "GET",
      
    });
  }

  async fiscalProfileOperationReadById(id: number): Promise<FiscalProfileOperation> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfileOperation/${id}`, {
      method: "GET",
      
    });
  }

  async fiscalProfileOperationUpdate(bean: FiscalProfileOperation): Promise<FiscalProfileOperation> {
    return this.#client.web.fetchJson("/fiscal/fiscalProfileOperation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalProfilePersonCreate(bean: FiscalProfilePerson): Promise<FiscalProfilePerson> {
    return this.#client.web.fetchJson("/fiscal/fiscalProfilePerson", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalProfilePersonDelete(id: number): Promise<FiscalProfilePerson> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfilePerson/${id}`, {
      method: "DELETE",
      
    });
  }

  async fiscalProfilePersonRead(search: any): Promise<FiscalProfilePerson[]> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfilePerson?${search}`, {
      method: "GET",
      
    });
  }

  async fiscalProfilePersonReadById(id: number): Promise<FiscalProfilePerson> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfilePerson/${id}`, {
      method: "GET",
      
    });
  }

  async fiscalProfilePersonUpdate(bean: FiscalProfilePerson): Promise<FiscalProfilePerson> {
    return this.#client.web.fetchJson("/fiscal/fiscalProfilePerson", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalProfileProductCreate(bean: FiscalProfileProduct): Promise<FiscalProfileProduct> {
    return this.#client.web.fetchJson("/fiscal/fiscalProfileProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalProfileProductDelete(id: number): Promise<FiscalProfileProduct> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfileProduct/${id}`, {
      method: "DELETE",
      
    });
  }

  async fiscalProfileProductRead(search: any): Promise<FiscalProfileProduct[]> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfileProduct?${search}`, {
      method: "GET",
      
    });
  }

  async fiscalProfileProductReadById(id: number): Promise<FiscalProfileProduct> {
    return this.#client.web.fetchJson(`/fiscal/fiscalProfileProduct/${id}`, {
      method: "GET",
      
    });
  }

  async fiscalProfileProductUpdate(bean: FiscalProfileProduct): Promise<FiscalProfileProduct> {
    return this.#client.web.fetchJson("/fiscal/fiscalProfileProduct", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalRegionCreate(bean: FiscalRegion): Promise<FiscalRegion> {
    return this.#client.web.fetchJson("/fiscal/fiscalRegion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalRegionDelete(id: number): Promise<FiscalRegion> {
    return this.#client.web.fetchJson(`/fiscal/fiscalRegion/${id}`, {
      method: "DELETE",
      
    });
  }

  async fiscalRegionOpReadByCode(code: string): Promise<FiscalRegion> {
    const sp = new URLSearchParams();
    if (code) sp.set("code", String(code));
    return this.#client.web.fetchJson(`/fiscal/fiscalRegionOpReadByCode?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async fiscalRegionRead(search: any): Promise<FiscalRegion[]> {
    return this.#client.web.fetchJson(`/fiscal/fiscalRegion?${search}`, {
      method: "GET",
      
    });
  }

  async fiscalRegionReadById(id: number): Promise<FiscalRegion> {
    return this.#client.web.fetchJson(`/fiscal/fiscalRegion/${id}`, {
      method: "GET",
      
    });
  }

  async fiscalRegionUpdate(bean: FiscalRegion): Promise<FiscalRegion> {
    return this.#client.web.fetchJson("/fiscal/fiscalRegion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalYearCreate(bean: FiscalYear): Promise<FiscalYear> {
    return this.#client.web.fetchJson("/fiscal/fiscalYear", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async fiscalYearDelete(id: number): Promise<FiscalYear> {
    return this.#client.web.fetchJson(`/fiscal/fiscalYear/${id}`, {
      method: "DELETE",
      
    });
  }

  async fiscalYearOpPartialClosure(id: number, date: Date): Promise<void> {
    const sp = new URLSearchParams();
    if (date) sp.set("date", String(date));
    return this.#client.web.fetchJson(`/fiscal/fiscalYearOpPartialClosure/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async fiscalYearOpPartialClosureRevert(id: number, date: Date): Promise<void> {
    const sp = new URLSearchParams();
    if (date) sp.set("date", String(date));
    return this.#client.web.fetchJson(`/fiscal/fiscalYearOpPartialClosureRevert/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async fiscalYearOpPublish(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/fiscalYearOpPublish/${id}`, {
      method: "POST",
      
    });
  }

  async fiscalYearOpPublishRevert(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/fiscal/fiscalYearOpPublishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async fiscalYearOpRead(companyId: number, date: Date): Promise<FiscalYear> {
    const sp = new URLSearchParams();
    if (companyId) sp.set("companyId", String(companyId));
    if (date) sp.set("date", String(date));
    return this.#client.web.fetchJson(`/fiscal/fiscalYearOpRead?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async fiscalYearRead(search: any): Promise<FiscalYear[]> {
    return this.#client.web.fetchJson(`/fiscal/fiscalYear?${search}`, {
      method: "GET",
      
    });
  }

  async fiscalYearReadById(id: number): Promise<FiscalYear> {
    return this.#client.web.fetchJson(`/fiscal/fiscalYear/${id}`, {
      method: "GET",
      
    });
  }

  async fiscalYearUpdate(bean: FiscalYear): Promise<FiscalYear> {
    return this.#client.web.fetchJson("/fiscal/fiscalYear", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceCreate(bean: IncomingInvoice): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceDelete(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoice/${id}`, {
      method: "DELETE",
      
    });
  }

  async incomingInvoiceItemCreate(bean: IncomingInvoiceItem): Promise<IncomingInvoiceItem> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoiceItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceItemDelete(id: number): Promise<IncomingInvoiceItem> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async incomingInvoiceItemRead(search: any): Promise<IncomingInvoiceItem[]> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceItem?${search}`, {
      method: "GET",
      
    });
  }

  async incomingInvoiceItemReadById(id: number): Promise<IncomingInvoiceItem> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceItem/${id}`, {
      method: "GET",
      
    });
  }

  async incomingInvoiceItemUpdate(bean: IncomingInvoiceItem): Promise<IncomingInvoiceItem> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoiceItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceOpApprove(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async incomingInvoiceOpApproveDivergences(id: number, args: any): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpApproveDivergences/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async incomingInvoiceOpApproveRevert(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async incomingInvoiceOpCreate(args: any): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoiceOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async incomingInvoiceOpCreateFromIncomingList(args: any): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoiceOpCreateFromIncomingList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async incomingInvoiceOpPrepare(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async incomingInvoiceOpPrepareRevert(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async incomingInvoiceOpReject(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpReject/${id}`, {
      method: "POST",
      
    });
  }

  async incomingInvoiceOpRejectRevert(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpRejectRevert/${id}`, {
      method: "POST",
      
    });
  }

  async incomingInvoiceOpReturn(id: number, args: any): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoiceOpReturn/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async incomingInvoiceOpUpdate(bean: IncomingInvoice): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoiceOpUpdate", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingInvoicePaymentCreate(bean: InvoicePayment): Promise<InvoicePayment> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoicePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingInvoicePaymentDelete(id: number): Promise<InvoicePayment> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoicePayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async incomingInvoicePaymentRead(search: any): Promise<InvoicePayment[]> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoicePayment?${search}`, {
      method: "GET",
      
    });
  }

  async incomingInvoicePaymentReadById(id: number): Promise<InvoicePayment> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoicePayment/${id}`, {
      method: "GET",
      
    });
  }

  async incomingInvoicePaymentUpdate(bean: InvoicePayment): Promise<InvoicePayment> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoicePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async incomingInvoiceRead(search: any): Promise<IncomingInvoice[]> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoice?${search}`, {
      method: "GET",
      
    });
  }

  async incomingInvoiceReadById(id: number): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/incomingInvoice/${id}`, {
      method: "GET",
      
    });
  }

  async incomingInvoiceUpdate(bean: IncomingInvoice): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson("/fiscal/incomingInvoice", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async invoiceItemAccountingCreate(bean: InvoiceItemAccounting): Promise<InvoiceItemAccounting> {
    return this.#client.web.fetchJson("/fiscal/invoiceItemAccounting", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async invoiceItemAccountingDelete(id: number): Promise<InvoiceItemAccounting> {
    return this.#client.web.fetchJson(`/fiscal/invoiceItemAccounting/${id}`, {
      method: "DELETE",
      
    });
  }

  async invoiceItemAccountingRead(search: any): Promise<InvoiceItemAccounting[]> {
    return this.#client.web.fetchJson(`/fiscal/invoiceItemAccounting?${search}`, {
      method: "GET",
      
    });
  }

  async invoiceItemAccountingReadById(id: number): Promise<InvoiceItemAccounting> {
    return this.#client.web.fetchJson(`/fiscal/invoiceItemAccounting/${id}`, {
      method: "GET",
      
    });
  }

  async invoiceItemAccountingUpdate(bean: InvoiceItemAccounting): Promise<InvoiceItemAccounting> {
    return this.#client.web.fetchJson("/fiscal/invoiceItemAccounting", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async invoiceReferenceCreate(bean: InvoiceReference): Promise<InvoiceReference> {
    return this.#client.web.fetchJson("/fiscal/invoiceReference", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async invoiceReferenceDelete(id: number): Promise<InvoiceReference> {
    return this.#client.web.fetchJson(`/fiscal/invoiceReference/${id}`, {
      method: "DELETE",
      
    });
  }

  async invoiceReferenceRead(search: any): Promise<InvoiceReference[]> {
    return this.#client.web.fetchJson(`/fiscal/invoiceReference?${search}`, {
      method: "GET",
      
    });
  }

  async invoiceReferenceReadById(id: number): Promise<InvoiceReference> {
    return this.#client.web.fetchJson(`/fiscal/invoiceReference/${id}`, {
      method: "GET",
      
    });
  }

  async invoiceReferenceUpdate(bean: InvoiceReference): Promise<InvoiceReference> {
    return this.#client.web.fetchJson("/fiscal/invoiceReference", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async invoiceSeriesCreate(bean: InvoiceSeries): Promise<InvoiceSeries> {
    return this.#client.web.fetchJson("/fiscal/invoiceSeries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async invoiceSeriesDelete(id: number): Promise<InvoiceSeries> {
    return this.#client.web.fetchJson(`/fiscal/invoiceSeries/${id}`, {
      method: "DELETE",
      
    });
  }

  async invoiceSeriesOpGetNextNumber(id: number): Promise<number> {
    return Number(this.#client.web.fetchText(`/fiscal/invoiceSeriesOpGetNextNumber/${id}`, {
      method: "POST",
      
    }));
  }

  async invoiceSeriesOpUpdateLastNumber(id: number, lastNumber: number): Promise<void> {
    const sp = new URLSearchParams();
    if (lastNumber) sp.set("lastNumber", String(lastNumber));
    return this.#client.web.fetchJson(`/fiscal/invoiceSeriesOpUpdateLastNumber/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async invoiceSeriesRead(search: any): Promise<InvoiceSeries[]> {
    return this.#client.web.fetchJson(`/fiscal/invoiceSeries?${search}`, {
      method: "GET",
      
    });
  }

  async invoiceSeriesReadById(id: number): Promise<InvoiceSeries> {
    return this.#client.web.fetchJson(`/fiscal/invoiceSeries/${id}`, {
      method: "GET",
      
    });
  }

  async invoiceSeriesUpdate(bean: InvoiceSeries): Promise<InvoiceSeries> {
    return this.#client.web.fetchJson("/fiscal/invoiceSeries", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceCreate(bean: OutgoingInvoice): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceDelete(id: number): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoice/${id}`, {
      method: "DELETE",
      
    });
  }

  async outgoingInvoiceItemCreate(bean: OutgoingInvoiceItem): Promise<OutgoingInvoiceItem> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoiceItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceItemDelete(id: number): Promise<OutgoingInvoiceItem> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async outgoingInvoiceItemRead(search: any): Promise<OutgoingInvoiceItem[]> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceItem?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingInvoiceItemReadById(id: number): Promise<OutgoingInvoiceItem> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceItem/${id}`, {
      method: "GET",
      
    });
  }

  async outgoingInvoiceItemUpdate(bean: OutgoingInvoiceItem): Promise<OutgoingInvoiceItem> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoiceItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceOpApprove(id: number): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingInvoiceOpApproveRevert(id: number): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingInvoiceOpCancel(id: number, args: any): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingInvoiceOpCreate(args: any): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoiceOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingInvoiceOpDiscount(id: number, args: any): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceOpDiscount/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingInvoiceOpPrepare(id: number): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingInvoiceOpPrepareRevert(id: number): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async outgoingInvoiceOpReturn(id: number, args: any): Promise<IncomingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoiceOpReturn/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async outgoingInvoiceOpUpdate(bean: OutgoingInvoice): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoiceOpUpdate", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingInvoicePaymentCreate(bean: InvoicePayment): Promise<InvoicePayment> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoicePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingInvoicePaymentDelete(id: number): Promise<InvoicePayment> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoicePayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async outgoingInvoicePaymentRead(search: any): Promise<InvoicePayment[]> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoicePayment?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingInvoicePaymentReadById(id: number): Promise<InvoicePayment> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoicePayment/${id}`, {
      method: "GET",
      
    });
  }

  async outgoingInvoicePaymentUpdate(bean: InvoicePayment): Promise<InvoicePayment> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoicePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async outgoingInvoiceRead(search: any): Promise<OutgoingInvoice[]> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoice?${search}`, {
      method: "GET",
      
    });
  }

  async outgoingInvoiceReadById(id: number): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/fiscal/outgoingInvoice/${id}`, {
      method: "GET",
      
    });
  }

  async outgoingInvoiceUpdate(bean: OutgoingInvoice): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson("/fiscal/outgoingInvoice", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
