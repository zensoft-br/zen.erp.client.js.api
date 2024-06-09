import { Client } from "../../Client.js";
import { PickingOrder } from "../material/PickingOrder.js";
import { PriceFormation } from "./PriceFormation.js";
import { PriceFormationItem } from "./PriceFormationItem.js";
import { PriceFormationOpSimulation } from "./PriceFormationOpSimulation.js";
import { PriceList } from "./PriceList.js";
import { PriceListItem } from "./PriceListItem.js";
import { Quote } from "./Quote.js";
import { QuoteItem } from "./QuoteItem.js";
import { Sale } from "./Sale.js";
import { SaleItem } from "./SaleItem.js";
import { SalePayment } from "./SalePayment.js";
import { SaleProfile } from "./SaleProfile.js";
import { SalesCommission } from "./SalesCommission.js";

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
        },
        body: JSON.stringify(bean),

    });
  }

  async priceFormationOpCalculate(id: number, value: number): Promise<PriceFormationOpSimulation> {
    const sp = new URLSearchParams();
    if (value) sp.set("value", String(value));
    return this.#client.web.fetchJson(`/sale/priceFormationOpCalculate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async priceFormationOpCalculateProductPacking(id: number, productPackingId: number, value: number): Promise<PriceFormationOpSimulation> {
    const sp = new URLSearchParams();
    if (productPackingId) sp.set("productPackingId", String(productPackingId));
    if (value) sp.set("value", String(value));
    return this.#client.web.fetchJson(`/sale/priceFormationOpCalculateProductPacking/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async priceFormationOpClone(id: number): Promise<PriceFormation> {
    return this.#client.web.fetchJson(`/sale/priceFormationOpClone/${id}`, {
      method: "POST",
      
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
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListCreate(bean: PriceList): Promise<PriceList> {
    return this.#client.web.fetchJson("/sale/priceList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListDelete(id: number): Promise<PriceList> {
    return this.#client.web.fetchJson(`/sale/priceList/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemCreate(bean: PriceListItem): Promise<PriceListItem> {
    return this.#client.web.fetchJson("/sale/priceListItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListItemDelete(id: number): Promise<PriceListItem> {
    return this.#client.web.fetchJson(`/sale/priceListItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async priceListItemRead(search: any): Promise<PriceListItem[]> {
    return this.#client.web.fetchJson(`/sale/priceListItem?${search}`, {
      method: "GET",
      
    });
  }

  async priceListItemReadById(id: number): Promise<PriceListItem> {
    return this.#client.web.fetchJson(`/sale/priceListItem/${id}`, {
      method: "GET",
      
    });
  }

  async priceListItemUpdate(bean: PriceListItem): Promise<PriceListItem> {
    return this.#client.web.fetchJson("/sale/priceListItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async priceListRead(search: any): Promise<PriceList[]> {
    return this.#client.web.fetchJson(`/sale/priceList?${search}`, {
      method: "GET",
      
    });
  }

  async priceListReadById(id: number): Promise<PriceList> {
    return this.#client.web.fetchJson(`/sale/priceList/${id}`, {
      method: "GET",
      
    });
  }

  async priceListUpdate(bean: PriceList): Promise<PriceList> {
    return this.#client.web.fetchJson("/sale/priceList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteCreate(bean: Quote): Promise<Quote> {
    return this.#client.web.fetchJson("/sale/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteItemDelete(id: number): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/sale/quoteItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async quoteItemOpFill(id: number, args: any): Promise<QuoteItem> {
    return this.#client.web.fetchJson(`/sale/quoteItemOpFill/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

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
        },
        body: JSON.stringify(bean),

    });
  }

  async quoteOpApprove(id: number, args: any): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpApprove/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

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

  async quoteOpFinish(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpFinish/${id}`, {
      method: "POST",
      
    });
  }

  async quoteOpFinishRevert(id: number): Promise<Quote> {
    return this.#client.web.fetchJson(`/sale/quoteOpFinishRevert/${id}`, {
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
        },
        body: JSON.stringify(bean),

    });
  }

  async saleCreate(bean: Sale): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/sale", {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
        },
        body: JSON.stringify(bean),

    });
  }

  async saleItemDelete(id: number): Promise<SaleItem> {
    return this.#client.web.fetchJson(`/sale/saleItem/${id}`, {
      method: "DELETE",
      
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

  async saleOpCancel(id: number, args: any): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
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

  async saleOpCreate(args: any): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/saleOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async saleOpFinishRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpFinishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpMerge(ids: any): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/saleOpMerge", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(ids),

    });
  }

  async saleOpPickingOrderCreate(id: number, args: any): Promise<PickingOrder> {
    return this.#client.web.fetchJson(`/sale/saleOpPickingOrderCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

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

  async saleOpReleaseForPicking(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpReleaseForPicking/${id}`, {
      method: "POST",
      
    });
  }

  async saleOpReleaseForPickingRevert(id: number): Promise<Sale> {
    return this.#client.web.fetchJson(`/sale/saleOpReleaseForPickingRevert/${id}`, {
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

  async saleOpUpdate(bean: Sale): Promise<Sale> {
    return this.#client.web.fetchJson("/sale/saleOpUpdate", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salePaymentCreate(bean: SalePayment): Promise<SalePayment> {
    return this.#client.web.fetchJson("/sale/salePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
        },
        body: JSON.stringify(bean),

    });
  }

  async saleProfileCreate(bean: SaleProfile): Promise<SaleProfile> {
    return this.#client.web.fetchJson("/sale/saleProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
        },
        body: JSON.stringify(bean),

    });
  }

  async salesCommissionCreate(bean: SalesCommission): Promise<SalesCommission> {
    return this.#client.web.fetchJson("/sale/salesCommission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async salesCommissionDelete(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/sale/salesCommission/${id}`, {
      method: "DELETE",
      
    });
  }

  async salesCommissionRead(search: any): Promise<SalesCommission[]> {
    return this.#client.web.fetchJson(`/sale/salesCommission?${search}`, {
      method: "GET",
      
    });
  }

  async salesCommissionReadById(id: number): Promise<SalesCommission> {
    return this.#client.web.fetchJson(`/sale/salesCommission/${id}`, {
      method: "GET",
      
    });
  }

  async salesCommissionUpdate(bean: SalesCommission): Promise<SalesCommission> {
    return this.#client.web.fetchJson("/sale/salesCommission", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
