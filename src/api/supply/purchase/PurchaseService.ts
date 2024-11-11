import { Client } from "../../../Client.js";
import { ArgsProposalItemOpApprove } from "./ArgsProposalItemOpApprove.js";
import { ArgsProposalItemOpDisapprove } from "./ArgsProposalItemOpDisapprove.js";
import { ArgsPurchaseOpCancel } from "./ArgsPurchaseOpCancel.js";
import { ArgsPurchaseOpCreate } from "./ArgsPurchaseOpCreate.js";
import { ArgsPurchaseOpSplit } from "./ArgsPurchaseOpSplit.js";
import { ArgsQuoteOpCreate } from "./ArgsQuoteOpCreate.js";
import { ArgsQuoteOpFinish } from "./ArgsQuoteOpFinish.js";
import { PriceListCost } from "./PriceListCost.js";
import { PriceListCostItem } from "./PriceListCostItem.js";
import { Proposal } from "./Proposal.js";
import { ProposalItem } from "./ProposalItem.js";
import { ProposalRequest } from "./ProposalRequest.js";
import { Purchase } from "./Purchase.js";
import { PurchaseItem } from "./PurchaseItem.js";
import { PurchasePayment } from "./PurchasePayment.js";
import { PurchaseProfile } from "./PurchaseProfile.js";
import { Quote } from "./Quote.js";
import { QuoteItem } from "./QuoteItem.js";

