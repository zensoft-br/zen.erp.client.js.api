export class ProductService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async codeConversionCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/codeConversion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async codeConversionDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/codeConversion/${id}`, {
      method: "DELETE",
      
    });
  }

  async codeConversionListCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/codeConversionList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async codeConversionListDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/codeConversionList/${id}`, {
      method: "DELETE",
      
    });
  }

  async codeConversionListRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/codeConversionList?${search}`, {
      method: "GET",
      
    });
  }

  async codeConversionListReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/codeConversionList/${id}`, {
      method: "GET",
      
    });
  }

  async codeConversionListUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/codeConversionList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async codeConversionRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/codeConversion?${search}`, {
      method: "GET",
      
    });
  }

  async codeConversionReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/codeConversion/${id}`, {
      method: "GET",
      
    });
  }

  async codeConversionUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/codeConversion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dimensionCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/dimension", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dimensionDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/dimension/${id}`, {
      method: "DELETE",
      
    });
  }

  async dimensionRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/dimension?${search}`, {
      method: "GET",
      
    });
  }

  async dimensionReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/dimension/${id}`, {
      method: "GET",
      
    });
  }

  async dimensionUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/dimension", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/product/${id}`, {
      method: "DELETE",
      
    });
  }

  async productKitComponentCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productKitComponent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productKitComponentDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/productKitComponent/${id}`, {
      method: "DELETE",
      
    });
  }

  async productKitComponentRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productKitComponent?${search}`, {
      method: "GET",
      
    });
  }

  async productKitComponentReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productKitComponent/${id}`, {
      method: "GET",
      
    });
  }

  async productKitComponentUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productKitComponent", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productOpClone(id, args) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productOpClone/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async productOpConvertToUnit(id, unitId, quantity) {
    const sp = new URLSearchParams();
    if (unitId) sp.set("unitId", unitId);
    if (quantity) sp.set("quantity", quantity);
    return this.#zenClient.web.fetchJson(`/catalog/product/productOpConvertToUnit/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async productPackingCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productPacking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productPackingDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/productPacking/${id}`, {
      method: "DELETE",
      
    });
  }

  async productPackingOpConvertToUnit(id, unitId, quantity) {
    const sp = new URLSearchParams();
    if (unitId) sp.set("unitId", unitId);
    if (quantity) sp.set("quantity", quantity);
    return this.#zenClient.web.fetchJson(`/catalog/product/productPackingOpConvertToUnit/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async productPackingRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productPacking?${search}`, {
      method: "GET",
      
    });
  }

  async productPackingReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productPacking/${id}`, {
      method: "GET",
      
    });
  }

  async productPackingUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productPacking", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/product?${search}`, {
      method: "GET",
      
    });
  }

  async productReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/product/${id}`, {
      method: "GET",
      
    });
  }

  async productUnitConversionCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productUnitConversion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productUnitConversionDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/productUnitConversion/${id}`, {
      method: "DELETE",
      
    });
  }

  async productUnitConversionRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productUnitConversion?${search}`, {
      method: "GET",
      
    });
  }

  async productUnitConversionReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productUnitConversion/${id}`, {
      method: "GET",
      
    });
  }

  async productUnitConversionUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productUnitConversion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/product", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productVariantCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productVariant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productVariantDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/productVariant/${id}`, {
      method: "DELETE",
      
    });
  }

  async productVariantRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productVariant?${search}`, {
      method: "GET",
      
    });
  }

  async productVariantReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/productVariant/${id}`, {
      method: "GET",
      
    });
  }

  async productVariantUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/productVariant", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async unitCreate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/unit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async unitDelete(id) {
    this.#zenClient.web.fetchJson(`/catalog/product/unit/${id}`, {
      method: "DELETE",
      
    });
  }

  async unitRead(search) {
    return this.#zenClient.web.fetchJson(`/catalog/product/unit?${search}`, {
      method: "GET",
      
    });
  }

  async unitReadById(id) {
    return this.#zenClient.web.fetchJson(`/catalog/product/unit/${id}`, {
      method: "GET",
      
    });
  }

  async unitUpdate(bean) {
    return this.#zenClient.web.fetchJson("/catalog/product/unit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
