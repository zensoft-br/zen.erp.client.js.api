import { Client } from "../../../Client.js";
import { CodeConversion } from "./CodeConversion.js";
import { CodeConversionList } from "./CodeConversionList.js";
import { Dimension } from "./Dimension.js";
import { Product } from "./Product.js";
import { ProductKitComponent } from "./ProductKitComponent.js";
import { ProductPacking } from "./ProductPacking.js";
import { ProductUnitConversion } from "./ProductUnitConversion.js";
import { ProductVariant } from "./ProductVariant.js";
import { Unit } from "./Unit.js";

export class ProductService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async codeConversionCreate(bean: CodeConversion): Promise<CodeConversion> {
    return this.#client.web.fetchJson("/catalog/product/codeConversion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async codeConversionDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/codeConversion/${id}`, {
      method: "DELETE",
      
    });
  }

  async codeConversionListCreate(bean: CodeConversionList): Promise<CodeConversionList> {
    return this.#client.web.fetchJson("/catalog/product/codeConversionList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async codeConversionListDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/codeConversionList/${id}`, {
      method: "DELETE",
      
    });
  }

  async codeConversionListRead(search: any): Promise<CodeConversionList[]> {
    return this.#client.web.fetchJson(`/catalog/product/codeConversionList?${search}`, {
      method: "GET",
      
    });
  }

  async codeConversionListReadById(id: number): Promise<CodeConversionList> {
    return this.#client.web.fetchJson(`/catalog/product/codeConversionList/${id}`, {
      method: "GET",
      
    });
  }

  async codeConversionListUpdate(bean: CodeConversionList): Promise<CodeConversionList> {
    return this.#client.web.fetchJson("/catalog/product/codeConversionList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async codeConversionRead(search: any): Promise<CodeConversion[]> {
    return this.#client.web.fetchJson(`/catalog/product/codeConversion?${search}`, {
      method: "GET",
      
    });
  }

  async codeConversionReadById(id: number): Promise<CodeConversion> {
    return this.#client.web.fetchJson(`/catalog/product/codeConversion/${id}`, {
      method: "GET",
      
    });
  }

  async codeConversionUpdate(bean: CodeConversion): Promise<CodeConversion> {
    return this.#client.web.fetchJson("/catalog/product/codeConversion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dimensionCreate(bean: Dimension): Promise<Dimension> {
    return this.#client.web.fetchJson("/catalog/product/dimension", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async dimensionDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/dimension/${id}`, {
      method: "DELETE",
      
    });
  }

  async dimensionRead(search: any): Promise<Dimension[]> {
    return this.#client.web.fetchJson(`/catalog/product/dimension?${search}`, {
      method: "GET",
      
    });
  }

  async dimensionReadById(id: number): Promise<Dimension> {
    return this.#client.web.fetchJson(`/catalog/product/dimension/${id}`, {
      method: "GET",
      
    });
  }

  async dimensionUpdate(bean: Dimension): Promise<Dimension> {
    return this.#client.web.fetchJson("/catalog/product/dimension", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productCreate(bean: Product): Promise<Product> {
    return this.#client.web.fetchJson("/catalog/product/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/product/${id}`, {
      method: "DELETE",
      
    });
  }

  async productKitComponentCreate(bean: ProductKitComponent): Promise<ProductKitComponent> {
    return this.#client.web.fetchJson("/catalog/product/productKitComponent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productKitComponentDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/productKitComponent/${id}`, {
      method: "DELETE",
      
    });
  }

  async productKitComponentRead(search: any): Promise<ProductKitComponent[]> {
    return this.#client.web.fetchJson(`/catalog/product/productKitComponent?${search}`, {
      method: "GET",
      
    });
  }

  async productKitComponentReadById(id: number): Promise<ProductKitComponent> {
    return this.#client.web.fetchJson(`/catalog/product/productKitComponent/${id}`, {
      method: "GET",
      
    });
  }

  async productKitComponentUpdate(bean: ProductKitComponent): Promise<ProductKitComponent> {
    return this.#client.web.fetchJson("/catalog/product/productKitComponent", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productOpClone(id: number, args: any): Promise<Product> {
    return this.#client.web.fetchJson(`/catalog/product/productOpClone/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async productOpConvertToUnit(id: number, unitId: number, quantity: number): Promise<number> {
    const sp = new URLSearchParams();
    if (unitId) sp.set("unitId", String(unitId));
    if (quantity) sp.set("quantity", String(quantity));
    return Number(this.#client.web.fetchText(`/catalog/product/productOpConvertToUnit/${id}?${sp.toString()}`, {
      method: "POST",
      
    }));
  }

  async productPackingCreate(bean: ProductPacking): Promise<ProductPacking> {
    return this.#client.web.fetchJson("/catalog/product/productPacking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productPackingDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/productPacking/${id}`, {
      method: "DELETE",
      
    });
  }

  async productPackingOpConvertToUnit(id: number, unitId: number, quantity: number): Promise<number> {
    const sp = new URLSearchParams();
    if (unitId) sp.set("unitId", String(unitId));
    if (quantity) sp.set("quantity", String(quantity));
    return Number(this.#client.web.fetchText(`/catalog/product/productPackingOpConvertToUnit/${id}?${sp.toString()}`, {
      method: "POST",
      
    }));
  }

  async productPackingRead(search: any): Promise<ProductPacking[]> {
    return this.#client.web.fetchJson(`/catalog/product/productPacking?${search}`, {
      method: "GET",
      
    });
  }

  async productPackingReadById(id: number): Promise<ProductPacking> {
    return this.#client.web.fetchJson(`/catalog/product/productPacking/${id}`, {
      method: "GET",
      
    });
  }

  async productPackingUpdate(bean: ProductPacking): Promise<ProductPacking> {
    return this.#client.web.fetchJson("/catalog/product/productPacking", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productRead(search: any): Promise<Product[]> {
    return this.#client.web.fetchJson(`/catalog/product/product?${search}`, {
      method: "GET",
      
    });
  }

  async productReadById(id: number): Promise<Product> {
    return this.#client.web.fetchJson(`/catalog/product/product/${id}`, {
      method: "GET",
      
    });
  }

  async productUnitConversionCreate(bean: ProductUnitConversion): Promise<ProductUnitConversion> {
    return this.#client.web.fetchJson("/catalog/product/productUnitConversion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productUnitConversionDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/productUnitConversion/${id}`, {
      method: "DELETE",
      
    });
  }

  async productUnitConversionRead(search: any): Promise<ProductUnitConversion[]> {
    return this.#client.web.fetchJson(`/catalog/product/productUnitConversion?${search}`, {
      method: "GET",
      
    });
  }

  async productUnitConversionReadById(id: number): Promise<ProductUnitConversion> {
    return this.#client.web.fetchJson(`/catalog/product/productUnitConversion/${id}`, {
      method: "GET",
      
    });
  }

  async productUnitConversionUpdate(bean: ProductUnitConversion): Promise<ProductUnitConversion> {
    return this.#client.web.fetchJson("/catalog/product/productUnitConversion", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productUpdate(bean: Product): Promise<Product> {
    return this.#client.web.fetchJson("/catalog/product/product", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productVariantCreate(bean: ProductVariant): Promise<ProductVariant> {
    return this.#client.web.fetchJson("/catalog/product/productVariant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async productVariantDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/productVariant/${id}`, {
      method: "DELETE",
      
    });
  }

  async productVariantRead(search: any): Promise<ProductVariant[]> {
    return this.#client.web.fetchJson(`/catalog/product/productVariant?${search}`, {
      method: "GET",
      
    });
  }

  async productVariantReadById(id: number): Promise<ProductVariant> {
    return this.#client.web.fetchJson(`/catalog/product/productVariant/${id}`, {
      method: "GET",
      
    });
  }

  async productVariantUpdate(bean: ProductVariant): Promise<ProductVariant> {
    return this.#client.web.fetchJson("/catalog/product/productVariant", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async unitCreate(bean: Unit): Promise<Unit> {
    return this.#client.web.fetchJson("/catalog/product/unit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async unitDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/product/unit/${id}`, {
      method: "DELETE",
      
    });
  }

  async unitRead(search: any): Promise<Unit[]> {
    return this.#client.web.fetchJson(`/catalog/product/unit?${search}`, {
      method: "GET",
      
    });
  }

  async unitReadById(id: number): Promise<Unit> {
    return this.#client.web.fetchJson(`/catalog/product/unit/${id}`, {
      method: "GET",
      
    });
  }

  async unitUpdate(bean: Unit): Promise<Unit> {
    return this.#client.web.fetchJson("/catalog/product/unit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