export class PurchaseService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async priceListCreate(bean: PriceListCost): Promise<PriceListCost> {
    return this.#client.web.fetchJson("/supply/purchase/priceList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListDelete(id: number): Promise<PriceListCost> {
    return this.#client.web.fetchJson(`/supply/purchase/priceList/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemCreate(bean: PriceListCostItem): Promise<PriceListCostItem> {
    return this.#client.web.fetchJson("/supply/purchase/priceListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListItemDelete(id: number): Promise<PriceListCostItem> {
    return this.#client.web.fetchJson(`/supply/purchase/priceListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemRead(search: any): Promise<PriceListCostItem[]> {
    return this.#client.web.fetchJson(`/supply/purchase/priceListItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceListItemReadById(id: number): Promise<PriceListCostItem> {
    return this.#client.web.fetchJson(`/supply/purchase/priceListItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceListItemUpdate(bean: PriceListCostItem): Promise<PriceListCostItem> {
    return this.#client.web.fetchJson("/supply/purchase/priceListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListRead(search: any): Promise<PriceListCost[]> {
    return this.#client.web.fetchJson(`/supply/purchase/priceList?${search}`, {
      method: "GET",
      
    });
  }

  async priceListReadById(id: number): Promise<PriceListCost> {
    return this.#client.web.fetchJson(`/supply/purchase/priceList/${id}`, {
      method: "GET",
      
    });
  }

  async priceListUpdate(bean: PriceListCost): Promise<PriceListCost> {
    return this.#client.web.fetchJson("/supply/purchase/priceList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalCreate(bean: Proposal): Promise<Proposal> {
    return this.#client.web.fetchJson("/supply/purchase/proposal", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalDelete(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/supply/purchase/proposal/${id}`, {
      method: "DELETE",
      
    });
  }

  async proposalItemCreate(bean: ProposalItem): Promise<ProposalItem> {
    return this.#client.web.fetchJson("/supply/purchase/proposalItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalItemDelete(id: number): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async proposalItemOpApprove(id: number, args: ArgsProposalItemOpApprove): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalItemOpApprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async proposalItemOpApproveRevert(id: number): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalItemOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalItemOpDisapprove(id: number, args: ArgsProposalItemOpDisapprove): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalItemOpDisapprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async proposalItemOpDisapproveRevert(id: number): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalItemOpDisapproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalItemRead(search: any): Promise<ProposalItem[]> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalItem?${search}`, {
      method: "GET",
      
    });
  }

  async proposalItemReadById(id: number): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalItem/${id}`, {
      method: "GET",
      
    });
  }

  async proposalItemUpdate(bean: ProposalItem): Promise<ProposalItem> {
    return this.#client.web.fetchJson("/supply/purchase/proposalItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalOpCancel(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpCancelRevert(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpPrepare(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpPrepareRevert(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/supply/purchase/proposalOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalRead(search: any): Promise<Proposal[]> {
    return this.#client.web.fetchJson(`/supply/purchase/proposal?${search}`, {
      method: "GET",
      
    });
  }

  async proposalReadById(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/supply/purchase/proposal/${id}`, {
      method: "GET",
      
    });
  }

  async proposalRequestReadById(id: number, token: string): Promise<ProposalRequest> {
    const sp = new URLSearchParams();
    if (token) sp.set("token", String(token));
    return this.#client.web.fetchJson(`/supply/purchase/proposalRequest/${id}?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async proposalRequestUpdate(bean: ProposalRequest, token: string): Promise<ProposalRequest> {
    const sp = new URLSearchParams();
    if (token) sp.set("token", String(token));
    return this.#client.web.fetchJson(`/supply/purchase/proposalRequest?${sp.toString()}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalUpdate(bean: Proposal): Promise<Proposal> {
    return this.#client.web.fetchJson("/supply/purchase/proposal", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseCreate(bean: Purchase): Promise<Purchase> {
    return this.#client.web.fetchJson("/supply/purchase/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseDelete(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchase/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseItemCreate(bean: PurchaseItem): Promise<PurchaseItem> {
    return this.#client.web.fetchJson("/supply/purchase/purchaseItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseItemDelete(id: number): Promise<PurchaseItem> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseItemRead(search: any): Promise<PurchaseItem[]> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseItem?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseItemReadById(id: number): Promise<PurchaseItem> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseItem/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseItemUpdate(bean: PurchaseItem): Promise<PurchaseItem> {
    return this.#client.web.fetchJson("/supply/purchase/purchaseItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseOpApprove(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpApproveRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpApproveUnconditionally(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpApproveUnconditionally/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpCancel(id: number, args: ArgsPurchaseOpCancel): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async purchaseOpCancelRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpClone(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpCreate(args: ArgsPurchaseOpCreate): Promise<Purchase> {
    return this.#client.web.fetchJson("/supply/purchase/purchaseOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async purchaseOpFinish(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpFinishRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpMerge(ids: any): Promise<Purchase> {
    return this.#client.web.fetchJson("/supply/purchase/purchaseOpMerge", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(ids),

    });
  }

  async purchaseOpPrepare(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpPrepareRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpSplit(id: number, args: ArgsPurchaseOpSplit): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpSplit/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async purchaseOpTaxationCalc(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseOpTaxationCalc/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpUpdatePrepared(bean: Purchase): Promise<Purchase> {
    return this.#client.web.fetchJson("/supply/purchase/purchaseOpUpdatePrepared", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchasePaymentCreate(bean: PurchasePayment): Promise<PurchasePayment> {
    return this.#client.web.fetchJson("/supply/purchase/purchasePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchasePaymentDelete(id: number): Promise<PurchasePayment> {
    return this.#client.web.fetchJson(`/supply/purchase/purchasePayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchasePaymentRead(search: any): Promise<PurchasePayment[]> {
    return this.#client.web.fetchJson(`/supply/purchase/purchasePayment?${search}`, {
      method: "GET",
      
    });
  }

  async purchasePaymentReadById(id: number): Promise<PurchasePayment> {
    return this.#client.web.fetchJson(`/supply/purchase/purchasePayment/${id}`, {
      method: "GET",
      
    });
  }

  async purchasePaymentUpdate(bean: PurchasePayment): Promise<PurchasePayment> {
    return this.#client.web.fetchJson("/supply/purchase/purchasePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseProfileCreate(bean: PurchaseProfile): Promise<PurchaseProfile> {
    return this.#client.web.fetchJson("/supply/purchase/purchaseProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseProfileDelete(id: number): Promise<PurchaseProfile> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseProfileRead(search: any): Promise<PurchaseProfile[]> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseProfile?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseProfileReadById(id: number): Promise<PurchaseProfile> {
    return this.#client.web.fetchJson(`/supply/purchase/purchaseProfile/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseProfileUpdate(bean: PurchaseProfile): Promise<PurchaseProfile> {
    return this.#client.web.fetchJson("/supply/purchase/purchaseProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseRead(search: any): Promise<Purchase[]> {
    return this.#client.web.fetchJson(`/supply/purchase/purchase?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseReadById(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/supply/purchase/purchase/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseUpdate(bean: Purchase): Promise<Purchase> {
    return this.#client.web.fetchJson("/supply/purchase/purchase", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteCreate(bean: Quote): Promise<Quote> {
    return this.#client.web.fetchJson("/supply/purchase/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteDelete(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quote/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemCreate(bean: QuoteItem): Promise<QuoteItem> {
    return this.#client.web.fetchJson("/supply/purchase/quoteItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemDelete(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemRead(search: any): Promise<QuoteItem[]> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteItem?${search}`, {
      method: "GET",
      
    });
  }

  async quoteItemReadById(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteItem/${id}`, {
      method: "GET",
      
    });
  }

  async quoteItemUpdate(bean: QuoteItem): Promise<QuoteItem> {
    return this.#client.web.fetchJson("/supply/purchase/quoteItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteOpApprove(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpApproveRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancel(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancelRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCreate(args: ArgsQuoteOpCreate): Promise<Quote> {
    return this.#client.web.fetchJson("/supply/purchase/quoteOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpFinish(id: number, args: ArgsQuoteOpFinish): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpFinish/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpFinishRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepare(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepareRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quoteOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteRead(search: any): Promise<Quote[]> {
    return this.#client.web.fetchJson(`/supply/purchase/quote?${search}`, {
      method: "GET",
      
    });
  }

  async quoteReadById(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/supply/purchase/quote/${id}`, {
      method: "GET",
      
    });
  }

  async quoteUpdate(bean: Quote): Promise<Quote> {
    return this.#client.web.fetchJson("/supply/purchase/quote", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
