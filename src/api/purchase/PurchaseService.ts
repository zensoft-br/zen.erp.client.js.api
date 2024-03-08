import { Client } from "../../Client.js";
import { PurchaseProfile } from "./PurchaseProfile.js";
import { PurchaseItem } from "./PurchaseItem.js";
import { Proposal } from "./Proposal.js";
import { PriceListItem } from "./PriceListItem.js";
import { PurchasePayment } from "./PurchasePayment.js";
import { ProposalItem } from "./ProposalItem.js";
import { Quote } from "./Quote.js";
import { QuoteItem } from "./QuoteItem.js";
import { Purchase } from "./Purchase.js";
import { PriceList } from "./PriceList.js";

export class PurchaseService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async priceListCreate(bean: PriceList): Promise<PriceList> {
    return this.#client.web.fetchJson("/purchase/priceList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/priceList/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemCreate(bean: PriceListItem): Promise<PriceListItem> {
    return this.#client.web.fetchJson("/purchase/priceListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListItemDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/priceListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemRead(search: any): Promise<PriceListItem[]> {
    return this.#client.web.fetchJson(`/purchase/priceListItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceListItemReadById(id: number): Promise<PriceListItem> {
    return this.#client.web.fetchJson(`/purchase/priceListItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceListItemUpdate(bean: PriceListItem): Promise<PriceListItem> {
    return this.#client.web.fetchJson("/purchase/priceListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListRead(search: any): Promise<PriceList[]> {
    return this.#client.web.fetchJson(`/purchase/priceList?${search}`, {
      method: "GET",
      
    });
  }

  async priceListReadById(id: number): Promise<PriceList> {
    return this.#client.web.fetchJson(`/purchase/priceList/${id}`, {
      method: "GET",
      
    });
  }

  async priceListUpdate(bean: PriceList): Promise<PriceList> {
    return this.#client.web.fetchJson("/purchase/priceList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalCreate(bean: Proposal): Promise<Proposal> {
    return this.#client.web.fetchJson("/purchase/proposal", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/proposal/${id}`, {
      method: "DELETE",
      
    });
  }

  async proposalItemCreate(bean: ProposalItem): Promise<ProposalItem> {
    return this.#client.web.fetchJson("/purchase/proposalItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalItemDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/proposalItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async proposalItemOpApprove(id: number, args: any): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/purchase/proposalItemOpApprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async proposalItemOpApproveRevert(id: number): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/purchase/proposalItemOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalItemOpDisapprove(id: number, args: any): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/purchase/proposalItemOpDisapprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async proposalItemOpDisapproveRevert(id: number): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/purchase/proposalItemOpDisapproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalItemRead(search: any): Promise<ProposalItem[]> {
    return this.#client.web.fetchJson(`/purchase/proposalItem?${search}`, {
      method: "GET",
      
    });
  }

  async proposalItemReadById(id: number): Promise<ProposalItem> {
    return this.#client.web.fetchJson(`/purchase/proposalItem/${id}`, {
      method: "GET",
      
    });
  }

  async proposalItemUpdate(bean: ProposalItem): Promise<ProposalItem> {
    return this.#client.web.fetchJson("/purchase/proposalItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async proposalOpCancel(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/purchase/proposalOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpCancelRevert(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/purchase/proposalOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpPrepare(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/purchase/proposalOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async proposalOpPrepareRevert(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/purchase/proposalOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async proposalRead(search: any): Promise<Proposal[]> {
    return this.#client.web.fetchJson(`/purchase/proposal?${search}`, {
      method: "GET",
      
    });
  }

  async proposalReadById(id: number): Promise<Proposal> {
    return this.#client.web.fetchJson(`/purchase/proposal/${id}`, {
      method: "GET",
      
    });
  }

  async proposalUpdate(bean: Proposal): Promise<Proposal> {
    return this.#client.web.fetchJson("/purchase/proposal", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseCreate(bean: Purchase): Promise<Purchase> {
    return this.#client.web.fetchJson("/purchase/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/purchase/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseItemCreate(bean: PurchaseItem): Promise<PurchaseItem> {
    return this.#client.web.fetchJson("/purchase/purchaseItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseItemDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/purchaseItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseItemRead(search: any): Promise<PurchaseItem[]> {
    return this.#client.web.fetchJson(`/purchase/purchaseItem?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseItemReadById(id: number): Promise<PurchaseItem> {
    return this.#client.web.fetchJson(`/purchase/purchaseItem/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseItemUpdate(bean: PurchaseItem): Promise<PurchaseItem> {
    return this.#client.web.fetchJson("/purchase/purchaseItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseOpApprove(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpApproveRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpCancel(id: number, args: any): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async purchaseOpCancelRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpClone(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpFinish(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpFinishRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpPrepare(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async purchaseOpPrepareRevert(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchaseOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async purchasePaymentCreate(bean: PurchasePayment): Promise<PurchasePayment> {
    return this.#client.web.fetchJson("/purchase/purchasePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchasePaymentDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/purchasePayment/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchasePaymentRead(search: any): Promise<PurchasePayment[]> {
    return this.#client.web.fetchJson(`/purchase/purchasePayment?${search}`, {
      method: "GET",
      
    });
  }

  async purchasePaymentReadById(id: number): Promise<PurchasePayment> {
    return this.#client.web.fetchJson(`/purchase/purchasePayment/${id}`, {
      method: "GET",
      
    });
  }

  async purchasePaymentUpdate(bean: PurchasePayment): Promise<PurchasePayment> {
    return this.#client.web.fetchJson("/purchase/purchasePayment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseProfileCreate(bean: PurchaseProfile): Promise<PurchaseProfile> {
    return this.#client.web.fetchJson("/purchase/purchaseProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseProfileDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/purchaseProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async purchaseProfileRead(search: any): Promise<PurchaseProfile[]> {
    return this.#client.web.fetchJson(`/purchase/purchaseProfile?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseProfileReadById(id: number): Promise<PurchaseProfile> {
    return this.#client.web.fetchJson(`/purchase/purchaseProfile/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseProfileUpdate(bean: PurchaseProfile): Promise<PurchaseProfile> {
    return this.#client.web.fetchJson("/purchase/purchaseProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async purchaseRead(search: any): Promise<Purchase[]> {
    return this.#client.web.fetchJson(`/purchase/purchase?${search}`, {
      method: "GET",
      
    });
  }

  async purchaseReadById(id: number): Promise<Purchase> {
    return this.#client.web.fetchJson(`/purchase/purchase/${id}`, {
      method: "GET",
      
    });
  }

  async purchaseUpdate(bean: Purchase): Promise<Purchase> {
    return this.#client.web.fetchJson("/purchase/purchase", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteCreate(bean: Quote): Promise<Quote> {
    return this.#client.web.fetchJson("/purchase/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/quote/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemCreate(bean: QuoteItem): Promise<QuoteItem> {
    return this.#client.web.fetchJson("/purchase/quoteItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/purchase/quoteItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemRead(search: any): Promise<QuoteItem[]> {
    return this.#client.web.fetchJson(`/purchase/quoteItem?${search}`, {
      method: "GET",
      
    });
  }

  async quoteItemReadById(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/purchase/quoteItem/${id}`, {
      method: "GET",
      
    });
  }

  async quoteItemUpdate(bean: QuoteItem): Promise<QuoteItem> {
    return this.#client.web.fetchJson("/purchase/quoteItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteOpApprove(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpApproveRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancel(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpCancel/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCancelRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpCancelRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpCreate(args: any): Promise<Quote> {
    return this.#client.web.fetchJson("/purchase/quoteOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpFinish(id: number, args: any): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpFinish/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async quoteOpFinishRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepare(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpPrepareRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quoteOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async quoteRead(search: any): Promise<Quote[]> {
    return this.#client.web.fetchJson(`/purchase/quote?${search}`, {
      method: "GET",
      
    });
  }

  async quoteReadById(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/purchase/quote/${id}`, {
      method: "GET",
      
    });
  }

  async quoteUpdate(bean: Quote): Promise<Quote> {
    return this.#client.web.fetchJson("/purchase/quote", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
