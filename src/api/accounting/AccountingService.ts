import { Client } from "../../Client.js";
import { Account } from "./Account.js";
import { AccountCategory } from "./AccountCategory.js";
import { AccountChart } from "./AccountChart.js";
import { AccountConversion } from "./AccountConversion.js";
import { AccountConversionChart } from "./AccountConversionChart.js";
import { AccountDefault } from "./AccountDefault.js";
import { AccountFiscalYear } from "./AccountFiscalYear.js";
import { AssetInventory } from "./AssetInventory.js";
import { AssetTag } from "./AssetTag.js";
import { JournalEntry } from "./JournalEntry.js";
import { JournalItem } from "./JournalItem.js";
import { LedgerItem } from "./LedgerItem.js";
import { LedgerItemBalance } from "./LedgerItemBalance.js";
import { ResultCenter } from "./ResultCenter.js";
import { ResultCenterChart } from "./ResultCenterChart.js";

export class AccountingService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async accountCategoryCreate(bean: AccountCategory): Promise<AccountCategory> {
    return this.#client.web.fetchJson("/accounting/accountCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountCategoryDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/accountCategory/${id}`, {
      method: "DELETE",
      
    });
  }

  async accountCategoryRead(search: any): Promise<AccountCategory[]> {
    return this.#client.web.fetchJson(`/accounting/accountCategory?${search}`, {
      method: "GET",
      
    });
  }

  async accountCategoryReadById(id: number): Promise<AccountCategory> {
    return this.#client.web.fetchJson(`/accounting/accountCategory/${id}`, {
      method: "GET",
      
    });
  }

  async accountCategoryUpdate(bean: AccountCategory): Promise<AccountCategory> {
    return this.#client.web.fetchJson("/accounting/accountCategory", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountChartCreate(bean: AccountChart): Promise<AccountChart> {
    return this.#client.web.fetchJson("/accounting/accountChart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountChartDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/accountChart/${id}`, {
      method: "DELETE",
      
    });
  }

  async accountChartOpClone(id: number): Promise<AccountChart> {
    return this.#client.web.fetchJson(`/accounting/accountChartOpClone/${id}`, {
      method: "POST",
      
    });
  }

  async accountChartOpImport(id: number, args: any): Promise<void> {
    this.#client.web.fetchJson(`/accounting/accountChartOpImport/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async accountChartOpLevelCreate(id: number, level: number, digits: number): Promise<AccountChart> {
    const sp = new URLSearchParams();
    if (level) sp.set("level", String(level));
    if (digits) sp.set("digits", String(digits));
    return this.#client.web.fetchJson(`/accounting/accountChartOpLevelCreate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async accountChartOpLevelDelete(id: number, level: number): Promise<AccountChart> {
    const sp = new URLSearchParams();
    if (level) sp.set("level", String(level));
    return this.#client.web.fetchJson(`/accounting/accountChartOpLevelDelete/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async accountChartOpLevelUpdate(id: number, level: number, digits: number): Promise<AccountChart> {
    const sp = new URLSearchParams();
    if (level) sp.set("level", String(level));
    if (digits) sp.set("digits", String(digits));
    return this.#client.web.fetchJson(`/accounting/accountChartOpLevelUpdate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async accountChartOpNextShortCode(id: number): Promise<number> {
    return this.#client.web.fetchJson(`/accounting/accountChartOpNextShortCode/${id}`, {
      method: "POST",
      
    });
  }

  async accountChartRead(search: any): Promise<AccountChart[]> {
    return this.#client.web.fetchJson(`/accounting/accountChart?${search}`, {
      method: "GET",
      
    });
  }

  async accountChartReadById(id: number): Promise<AccountChart> {
    return this.#client.web.fetchJson(`/accounting/accountChart/${id}`, {
      method: "GET",
      
    });
  }

  async accountChartUpdate(bean: AccountChart): Promise<AccountChart> {
    return this.#client.web.fetchJson("/accounting/accountChart", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountConversionChartCreate(bean: AccountConversionChart): Promise<AccountConversionChart> {
    return this.#client.web.fetchJson("/accounting/accountConversionChart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountConversionChartDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/accountConversionChart/${id}`, {
      method: "DELETE",
      
    });
  }

  async accountConversionChartRead(search: any): Promise<AccountConversionChart[]> {
    return this.#client.web.fetchJson(`/accounting/accountConversionChart?${search}`, {
      method: "GET",
      
    });
  }

  async accountConversionChartReadById(id: number): Promise<AccountConversionChart> {
    return this.#client.web.fetchJson(`/accounting/accountConversionChart/${id}`, {
      method: "GET",
      
    });
  }

  async accountConversionChartUpdate(bean: AccountConversionChart): Promise<AccountConversionChart> {
    return this.#client.web.fetchJson("/accounting/accountConversionChart", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountConversionCreate(bean: AccountConversion): Promise<AccountConversion> {
    return this.#client.web.fetchJson("/accounting/accountConversion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountConversionDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/accountConversion/${id}`, {
      method: "DELETE",
      
    });
  }

  async accountConversionRead(search: any): Promise<AccountConversion[]> {
    return this.#client.web.fetchJson(`/accounting/accountConversion?${search}`, {
      method: "GET",
      
    });
  }

  async accountConversionReadById(id: number): Promise<AccountConversion> {
    return this.#client.web.fetchJson(`/accounting/accountConversion/${id}`, {
      method: "GET",
      
    });
  }

  async accountConversionUpdate(bean: AccountConversion): Promise<AccountConversion> {
    return this.#client.web.fetchJson("/accounting/accountConversion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountCreate(bean: Account): Promise<Account> {
    return this.#client.web.fetchJson("/accounting/account", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountDefaultCreate(bean: AccountDefault): Promise<AccountDefault> {
    return this.#client.web.fetchJson("/accounting/accountDefault", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountDefaultDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/accountDefault/${id}`, {
      method: "DELETE",
      
    });
  }

  async accountDefaultOpRead(args: any): Promise<Account> {
    return this.#client.web.fetchJson("/accounting/accountDefaultOpRead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async accountDefaultRead(search: any): Promise<AccountDefault[]> {
    return this.#client.web.fetchJson(`/accounting/accountDefault?${search}`, {
      method: "GET",
      
    });
  }

  async accountDefaultReadById(id: number): Promise<AccountDefault> {
    return this.#client.web.fetchJson(`/accounting/accountDefault/${id}`, {
      method: "GET",
      
    });
  }

  async accountDefaultUpdate(bean: AccountDefault): Promise<AccountDefault> {
    return this.#client.web.fetchJson("/accounting/accountDefault", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/account/${id}`, {
      method: "DELETE",
      
    });
  }

  async accountFiscalYearRead(search: any): Promise<AccountFiscalYear[]> {
    return this.#client.web.fetchJson(`/accounting/accountFiscalYear?${search}`, {
      method: "GET",
      
    });
  }

  async accountRead(search: any): Promise<Account[]> {
    return this.#client.web.fetchJson(`/accounting/account?${search}`, {
      method: "GET",
      
    });
  }

  async accountReadById(id: number): Promise<Account> {
    return this.#client.web.fetchJson(`/accounting/account/${id}`, {
      method: "GET",
      
    });
  }

  async accountUpdate(bean: Account): Promise<Account> {
    return this.#client.web.fetchJson("/accounting/account", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async assetInventoryCurrentRead(search: any): Promise<AssetInventory[]> {
    return this.#client.web.fetchJson(`/accounting/assetInventoryCurrent?${search}`, {
      method: "GET",
      
    });
  }

  async assetInventoryRead(search: any): Promise<AssetInventory[]> {
    return this.#client.web.fetchJson(`/accounting/assetInventory?${search}`, {
      method: "GET",
      
    });
  }

  async assetTagRead(search: any): Promise<AssetTag[]> {
    return this.#client.web.fetchJson(`/accounting/assetTag?${search}`, {
      method: "GET",
      
    });
  }

  async assetTagReadById(id: number): Promise<AssetTag> {
    return this.#client.web.fetchJson(`/accounting/assetTag/${id}`, {
      method: "GET",
      
    });
  }

  async fiscalYearOpClose(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/fiscalYearOpClose/${id}`, {
      method: "POST",
      
    });
  }

  async journalEntryCreate(bean: JournalEntry): Promise<JournalEntry> {
    return this.#client.web.fetchJson("/accounting/journalEntry", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async journalEntryDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/journalEntry/${id}`, {
      method: "DELETE",
      
    });
  }

  async journalEntryOpCreate(args: any): Promise<JournalEntry> {
    return this.#client.web.fetchJson("/accounting/journalEntryOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async journalEntryOpPublish(id: number): Promise<JournalEntry> {
    return this.#client.web.fetchJson(`/accounting/journalEntryOpPublish/${id}`, {
      method: "POST",
      
    });
  }

  async journalEntryOpPublishRevert(id: number): Promise<JournalEntry> {
    return this.#client.web.fetchJson(`/accounting/journalEntryOpPublishRevert/${id}`, {
      method: "POST",
      
    });
  }

  async journalEntryOpUpdate(args: any): Promise<JournalEntry> {
    return this.#client.web.fetchJson("/accounting/journalEntryOpUpdate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async journalEntryRead(search: any): Promise<JournalEntry[]> {
    return this.#client.web.fetchJson(`/accounting/journalEntry?${search}`, {
      method: "GET",
      
    });
  }

  async journalEntryReadById(id: number): Promise<JournalEntry> {
    return this.#client.web.fetchJson(`/accounting/journalEntry/${id}`, {
      method: "GET",
      
    });
  }

  async journalEntryUpdate(bean: JournalEntry): Promise<JournalEntry> {
    return this.#client.web.fetchJson("/accounting/journalEntry", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async journalItemCreate(bean: JournalItem): Promise<JournalItem> {
    return this.#client.web.fetchJson("/accounting/journalItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async journalItemDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/journalItem/${id}`, {
      method: "DELETE",
      
    });
  }

  async journalItemRead(search: any): Promise<JournalItem[]> {
    return this.#client.web.fetchJson(`/accounting/journalItem?${search}`, {
      method: "GET",
      
    });
  }

  async journalItemReadById(id: number): Promise<JournalItem> {
    return this.#client.web.fetchJson(`/accounting/journalItem/${id}`, {
      method: "GET",
      
    });
  }

  async journalItemUpdate(bean: JournalItem): Promise<JournalItem> {
    return this.#client.web.fetchJson("/accounting/journalItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async ledgerItemBalanceRead(search: any): Promise<LedgerItemBalance[]> {
    return this.#client.web.fetchJson(`/accounting/ledgerItemBalance?${search}`, {
      method: "GET",
      
    });
  }

  async ledgerItemRead(search: any): Promise<LedgerItem[]> {
    return this.#client.web.fetchJson(`/accounting/ledgerItem?${search}`, {
      method: "GET",
      
    });
  }

  async ledgerItemReadById(id: number): Promise<LedgerItem> {
    return this.#client.web.fetchJson(`/accounting/ledgerItem/${id}`, {
      method: "GET",
      
    });
  }

  async resultCenterChartCreate(bean: ResultCenterChart): Promise<ResultCenterChart> {
    return this.#client.web.fetchJson("/accounting/resultCenterChart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async resultCenterChartDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/resultCenterChart/${id}`, {
      method: "DELETE",
      
    });
  }

  async resultCenterChartOpLevelCreate(id: number, level: number, digits: number): Promise<ResultCenterChart> {
    const sp = new URLSearchParams();
    if (level) sp.set("level", String(level));
    if (digits) sp.set("digits", String(digits));
    return this.#client.web.fetchJson(`/accounting/resultCenterChartOpLevelCreate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async resultCenterChartOpLevelDelete(id: number, level: number): Promise<ResultCenterChart> {
    const sp = new URLSearchParams();
    if (level) sp.set("level", String(level));
    return this.#client.web.fetchJson(`/accounting/resultCenterChartOpLevelDelete/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async resultCenterChartOpLevelUpdate(id: number, level: number, digits: number): Promise<ResultCenterChart> {
    const sp = new URLSearchParams();
    if (level) sp.set("level", String(level));
    if (digits) sp.set("digits", String(digits));
    return this.#client.web.fetchJson(`/accounting/resultCenterChartOpLevelUpdate/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async resultCenterChartRead(search: any): Promise<ResultCenterChart[]> {
    return this.#client.web.fetchJson(`/accounting/resultCenterChart?${search}`, {
      method: "GET",
      
    });
  }

  async resultCenterChartReadById(id: number): Promise<ResultCenterChart> {
    return this.#client.web.fetchJson(`/accounting/resultCenterChart/${id}`, {
      method: "GET",
      
    });
  }

  async resultCenterChartUpdate(bean: ResultCenterChart): Promise<ResultCenterChart> {
    return this.#client.web.fetchJson("/accounting/resultCenterChart", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async resultCenterCreate(bean: ResultCenter): Promise<ResultCenter> {
    return this.#client.web.fetchJson("/accounting/resultCenter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async resultCenterDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/accounting/resultCenter/${id}`, {
      method: "DELETE",
      
    });
  }

  async resultCenterRead(search: any): Promise<ResultCenter[]> {
    return this.#client.web.fetchJson(`/accounting/resultCenter?${search}`, {
      method: "GET",
      
    });
  }

  async resultCenterReadById(id: number): Promise<ResultCenter> {
    return this.#client.web.fetchJson(`/accounting/resultCenter/${id}`, {
      method: "GET",
      
    });
  }

  async resultCenterUpdate(bean: ResultCenter): Promise<ResultCenter> {
    return this.#client.web.fetchJson("/accounting/resultCenter", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
