import { AppError, BackendErrorResponse } from "./AppError.js";
import { Client } from "./Client.js";

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

  async handleResponse(response: Response) {
    Web.handleResponse(response);
  }

  static async handleResponse(response: Response): Promise<void> {
    if (response.ok) return;

    const status = response.status;
    const rawBody = await response.text();

    try {
      const json = JSON.parse(rawBody) as BackendErrorResponse;

      const errorData: BackendErrorResponse = {
        message: json.message || response.statusText || `Error ${status}`,
        status: json.status ?? status,
        timestamp: json.timestamp ?? Date.now(),
        errors: json.errors ?? [],
        stackTrace: json.stackTrace,
        exceptionClass: json.exceptionClass
      };

      throw new AppError(errorData);
    } catch (e) {
      if (e instanceof AppError) throw e;

      throw new AppError({
        message: rawBody || response.statusText || "Unknown Network Error",
        status: status,
        timestamp: Date.now(),
        errors: [{ type: 'generic', message: rawBody || response.statusText }]
      });
    }
  }

}