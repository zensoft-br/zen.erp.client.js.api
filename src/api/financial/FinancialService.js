export class FinancialService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async currencyCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/currency", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async currencyDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/currency/${id}`, {
      method: "DELETE",

    });
  }

  async currencyExchangeRateCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/currencyExchangeRate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async currencyExchangeRateDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/currencyExchangeRate/${id}`, {
      method: "DELETE",

    });
  }

  async currencyExchangeRateOpConvert(sourceId, destinationId, date, value) {
    return this.#zenClient.web.fetchJson(`/financial/currencyExchangeRateOpConvert?sourceId=${sourceId}&destinationId=${destinationId}&date=${date}&value=${value}`, {
      method: "POST",

    });
  }

  async currencyExchangeRateOpGetExchangeRate(sourceId, destinationId, date) {
    return this.#zenClient.web.fetchJson(`/financial/currencyExchangeRateOpGetExchangeRate?sourceId=${sourceId}&destinationId=${destinationId}&date=${date}`, {
      method: "POST",

    });
  }

  async currencyExchangeRateRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/currencyExchangeRate?${search}`, {
      method: "GET",

    });
  }

  async currencyExchangeRateReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/currencyExchangeRate/${id}`, {
      method: "GET",

    });
  }

  async currencyExchangeRateUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/currencyExchangeRate", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async currencyOpReadByCode(code) {
    return this.#zenClient.web.fetchJson(`/financial/currencyOpReadByCode?code=${code}`, {
      method: "POST",

    });
  }

  async currencyRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/currency?${search}`, {
      method: "GET",

    });
  }

  async currencyReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/currency/${id}`, {
      method: "GET",

    });
  }

  async currencyUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/currency", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async payableCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/payable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async payableDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/payable/${id}`, {
      method: "DELETE",

    });
  }

  async payableOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/financial/payableOpApprove/${id}`, {
      method: "POST",

    });
  }

  async payableOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/payableOpApproveRevert/${id}`, {
      method: "POST",

    });
  }

  async payableOpRepeat(id, args) {
    return this.#zenClient.web.fetchJson(`/financial/payableOpRepeat/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async payableOpSettle(args) {
    return this.#zenClient.web.fetchJson("/financial/payableOpSettle", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async payableOpUpdate(id, args) {
    return this.#zenClient.web.fetchJson(`/financial/payableOpUpdate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async payableRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/payable?${search}`, {
      method: "GET",

    });
  }

  async payableReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/payable/${id}`, {
      method: "GET",

    });
  }

  async payableSettlementBillingTitleRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/payableSettlementBillingTitle?${search}`, {
      method: "GET",

    });
  }

  async payableSettlementBillingTitleReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/payableSettlementBillingTitle/${id}`, {
      method: "GET",

    });
  }

  async payableSettlementDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/payableSettlement/${id}`, {
      method: "DELETE",

    });
  }

  async payableSettlementMethodRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/payableSettlementMethod?${search}`, {
      method: "GET",

    });
  }

  async payableSettlementMethodReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/payableSettlementMethod/${id}`, {
      method: "GET",

    });
  }

  async payableSettlementRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/payableSettlement?${search}`, {
      method: "GET",

    });
  }

  async payableSettlementReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/payableSettlement/${id}`, {
      method: "GET",

    });
  }

  async payableUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/payable", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async receivableCreate(bean) {
    return this.#zenClient.web.fetchJson("/financial/receivable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async receivableDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/receivable/${id}`, {
      method: "DELETE",

    });
  }

  async receivableOpApprove(id) {
    return this.#zenClient.web.fetchJson(`/financial/receivableOpApprove/${id}`, {
      method: "POST",

    });
  }

  async receivableOpApproveRevert(id) {
    return this.#zenClient.web.fetchJson(`/financial/receivableOpApproveRevert/${id}`, {
      method: "POST",

    });
  }

  async receivableOpRepeat(id, args) {
    return this.#zenClient.web.fetchJson(`/financial/receivableOpRepeat/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async receivableOpSettle(args) {
    return this.#zenClient.web.fetchJson("/financial/receivableOpSettle", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async receivableOpUpdate(id, args) {
    return this.#zenClient.web.fetchJson(`/financial/receivableOpUpdate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async receivableRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/receivable?${search}`, {
      method: "GET",

    });
  }

  async receivableReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/receivable/${id}`, {
      method: "GET",

    });
  }

  async receivableSettlementBillingTitleRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/receivableSettlementBillingTitle?${search}`, {
      method: "GET",

    });
  }

  async receivableSettlementBillingTitleReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/receivableSettlementBillingTitle/${id}`, {
      method: "GET",

    });
  }

  async receivableSettlementDelete(id) {
    this.#zenClient.web.fetchJson(`/financial/receivableSettlement/${id}`, {
      method: "DELETE",

    });
  }

  async receivableSettlementMethodRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/receivableSettlementMethod?${search}`, {
      method: "GET",

    });
  }

  async receivableSettlementMethodReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/receivableSettlementMethod/${id}`, {
      method: "GET",

    });
  }

  async receivableSettlementRead(search) {
    return this.#zenClient.web.fetchJson(`/financial/receivableSettlement?${search}`, {
      method: "GET",

    });
  }

  async receivableSettlementReadById(id) {
    return this.#zenClient.web.fetchJson(`/financial/receivableSettlement/${id}`, {
      method: "GET",

    });
  }

  async receivableUpdate(bean) {
    return this.#zenClient.web.fetchJson("/financial/receivable", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
