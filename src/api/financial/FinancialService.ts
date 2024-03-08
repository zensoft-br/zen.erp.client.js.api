import { Client } from "../../Client.js";
import { Payable } from "./Payable.js";
import { SettlementMethod } from "./SettlementMethod.js";
import { Currency } from "./Currency.js";
import { SettlementBillingTitle } from "./SettlementBillingTitle.js";
import { Settlement } from "./Settlement.js";
import { CurrencyExchangeRate } from "./CurrencyExchangeRate.js";
import { Receivable } from "./Receivable.js";

export class FinancialService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async currencyCreate(bean: Currency): Promise<Currency> {
    return this.#client.web.fetchJson("/financial/currency", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async currencyDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/financial/currency/${id}`, {
      method: "DELETE",
      
    });
  }

  async currencyExchangeRateCreate(bean: CurrencyExchangeRate): Promise<CurrencyExchangeRate> {
    return this.#client.web.fetchJson("/financial/currencyExchangeRate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async currencyExchangeRateDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/financial/currencyExchangeRate/${id}`, {
      method: "DELETE",
      
    });
  }

  async currencyExchangeRateOpConvert(sourceId: number, destinationId: number, date: Date, value: number): Promise<number> {
    const sp = new URLSearchParams();
    if (sourceId) sp.set("sourceId", String(sourceId));
    if (destinationId) sp.set("destinationId", String(destinationId));
    if (date) sp.set("date", String(date));
    if (value) sp.set("value", String(value));
    return this.#client.web.fetchJson(`/financial/currencyExchangeRateOpConvert?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async currencyExchangeRateOpGetExchangeRate(sourceId: number, destinationId: number, date: Date): Promise<number> {
    const sp = new URLSearchParams();
    if (sourceId) sp.set("sourceId", String(sourceId));
    if (destinationId) sp.set("destinationId", String(destinationId));
    if (date) sp.set("date", String(date));
    return this.#client.web.fetchJson(`/financial/currencyExchangeRateOpGetExchangeRate?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async currencyExchangeRateRead(search: any): Promise<CurrencyExchangeRate[]> {
    return this.#client.web.fetchJson(`/financial/currencyExchangeRate?${search}`, {
      method: "GET",
      
    });
  }

  async currencyExchangeRateReadById(id: number): Promise<CurrencyExchangeRate> {
    return this.#client.web.fetchJson(`/financial/currencyExchangeRate/${id}`, {
      method: "GET",
      
    });
  }

  async currencyExchangeRateUpdate(bean: CurrencyExchangeRate): Promise<CurrencyExchangeRate> {
    return this.#client.web.fetchJson("/financial/currencyExchangeRate", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async currencyOpReadByCode(code: string): Promise<Currency> {
    const sp = new URLSearchParams();
    if (code) sp.set("code", String(code));
    return this.#client.web.fetchJson(`/financial/currencyOpReadByCode?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async currencyRead(search: any): Promise<Currency[]> {
    return this.#client.web.fetchJson(`/financial/currency?${search}`, {
      method: "GET",
      
    });
  }

  async currencyReadById(id: number): Promise<Currency> {
    return this.#client.web.fetchJson(`/financial/currency/${id}`, {
      method: "GET",
      
    });
  }

  async currencyUpdate(bean: Currency): Promise<Currency> {
    return this.#client.web.fetchJson("/financial/currency", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async payableCreate(bean: Payable): Promise<Payable> {
    return this.#client.web.fetchJson("/financial/payable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async payableDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/financial/payable/${id}`, {
      method: "DELETE",
      
    });
  }

  async payableOpApprove(id: number): Promise<Payable> {
    return this.#client.web.fetchJson(`/financial/payableOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async payableOpApproveRevert(id: number): Promise<Payable> {
    return this.#client.web.fetchJson(`/financial/payableOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async payableOpRepeat(id: number, args: any): Promise<Payable[]> {
    return this.#client.web.fetchJson(`/financial/payableOpRepeat/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async payableOpSettle(args: any): Promise<Settlement> {
    return this.#client.web.fetchJson("/financial/payableOpSettle", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async payableOpUpdate(id: number, args: any): Promise<Payable> {
    return this.#client.web.fetchJson(`/financial/payableOpUpdate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async payableRead(search: any): Promise<Payable[]> {
    return this.#client.web.fetchJson(`/financial/payable?${search}`, {
      method: "GET",
      
    });
  }

  async payableReadById(id: number): Promise<Payable> {
    return this.#client.web.fetchJson(`/financial/payable/${id}`, {
      method: "GET",
      
    });
  }

  async payableSettlementBillingTitleRead(search: any): Promise<SettlementBillingTitle[]> {
    return this.#client.web.fetchJson(`/financial/payableSettlementBillingTitle?${search}`, {
      method: "GET",
      
    });
  }

  async payableSettlementBillingTitleReadById(id: number): Promise<SettlementBillingTitle> {
    return this.#client.web.fetchJson(`/financial/payableSettlementBillingTitle/${id}`, {
      method: "GET",
      
    });
  }

  async payableSettlementDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/financial/payableSettlement/${id}`, {
      method: "DELETE",
      
    });
  }

  async payableSettlementMethodRead(search: any): Promise<SettlementMethod[]> {
    return this.#client.web.fetchJson(`/financial/payableSettlementMethod?${search}`, {
      method: "GET",
      
    });
  }

  async payableSettlementMethodReadById(id: number): Promise<SettlementMethod> {
    return this.#client.web.fetchJson(`/financial/payableSettlementMethod/${id}`, {
      method: "GET",
      
    });
  }

  async payableSettlementRead(search: any): Promise<Settlement[]> {
    return this.#client.web.fetchJson(`/financial/payableSettlement?${search}`, {
      method: "GET",
      
    });
  }

  async payableSettlementReadById(id: number): Promise<Settlement> {
    return this.#client.web.fetchJson(`/financial/payableSettlement/${id}`, {
      method: "GET",
      
    });
  }

  async payableUpdate(bean: Payable): Promise<Payable> {
    return this.#client.web.fetchJson("/financial/payable", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async receivableCreate(bean: Receivable): Promise<Receivable> {
    return this.#client.web.fetchJson("/financial/receivable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async receivableDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/financial/receivable/${id}`, {
      method: "DELETE",
      
    });
  }

  async receivableOpApprove(id: number): Promise<Receivable> {
    return this.#client.web.fetchJson(`/financial/receivableOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async receivableOpApproveRevert(id: number): Promise<Receivable> {
    return this.#client.web.fetchJson(`/financial/receivableOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async receivableOpRepeat(id: number, args: any): Promise<Payable[]> {
    return this.#client.web.fetchJson(`/financial/receivableOpRepeat/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async receivableOpSend(args: any): Promise<void> {
    this.#client.web.fetchJson("/financial/receivableOpSend", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async receivableOpSettle(args: any): Promise<Settlement> {
    return this.#client.web.fetchJson("/financial/receivableOpSettle", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async receivableOpUpdate(id: number, args: any): Promise<Receivable> {
    return this.#client.web.fetchJson(`/financial/receivableOpUpdate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async receivableRead(search: any): Promise<Receivable[]> {
    return this.#client.web.fetchJson(`/financial/receivable?${search}`, {
      method: "GET",
      
    });
  }

  async receivableReadById(id: number): Promise<Receivable> {
    return this.#client.web.fetchJson(`/financial/receivable/${id}`, {
      method: "GET",
      
    });
  }

  async receivableSettlementBillingTitleRead(search: any): Promise<SettlementBillingTitle[]> {
    return this.#client.web.fetchJson(`/financial/receivableSettlementBillingTitle?${search}`, {
      method: "GET",
      
    });
  }

  async receivableSettlementBillingTitleReadById(id: number): Promise<SettlementBillingTitle> {
    return this.#client.web.fetchJson(`/financial/receivableSettlementBillingTitle/${id}`, {
      method: "GET",
      
    });
  }

  async receivableSettlementDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/financial/receivableSettlement/${id}`, {
      method: "DELETE",
      
    });
  }

  async receivableSettlementMethodRead(search: any): Promise<SettlementMethod[]> {
    return this.#client.web.fetchJson(`/financial/receivableSettlementMethod?${search}`, {
      method: "GET",
      
    });
  }

  async receivableSettlementMethodReadById(id: number): Promise<SettlementMethod> {
    return this.#client.web.fetchJson(`/financial/receivableSettlementMethod/${id}`, {
      method: "GET",
      
    });
  }

  async receivableSettlementRead(search: any): Promise<Settlement[]> {
    return this.#client.web.fetchJson(`/financial/receivableSettlement?${search}`, {
      method: "GET",
      
    });
  }

  async receivableSettlementReadById(id: number): Promise<Settlement> {
    return this.#client.web.fetchJson(`/financial/receivableSettlement/${id}`, {
      method: "GET",
      
    });
  }

  async receivableUpdate(bean: Receivable): Promise<Receivable> {
    return this.#client.web.fetchJson("/financial/receivable", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
