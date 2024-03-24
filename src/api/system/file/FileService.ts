import { Client } from "../../../Client.js";
import { File } from "./File.js";

export class FileService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async fileCreate(args: File): Promise<File> {
    return this.#client.web.fetchJson("/system/file/file", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async fileDelete(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/file/file/${id}`, {
      method: "DELETE",
      
    });
  }

  async fileOpReadContent(id: number): Promise<any> {
    return this.#client.web.fetchBlob(`/system/file/fileOpReadContent/${id}`, {
      method: "POST",
      
    });
  }

  async fileRead(search: any): Promise<File[]> {
    return this.#client.web.fetchJson(`/system/file/file?${search}`, {
      method: "GET",
      
    });
  }

  async fileReadById(id: number): Promise<File> {
    return this.#client.web.fetchJson(`/system/file/file/${id}`, {
      method: "GET",
      
    });
  }

  async fileUpdate(bean: File): Promise<File> {
    return this.#client.web.fetchJson("/system/file/file", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
