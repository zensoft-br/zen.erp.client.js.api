import { Client } from "../../Client.js";
import { ArgsPriceFormationOpCalculate } from "./ArgsPriceFormationOpCalculate.js";
import { ArgsQuoteOpCreate } from "./ArgsQuoteOpCreate.js";
import { ArgsSaleOpCancel } from "./ArgsSaleOpCancel.js";
import { ArgsSaleOpCreate } from "./ArgsSaleOpCreate.js";
import { ArgsSaleOpForwardAuto } from "./ArgsSaleOpForwardAuto.js";
import { ArgsSaleOpPickingOrderCreate } from "./ArgsSaleOpPickingOrderCreate.js";
import { ArgsSaleOpSplit } from "./ArgsSaleOpSplit.js";
import { OutgoingInvoice } from "../fiscal/OutgoingInvoice.js";
import { PickingOrder } from "../material/PickingOrder.js";
import { PriceFormation } from "./PriceFormation.js";
import { PriceFormationItem } from "./PriceFormationItem.js";
import { PriceFormationSimulation } from "./PriceFormationSimulation.js";
import { PriceListRetail } from "./PriceListRetail.js";
import { PriceListRetailItem } from "./PriceListRetailItem.js";
import { Quote } from "./Quote.js";
import { QuoteItem } from "./QuoteItem.js";
import { QuoteItemProposal } from "./QuoteItemProposal.js";
import { Sale } from "./Sale.js";
import { SaleItem } from "./SaleItem.js";
import { SalePayment } from "./SalePayment.js";
import { SaleProfile } from "./SaleProfile.js";

