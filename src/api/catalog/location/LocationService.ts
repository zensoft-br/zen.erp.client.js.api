import { Client } from "../../../Client.js";
import { City } from "./City.js";
import { Country } from "./Country.js";
import { Geocode } from "./Geocode.js";
import { State } from "./State.js";
import { Zipcode } from "./Zipcode.js";

export class LocationService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async cityCreate(bean: City): Promise<City> {
    return this.#client.web.fetchJson("/catalog/location/city", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async cityDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/location/city/${id}`, {
      method: "DELETE",
      
    });
  }

  async cityOpFind(args: any): Promise<City> {
    return this.#client.web.fetchJson("/catalog/location/cityOpFind", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async cityRead(search: any): Promise<City[]> {
    return this.#client.web.fetchJson(`/catalog/location/city?${search}`, {
      method: "GET",
      
    });
  }

  async cityReadById(id: number): Promise<City> {
    return this.#client.web.fetchJson(`/catalog/location/city/${id}`, {
      method: "GET",
      
    });
  }

  async cityUpdate(bean: City): Promise<City> {
    return this.#client.web.fetchJson("/catalog/location/city", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async countryCreate(bean: Country): Promise<Country> {
    return this.#client.web.fetchJson("/catalog/location/country", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async countryDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/location/country/${id}`, {
      method: "DELETE",
      
    });
  }

  async countryRead(search: any): Promise<Country[]> {
    return this.#client.web.fetchJson(`/catalog/location/country?${search}`, {
      method: "GET",
      
    });
  }

  async countryReadById(id: number): Promise<Country> {
    return this.#client.web.fetchJson(`/catalog/location/country/${id}`, {
      method: "GET",
      
    });
  }

  async countryUpdate(bean: Country): Promise<Country> {
    return this.#client.web.fetchJson("/catalog/location/country", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async geocodeRead(address: string): Promise<Geocode> {
    const sp = new URLSearchParams();
    if (address) sp.set("address", String(address));
    return this.#client.web.fetchJson(`/catalog/location/geocode?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async stateCreate(bean: State): Promise<State> {
    return this.#client.web.fetchJson("/catalog/location/state", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async stateDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/catalog/location/state/${id}`, {
      method: "DELETE",
      
    });
  }

  async stateRead(search: any): Promise<State[]> {
    return this.#client.web.fetchJson(`/catalog/location/state?${search}`, {
      method: "GET",
      
    });
  }

  async stateReadById(id: number): Promise<State> {
    return this.#client.web.fetchJson(`/catalog/location/state/${id}`, {
      method: "GET",
      
    });
  }

  async stateUpdate(bean: State): Promise<State> {
    return this.#client.web.fetchJson("/catalog/location/state", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async zipcodeRead(country: string, zipcode: string): Promise<Zipcode> {
    const sp = new URLSearchParams();
    if (country) sp.set("country", String(country));
    if (zipcode) sp.set("zipcode", String(zipcode));
    return this.#client.web.fetchJson(`/catalog/location/zipcode?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  }
