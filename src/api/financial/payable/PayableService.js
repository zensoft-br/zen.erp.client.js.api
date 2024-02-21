export class PayableService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

}
