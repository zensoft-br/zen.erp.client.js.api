import { Client } from "../../../Client.js";
import { Reservation } from "./Reservation.js";

export class ReservationService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async reservationCreate(args: any): Promise<Reservation> {
    return this.#client.web.fetchJson("/supply/reservation/reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async reservationDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/supply/reservation/reservation/${id}`, {
      method: "DELETE",
      
    });
  }

  async reservationRead(search: any): Promise<Reservation[]> {
    return this.#client.web.fetchJson(`/supply/reservation/reservation?${search}`, {
      method: "GET",
      
    });
  }

  async reservationReadById(id: number): Promise<Reservation> {
    return this.#client.web.fetchJson(`/supply/reservation/reservation/${id}`, {
      method: "GET",
      
    });
  }

  async reservationUpdate(bean: Reservation): Promise<Reservation> {
    return this.#client.web.fetchJson("/supply/reservation/reservation", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
