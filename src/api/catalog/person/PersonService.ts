import { Client } from "../../../Client.js";
import { Person } from "./Person.js";
import { PersonAddress } from "./PersonAddress.js";
import { PersonBasic } from "./PersonBasic.js";
import { PersonComment } from "./PersonComment.js";
import { PersonContact } from "./PersonContact.js";
import { PersonDocument } from "./PersonDocument.js";
import { PersonGroup } from "./PersonGroup.js";

export class PersonService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async personAddressCreate(bean: PersonAddress): Promise<PersonAddress> {
    return this.#client.web.fetchJson("/catalog/person/personAddress", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personAddressDelete(id: number): Promise<PersonAddress> {
    return this.#client.web.fetchJson(`/catalog/person/personAddress/${id}`, {
      method: "DELETE",
      
    });
  }

  async personAddressOpSetDefault(id: number): Promise<PersonAddress> {
    return this.#client.web.fetchJson(`/catalog/person/personAddressOpSetDefault/${id}`, {
      method: "POST",
      
    });
  }

  async personAddressRead(search: any): Promise<PersonAddress[]> {
    return this.#client.web.fetchJson(`/catalog/person/personAddress?${search}`, {
      method: "GET",
      
    });
  }

  async personAddressReadById(id: number): Promise<PersonAddress> {
    return this.#client.web.fetchJson(`/catalog/person/personAddress/${id}`, {
      method: "GET",
      
    });
  }

  async personAddressUpdate(bean: PersonAddress): Promise<PersonAddress> {
    return this.#client.web.fetchJson("/catalog/person/personAddress", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personBasicRead(search: any): Promise<PersonBasic[]> {
    return this.#client.web.fetchJson(`/catalog/person/personBasic?${search}`, {
      method: "GET",
      
    });
  }

  async personBasicReadById(id: number): Promise<PersonBasic> {
    return this.#client.web.fetchJson(`/catalog/person/personBasic/${id}`, {
      method: "GET",
      
    });
  }

  async personCommentCreate(bean: PersonComment): Promise<PersonComment> {
    return this.#client.web.fetchJson("/catalog/person/personComment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personCommentDelete(id: number): Promise<PersonComment> {
    return this.#client.web.fetchJson(`/catalog/person/personComment/${id}`, {
      method: "DELETE",
      
    });
  }

  async personCommentRead(search: any): Promise<PersonComment[]> {
    return this.#client.web.fetchJson(`/catalog/person/personComment?${search}`, {
      method: "GET",
      
    });
  }

  async personCommentReadById(id: number): Promise<PersonComment> {
    return this.#client.web.fetchJson(`/catalog/person/personComment/${id}`, {
      method: "GET",
      
    });
  }

  async personCommentUpdate(bean: PersonComment): Promise<PersonComment> {
    return this.#client.web.fetchJson("/catalog/person/personComment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personContactCreate(bean: PersonContact): Promise<PersonContact> {
    return this.#client.web.fetchJson("/catalog/person/personContact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personContactDelete(id: number): Promise<PersonContact> {
    return this.#client.web.fetchJson(`/catalog/person/personContact/${id}`, {
      method: "DELETE",
      
    });
  }

  async personContactRead(search: any): Promise<PersonContact[]> {
    return this.#client.web.fetchJson(`/catalog/person/personContact?${search}`, {
      method: "GET",
      
    });
  }

  async personContactReadById(id: number): Promise<PersonContact> {
    return this.#client.web.fetchJson(`/catalog/person/personContact/${id}`, {
      method: "GET",
      
    });
  }

  async personContactUpdate(bean: PersonContact): Promise<PersonContact> {
    return this.#client.web.fetchJson("/catalog/person/personContact", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personCreate(bean: Person): Promise<Person> {
    return this.#client.web.fetchJson("/catalog/person/person", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personDelete(id: number): Promise<Person> {
    return this.#client.web.fetchJson(`/catalog/person/person/${id}`, {
      method: "DELETE",
      
    });
  }

  async personDocumentCreate(bean: PersonDocument): Promise<PersonDocument> {
    return this.#client.web.fetchJson("/catalog/person/personDocument", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personDocumentDelete(id: number): Promise<PersonDocument> {
    return this.#client.web.fetchJson(`/catalog/person/personDocument/${id}`, {
      method: "DELETE",
      
    });
  }

  async personDocumentRead(search: any): Promise<PersonDocument[]> {
    return this.#client.web.fetchJson(`/catalog/person/personDocument?${search}`, {
      method: "GET",
      
    });
  }

  async personDocumentReadById(id: number): Promise<PersonDocument> {
    return this.#client.web.fetchJson(`/catalog/person/personDocument/${id}`, {
      method: "GET",
      
    });
  }

  async personDocumentUpdate(bean: PersonDocument): Promise<PersonDocument> {
    return this.#client.web.fetchJson("/catalog/person/personDocument", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personGroupCreate(bean: PersonGroup): Promise<PersonGroup> {
    return this.#client.web.fetchJson("/catalog/person/personGroup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personGroupDelete(id: number): Promise<PersonGroup> {
    return this.#client.web.fetchJson(`/catalog/person/personGroup/${id}`, {
      method: "DELETE",
      
    });
  }

  async personGroupRead(search: any): Promise<PersonGroup[]> {
    return this.#client.web.fetchJson(`/catalog/person/personGroup?${search}`, {
      method: "GET",
      
    });
  }

  async personGroupReadById(id: number): Promise<PersonGroup> {
    return this.#client.web.fetchJson(`/catalog/person/personGroup/${id}`, {
      method: "GET",
      
    });
  }

  async personGroupUpdate(bean: PersonGroup): Promise<PersonGroup> {
    return this.#client.web.fetchJson("/catalog/person/personGroup", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async personOpReadFromPersonDirectory(documentType: string, documentNumber: string): Promise<Person> {
    const sp = new URLSearchParams();
    if (documentType) sp.set("documentType", String(documentType));
    if (documentNumber) sp.set("documentNumber", String(documentNumber));
    return this.#client.web.fetchJson(`/catalog/person/personOpReadFromPersonDirectory?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async personRead(search: any): Promise<Person[]> {
    return this.#client.web.fetchJson(`/catalog/person/person?${search}`, {
      method: "GET",
      
    });
  }

  async personReadById(id: number): Promise<Person> {
    return this.#client.web.fetchJson(`/catalog/person/person/${id}`, {
      method: "GET",
      
    });
  }

  async personUpdate(bean: Person): Promise<Person> {
    return this.#client.web.fetchJson("/catalog/person/person", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