export class SaleService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async priceFormationCreate(bean: PriceFormation): Promise<PriceFormation> {
    return this.#client.web.fetchJson("/sale/priceFormation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceFormationDelete(id: number): Promise<PriceFormation> {
    return this.#client.web.fetchJson(`/sale/priceFormation/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceFormationItemCreate(bean: PriceFormationItem): Promise<PriceFormationItem> {
    return this.#client.web.fetchJson("/sale/priceFormationItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceFormationItemDelete(id: number): Promise<PriceFormationItem> {
    return this.#client.web.fetchJson(`/sale/priceFormationItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceFormationItemRead(search: any): Promise<PriceFormationItem[]> {
    return this.#client.web.fetchJson(`/sale/priceFormationItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceFormationItemReadById(id: number): Promise<PriceFormationItem> {
    return this.#client.web.fetchJson(`/sale/priceFormationItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceFormationItemUpdate(bean: PriceFormationItem): Promise<PriceFormationItem> {
    return this.#client.web.fetchJson("/sale/priceFormationItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceFormationOpCalculate(id: number, args: ArgsPriceFormationOpCalculate): Promise<number> {
    return this.#client.web.fetchJson(`/sale/priceFormationOpCalculate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async priceFormationOpClone(id: number): Promise<PriceFormation> {
    return this.#client.web.fetchJson(`/sale/priceFormationOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async priceFormationOpSimulation(id: number, args: ArgsPriceFormationOpCalculate): Promise<PriceFormationSimulation> {
    return this.#client.web.fetchJson(`/sale/priceFormationOpSimulation/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async priceFormationRead(search: any): Promise<PriceFormation[]> {
    return this.#client.web.fetchJson(`/sale/priceFormation?${search}`, {
      method: "GET",
      
    });
  }

  async priceFormationReadById(id: number): Promise<PriceFormation> {
    return this.#client.web.fetchJson(`/sale/priceFormation/${id}`, {
      method: "GET",
      
    });
  }

  async priceFormationUpdate(bean: PriceFormation): Promise<PriceFormation> {
    return this.#client.web.fetchJson("/sale/priceFormation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListCreate(bean: PriceListRetail): Promise<PriceListRetail> {
    return this.#client.web.fetchJson("/sale/priceList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListDelete(id: number): Promise<PriceListRetail> {
    return this.#client.web.fetchJson(`/sale/priceList/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemCreate(bean: PriceListRetailItem): Promise<PriceListRetailItem> {
    return this.#client.web.fetchJson("/sale/priceListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListItemDelete(id: number): Promise<PriceListRetailItem> {
    return this.#client.web.fetchJson(`/sale/priceListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemRead(search: any): Promise<PriceListRetailItem[]> {
    return this.#client.web.fetchJson(`/sale/priceListItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceListItemReadById(id: number): Promise<PriceListRetailItem> {
    return this.#client.web.fetchJson(`/sale/priceListItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceListItemUpdate(bean: PriceListRetailItem): Promise<PriceListRetailItem> {
    return this.#client.web.fetchJson("/sale/priceListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListRead(search: any): Promise<PriceListRetail[]> {
    return this.#client.web.fetchJson(`/sale/priceList?${search}`, {
      method: "GET",
      
    });
  }

  async priceListReadById(id: number): Promise<PriceListRetail> {
    return this.#client.web.fetchJson(`/sale/priceList/${id}`, {
      method: "GET",
      
    });
  }

  async priceListUpdate(bean: PriceListRetail): Promise<PriceListRetail> {
    return this.#client.web.fetchJson("/sale/priceList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteCreate(bean: Quote): Promise<Quote> {
    return this.#client.web.fetchJson("/sale/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteDelete(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quote/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemCreate(bean: QuoteItem): Promise<QuoteItem> {
    return this.#client.web.fetchJson("/sale/quoteItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemDelete(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/sale/quoteItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemOpReject(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/sale/quoteItemOpReject/${id}`, {
      method: "POST",
      
    });
  }

  async quoteItemOpRejectRevert(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/sale/quoteItemOpRejectRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteItemProposalCreate(bean: QuoteItemProposal): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson("/sale/quoteItemProposal", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemProposalDelete(id: number): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson(`/sale/quoteItemProposal/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemProposalOpApprove(id: number): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson(`/sale/quoteItemProposalOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async quoteItemProposalOpApproveRevert(id: number): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson(`/sale/quoteItemProposalOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteItemProposalOpReject(id: number): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson(`/sale/quoteItemProposalOpReject/${id}`, {
      method: "POST",
      
    });
  }

  async quoteItemProposalOpRejectRevert(id: number): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson(`/sale/quoteItemProposalOpRejectRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteItemProposalRead(search: any): Promise<QuoteItemProposal[]> {
    return this.#client.web.fetchJson(`/sale/quoteItemProposal?${search}`, {
      method: "GET",
      
    });
  }

  async quoteItemProposalReadById(id: number): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson(`/sale/quoteItemProposal/${id}`, {
      method: "GET",
      
    });
  }

  async quoteItemProposalUpdate(bean: QuoteItemProposal): Promise<QuoteItemProposal> {
    return this.#client.web.fetchJson("/sale/quoteItemProposal", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemRead(search: any): Promise<QuoteItem[]> {
    return this.#client.web.fetchJson(`/sale/quoteItem?${search}`, {
      method: "GET",
      
    });
  }

  async quoteItemReadById(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/sale/quoteItem/${id}`, {
      method: "GET",
      
    });
  }

  async quoteItemUpdate(bean: QuoteItem): Promise<QuoteItem> {
    return this.#client.web.fetchJson("/sale/quoteItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteOpApprove(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpApproveRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancel(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancelRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCreate(args: ArgsQuoteOpCreate): Promise<Quote> {
    return this.#client.web.fetchJson("/sale/quoteOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpFill(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpFill/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpFillRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpFillRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepare(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepareRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpReject(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpReject/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpRejectRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpRejectRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpStart(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpStart/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpStartRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpStartRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpSubmit(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpSubmit/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpSubmitRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpSubmitRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteRead(search: any): Promise<Quote[]> {
    return this.#client.web.fetchJson(`/sale/quote?${search}`, {
      method: "GET",
      
    });
  }

  async quoteReadById(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quote/${id}`, {
      method: "GET",
      
    });
  }

  async quoteUpdate(bean: Quote): Promise<Quote> {
    return this.#client.web.fetchJson("/sale/quote", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleCreate(bean: Sale): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/sale", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleDelete(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/sale/${id}`, {
      method: "DELETE",
      
    });
  }

  async saleItemCreate(bean: SaleItem): Promise<SaleItem> {
    return this.#client.web.fetchJson("/sale/saleItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleItemDelete(id: number): Promise<SaleItem> {
    return this.#client.web.fetchJson(`/sale/saleItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async saleItemOpUpdatePrepared(bean: SaleItem): Promise<SaleItem> {
    return this.#client.web.fetchJson("/sale/saleItemOpUpdatePrepared", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleItemRead(search: any): Promise<SaleItem[]> {
    return this.#client.web.fetchJson(`/sale/saleItem?${search}`, {
      method: "GET",
      
    });
  }

  async saleItemReadById(id: number): Promise<SaleItem> {
    return this.#client.web.fetchJson(`/sale/saleItem/${id}`, {
      method: "GET",
      
    });
  }

  async saleItemUpdate(bean: SaleItem): Promise<SaleItem> {
    return this.#client.web.fetchJson("/sale/saleItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleOpApprove(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpApproveRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpApproveUnconditionally(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpApproveUnconditionally/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpCancel(id: number, args: ArgsSaleOpCancel): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpCancelRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpClone(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpCreate(args: ArgsSaleOpCreate): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/saleOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpFinishRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpForwardAuto(id: number, args: ArgsSaleOpForwardAuto): Promise<OutgoingInvoice> {
    return this.#client.web.fetchJson(`/sale/saleOpForwardAuto/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpMerge(ids: any): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/saleOpMerge", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(ids),

    });
  }

  async saleOpMergeRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpMergeRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpPickingOrderCreate(id: number, args: ArgsSaleOpPickingOrderCreate): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/sale/saleOpPickingOrderCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpPickingOrderCreateRevert(id: number, pickingOrderId: number): Promise<Sale> {
    const sp = new URLSearchParams();
    if (pickingOrderId) sp.set("pickingOrderId", String(pickingOrderId));
    return this.#client.web.fetchJson(`/sale/saleOpPickingOrderCreateRevert/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async saleOpPrepare(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpPrepareRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpShipmentAssign(id: number, shipmentId: number): Promise<Sale> {
    const sp = new URLSearchParams();
    if (shipmentId) sp.set("shipmentId", String(shipmentId));
    return this.#client.web.fetchJson(`/sale/saleOpShipmentAssign/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async saleOpShipmentAssignRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpShipmentAssignRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpSplit(id: number, args: ArgsSaleOpSplit): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpSplit/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpTaxationCalc(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpTaxationCalc/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpUpdatePrepared(bean: Sale): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/saleOpUpdatePrepared", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salePaymentCreate(bean: SalePayment): Promise<SalePayment> {
    return this.#client.web.fetchJson("/sale/salePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salePaymentDelete(id: number): Promise<SalePayment> {
    return this.#client.web.fetchJson(`/sale/salePayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async salePaymentRead(search: any): Promise<SalePayment[]> {
    return this.#client.web.fetchJson(`/sale/salePayment?${search}`, {
      method: "GET",
      
    });
  }

  async salePaymentReadById(id: number): Promise<SalePayment> {
    return this.#client.web.fetchJson(`/sale/salePayment/${id}`, {
      method: "GET",
      
    });
  }

  async salePaymentUpdate(bean: SalePayment): Promise<SalePayment> {
    return this.#client.web.fetchJson("/sale/salePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleProfileCreate(bean: SaleProfile): Promise<SaleProfile> {
    return this.#client.web.fetchJson("/sale/saleProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleProfileDelete(id: number): Promise<SaleProfile> {
    return this.#client.web.fetchJson(`/sale/saleProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async saleProfileRead(search: any): Promise<SaleProfile[]> {
    return this.#client.web.fetchJson(`/sale/saleProfile?${search}`, {
      method: "GET",
      
    });
  }

  async saleProfileReadById(id: number): Promise<SaleProfile> {
    return this.#client.web.fetchJson(`/sale/saleProfile/${id}`, {
      method: "GET",
      
    });
  }

  async saleProfileUpdate(bean: SaleProfile): Promise<SaleProfile> {
    return this.#client.web.fetchJson("/sale/saleProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async saleRead(search: any): Promise<Sale[]> {
    return this.#client.web.fetchJson(`/sale/sale?${search}`, {
      method: "GET",
      
    });
  }

  async saleReadById(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/sale/${id}`, {
      method: "GET",
      
    });
  }

  async saleUpdate(bean: Sale): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/sale", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
