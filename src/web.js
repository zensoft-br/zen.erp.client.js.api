export default class Web {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async fetch(input, init) {
    return this.#zenClient.fetch(input, init);
  }

  async fetchBlob(input, init) {
    const response = await this.#zenClient.fetch(input, init);
    await this.handleResponse(response);
    return response.blob();
  }

  async fetchJson(input, init) {
    const response = await this.#zenClient.fetch(input, init);
    await this.handleResponse(response);
    const text = await response.text();
    return text == null || text === "" ? null : JSON.parse(text);
  }

  async fetchJsonRequired(input, init) {
    const result = await this.fetchJson(input, init);
    if (result == null) {
      throw new Error(`Not found: ${input}`);
    }
    return result;
  }

  async fetchOk(input, init) {
    const response = await this.#zenClient.fetch(input, init);
    await this.handleResponse(response);
    return response;
  }

  async fetchText(input, init) {
    const response = await this.#zenClient.fetch(input, init);
    await this.handleResponse(response);
    return response.text();
  }

  async handleResponse(response) {
    if (!response.ok) {
      const text = await response.text();
      let error = null;
      try {
        const json = JSON.parse(text);
        error = new Error(json.message ?? text);
      } catch (_) {
        error = new Error(`${response.status} ${text}`);
      }
      throw error;
    }
  }

}