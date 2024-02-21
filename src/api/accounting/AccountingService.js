export class AccountingService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async accountCategoryCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountCategoryDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/accountCategory/${id}`, {
      method: "DELETE",

    });
  }

  async accountCategoryRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/accountCategory?${search}`, {
      method: "GET",

    });
  }

  async accountCategoryReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/accountCategory/${id}`, {
      method: "GET",

    });
  }

  async accountCategoryUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountCategory", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountChartCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountChart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountChartDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/accountChart/${id}`, {
      method: "DELETE",

    });
  }

  async accountChartOpClone(id) {
    return this.#zenClient.web.fetchJson(`/accounting/accountChartOpClone/${id}`, {
      method: "POST",

    });
  }

  async accountChartOpImport(id, args) {
    this.#zenClient.web.fetchJson(`/accounting/accountChartOpImport/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async accountChartOpLevelCreate(id, level, digits) {
    return this.#zenClient.web.fetchJson(`/accounting/accountChartOpLevelCreate/${id}?level=${level}&digits=${digits}`, {
      method: "POST",

    });
  }

  async accountChartOpLevelDelete(id, level) {
    return this.#zenClient.web.fetchJson(`/accounting/accountChartOpLevelDelete/${id}?level=${level}`, {
      method: "POST",

    });
  }

  async accountChartOpLevelUpdate(id, level, digits) {
    return this.#zenClient.web.fetchJson(`/accounting/accountChartOpLevelUpdate/${id}?level=${level}&digits=${digits}`, {
      method: "POST",

    });
  }

  async accountChartOpNextShortCode(id) {
    return this.#zenClient.web.fetchJson(`/accounting/accountChartOpNextShortCode/${id}`, {
      method: "POST",

    });
  }

  async accountChartRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/accountChart?${search}`, {
      method: "GET",

    });
  }

  async accountChartReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/accountChart/${id}`, {
      method: "GET",

    });
  }

  async accountChartUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountChart", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountConversionChartCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountConversionChart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountConversionChartDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/accountConversionChart/${id}`, {
      method: "DELETE",

    });
  }

  async accountConversionChartRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/accountConversionChart?${search}`, {
      method: "GET",

    });
  }

  async accountConversionChartReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/accountConversionChart/${id}`, {
      method: "GET",

    });
  }

  async accountConversionChartUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountConversionChart", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountConversionCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountConversion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountConversionDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/accountConversion/${id}`, {
      method: "DELETE",

    });
  }

  async accountConversionRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/accountConversion?${search}`, {
      method: "GET",

    });
  }

  async accountConversionReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/accountConversion/${id}`, {
      method: "GET",

    });
  }

  async accountConversionUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountConversion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/account", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountDefaultCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountDefault", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountDefaultDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/accountDefault/${id}`, {
      method: "DELETE",

    });
  }

  async accountDefaultOpRead(args) {
    return this.#zenClient.web.fetchJson("/accounting/accountDefaultOpRead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async accountDefaultRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/accountDefault?${search}`, {
      method: "GET",

    });
  }

  async accountDefaultReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/accountDefault/${id}`, {
      method: "GET",

    });
  }

  async accountDefaultUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/accountDefault", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accountDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/account/${id}`, {
      method: "DELETE",

    });
  }

  async accountFiscalYearRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/accountFiscalYear?${search}`, {
      method: "GET",

    });
  }

  async accountRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/account?${search}`, {
      method: "GET",

    });
  }

  async accountReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/account/${id}`, {
      method: "GET",

    });
  }

  async accountUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/account", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async assetInventoryCurrentRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/assetInventoryCurrent?${search}`, {
      method: "GET",

    });
  }

  async assetInventoryRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/assetInventory?${search}`, {
      method: "GET",

    });
  }

  async assetTagRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/assetTag?${search}`, {
      method: "GET",

    });
  }

  async assetTagReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/assetTag/${id}`, {
      method: "GET",

    });
  }

  async fiscalYearOpClose(id) {
    this.#zenClient.web.fetchJson(`/accounting/fiscalYearOpClose/${id}`, {
      method: "POST",

    });
  }

  async journalEntryCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/journalEntry", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async journalEntryDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/journalEntry/${id}`, {
      method: "DELETE",

    });
  }

  async journalEntryOpCreate(args) {
    return this.#zenClient.web.fetchJson("/accounting/journalEntryOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async journalEntryOpPublish(id) {
    return this.#zenClient.web.fetchJson(`/accounting/journalEntryOpPublish/${id}`, {
      method: "POST",

    });
  }

  async journalEntryOpPublishRevert(id) {
    return this.#zenClient.web.fetchJson(`/accounting/journalEntryOpPublishRevert/${id}`, {
      method: "POST",

    });
  }

  async journalEntryOpUpdate(args) {
    return this.#zenClient.web.fetchJson("/accounting/journalEntryOpUpdate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async journalEntryRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/journalEntry?${search}`, {
      method: "GET",

    });
  }

  async journalEntryReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/journalEntry/${id}`, {
      method: "GET",

    });
  }

  async journalEntryUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/journalEntry", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async journalItemCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/journalItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async journalItemDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/journalItem/${id}`, {
      method: "DELETE",

    });
  }

  async journalItemRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/journalItem?${search}`, {
      method: "GET",

    });
  }

  async journalItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/journalItem/${id}`, {
      method: "GET",

    });
  }

  async journalItemUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/journalItem", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async ledgerItemBalanceRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/ledgerItemBalance?${search}`, {
      method: "GET",

    });
  }

  async ledgerItemRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/ledgerItem?${search}`, {
      method: "GET",

    });
  }

  async ledgerItemReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/ledgerItem/${id}`, {
      method: "GET",

    });
  }

  async resultCenterChartCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/resultCenterChart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async resultCenterChartDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/resultCenterChart/${id}`, {
      method: "DELETE",

    });
  }

  async resultCenterChartOpLevelCreate(id, level, digits) {
    return this.#zenClient.web.fetchJson(`/accounting/resultCenterChartOpLevelCreate/${id}?level=${level}&digits=${digits}`, {
      method: "POST",

    });
  }

  async resultCenterChartOpLevelDelete(id, level) {
    return this.#zenClient.web.fetchJson(`/accounting/resultCenterChartOpLevelDelete/${id}?level=${level}`, {
      method: "POST",

    });
  }

  async resultCenterChartOpLevelUpdate(id, level, digits) {
    return this.#zenClient.web.fetchJson(`/accounting/resultCenterChartOpLevelUpdate/${id}?level=${level}&digits=${digits}`, {
      method: "POST",

    });
  }

  async resultCenterChartRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/resultCenterChart?${search}`, {
      method: "GET",

    });
  }

  async resultCenterChartReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/resultCenterChart/${id}`, {
      method: "GET",

    });
  }

  async resultCenterChartUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/resultCenterChart", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async resultCenterCreate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/resultCenter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async resultCenterDelete(id) {
    this.#zenClient.web.fetchJson(`/accounting/resultCenter/${id}`, {
      method: "DELETE",

    });
  }

  async resultCenterRead(search) {
    return this.#zenClient.web.fetchJson(`/accounting/resultCenter?${search}`, {
      method: "GET",

    });
  }

  async resultCenterReadById(id) {
    return this.#zenClient.web.fetchJson(`/accounting/resultCenter/${id}`, {
      method: "GET",

    });
  }

  async resultCenterUpdate(bean) {
    return this.#zenClient.web.fetchJson("/accounting/resultCenter", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
