export class ReservationService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async reservationCreate(args) {
    return this.#zenClient.web.fetchJson("/supply/reservation/reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async reservationDelete(id) {
    this.#zenClient.web.fetchJson(`/supply/reservation/reservation/${id}`, {
      method: "DELETE",

    });
  }

  async reservationRead(search) {
    return this.#zenClient.web.fetchJson(`/supply/reservation/reservation?${search}`, {
      method: "GET",

    });
  }

  async reservationReadById(id) {
    return this.#zenClient.web.fetchJson(`/supply/reservation/reservation/${id}`, {
      method: "GET",

    });
  }

  async reservationUpdate(bean) {
    return this.#zenClient.web.fetchJson("/supply/reservation/reservation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
