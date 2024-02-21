export class ReceivableService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

}
