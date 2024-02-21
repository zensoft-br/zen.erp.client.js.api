export class CommercialService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async priceListChangeRequestCreate(bean) {
    return this.#zenClient.web.fetchJson("/commercial/priceListChangeRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async priceListChangeRequestDelete(id) {
    this.#zenClient.web.fetchJson(`/commercial/priceListChangeRequest/${id}`, {
      method: "DELETE",

    });
  }

  async priceListChangeRequestOpApprove(id) {
    this.#zenClient.web.fetchJson(`/commercial/priceListChangeRequestOpApprove/${id}`, {
      method: "POST",

    });
  }

  async priceListChangeRequestOpReject(id) {
    this.#zenClient.web.fetchJson(`/commercial/priceListChangeRequestOpReject/${id}`, {
      method: "POST",

    });
  }

  async priceListChangeRequestRead(search) {
    return this.#zenClient.web.fetchJson(`/commercial/priceListChangeRequest?${search}`, {
      method: "GET",

    });
  }

  async priceListChangeRequestReadById(id) {
    return this.#zenClient.web.fetchJson(`/commercial/priceListChangeRequest/${id}`, {
      method: "GET",

    });
  }

  async priceListOpFind(id, productId, productPackingId, currencyId) {
    return this.#zenClient.web.fetchJson(`/commercial/priceListOpFind/${id}?productId=${productId}&productPackingId=${productPackingId}&currencyId=${currencyId}`, {
      method: "POST",

    });
  }

  async priceListOpImport(id, args) {
    return this.#zenClient.web.fetchJson(`/commercial/priceListOpImport/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async priceListTransformationCreate(bean) {
    return this.#zenClient.web.fetchJson("/commercial/priceListTransformation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async priceListTransformationDelete(id) {
    this.#zenClient.web.fetchJson(`/commercial/priceListTransformation/${id}`, {
      method: "DELETE",

    });
  }

  async priceListTransformationOpCalculate(id) {
    this.#zenClient.web.fetchJson(`/commercial/priceListTransformationOpCalculate/${id}`, {
      method: "POST",

    });
  }

  async priceListTransformationRead(search) {
    return this.#zenClient.web.fetchJson(`/commercial/priceListTransformation?${search}`, {
      method: "GET",

    });
  }

  async priceListTransformationReadById(id) {
    return this.#zenClient.web.fetchJson(`/commercial/priceListTransformation/${id}`, {
      method: "GET",

    });
  }

  async priceListTransformationUpdate(bean) {
    return this.#zenClient.web.fetchJson("/commercial/priceListTransformation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
