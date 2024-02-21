export class FiscalBrService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async dfeNfeProcInCreate(args) {
    return this.#zenClient.web.fetchJson("/fiscal/br/dfeNfeProcIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeNfeProcInDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcIn/${id}`, {
      method: "DELETE",

    });
  }

  async dfeNfeProcInOpIncomingInvoiceCreate(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeNfeProcInOpIncomingInvoiceCreateRevert(id) {
    this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert/${id}`, {
      method: "POST",

    });
  }

  async dfeNfeProcInRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcIn?${search}`, {
      method: "GET",

    });
  }

  async dfeNfeProcInReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcIn/${id}`, {
      method: "GET",

    });
  }

  async dfeNfeProcOutDelete(id) {
    this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOut/${id}`, {
      method: "DELETE",

    });
  }

  async dfeNfeProcOutOpCancel(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpCancel/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpConfirm(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpConfirm/${id}`, {
      method: "POST",

    });
  }

  async dfeNfeProcOutOpCorrect(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpCorrect/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpCreate(invoiceId) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpCreate?invoiceId=${invoiceId}`, {
      method: "POST",

    });
  }

  async dfeNfeProcOutOpDownload(args) {
    return this.#zenClient.web.fetchJson("/fiscal/br/dfeNfeProcOutOpDownload", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpOutgoingInvoiceCreate(id, args) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutOpSign(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpSign/${id}`, {
      method: "POST",

    });
  }

  async dfeNfeProcOutOpSignRevert(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpSignRevert/${id}`, {
      method: "POST",

    });
  }

  async dfeNfeProcOutOpTransmit(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOutOpTransmit/${id}`, {
      method: "POST",

    });
  }

  async dfeNfeProcOutOpUpload(args) {
    return this.#zenClient.web.fetchJson("/fiscal/br/dfeNfeProcOutOpUpload", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeNfeProcOutRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOut?${search}`, {
      method: "GET",

    });
  }

  async dfeNfeProcOutReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeNfeProcOut/${id}`, {
      method: "GET",

    });
  }

  async dfeOpReadContent(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeOpReadContent/${id}`, {
      method: "POST",

    });
  }

  async dfeProcEventoNFeInRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeProcEventoNFeIn?${search}`, {
      method: "GET",

    });
  }

  async dfeProcEventoNFeInReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeProcEventoNFeIn/${id}`, {
      method: "GET",

    });
  }

  async dfeProcEventoNFeOutRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeProcEventoNFeOut?${search}`, {
      method: "GET",

    });
  }

  async dfeProcEventoNFeOutReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeProcEventoNFeOut/${id}`, {
      method: "GET",

    });
  }

  async dfeProcInutNFeCreate(args) {
    return this.#zenClient.web.fetchJson("/fiscal/br/dfeProcInutNFe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async dfeProcInutNFeRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeProcInutNFe?${search}`, {
      method: "GET",

    });
  }

  async dfeProcInutNFeReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeProcInutNFe/${id}`, {
      method: "GET",

    });
  }

  async dfeRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfe?${search}`, {
      method: "GET",

    });
  }

  async dfeReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfe/${id}`, {
      method: "GET",

    });
  }

  async dfeResEventoRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeResEvento?${search}`, {
      method: "GET",

    });
  }

  async dfeResEventoReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeResEvento/${id}`, {
      method: "GET",

    });
  }

  async dfeResNFeInOpManifest(id, status) {
    this.#zenClient.web.fetchJson(`/fiscal/br/dfeResNFeInOpManifest/${id}?status=${status}`, {
      method: "POST",

    });
  }

  async dfeResNFeInRead(search) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeResNFeIn?${search}`, {
      method: "GET",

    });
  }

  async dfeResNFeInReadById(id) {
    return this.#zenClient.web.fetchJson(`/fiscal/br/dfeResNFeIn/${id}`, {
      method: "GET",

    });
  }

  async documentSefazOpFetch(args) {
    this.#zenClient.web.fetchJson("/fiscal/br/documentSefazOpFetch", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async spedOpExport(args) {
    return this.#zenClient.web.fetchJson("/fiscal/br/spedOpExport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

}
