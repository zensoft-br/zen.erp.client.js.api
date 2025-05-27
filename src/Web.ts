import { Client } from "./Client.js";
import { AppError } from "./AppError.js";

export default class Web {

  #zenClient: Client;

  constructor(zenClient: Client) {
    this.#zenClient = zenClient;
  }

  async fetch(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> {
    return this.#zenClient.fetch(input, init);
  }

  async fetchBlob(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Blob> {
    const response = await this.#zenClient.fetch(input, init);
    await Web.handleResponse(response);
    return response.blob();
  }

  async fetchJson(input: string | URL | globalThis.Request, init?: RequestInit): Promise<any> {
    const response = await this.#zenClient.fetch(input, init);
    await Web.handleResponse(response);
    const text = await response.text();
    return text == null || text === "" ? null : JSON.parse(text);
  }

  async fetchJsonRequired(input: string | URL | globalThis.Request, init?: RequestInit): Promise<any> {
    const result = await this.fetchJson(input, init);
    if (result == null) {
      throw new Error(`Not found: ${input}`);
    }
    return result;
  }

  async fetchOk(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> {
    const response = await this.#zenClient.fetch(input, init);
    await Web.handleResponse(response);
    return response;
  }

  async fetchText(input: string | URL | globalThis.Request, init?: RequestInit): Promise<string> {
    const response = await this.#zenClient.fetch(input, init);
    await Web.handleResponse(response);
    return response.text();
  }

  static async handleResponse(response: Response) {
    if (!response.ok) {
      const status = response.status;

      let message = await response.text();

      let error: Error;

      try {
        const json = JSON.parse(message);

        if (json.message)
          message = json.message;
        else
          message = response.statusText;

        error = new AppError(message, {
          status,
          payload: json,
        });
      } catch (error) {
        throw new AppError(message, {
          status
        });
      }

      throw error;
    }
  }

}