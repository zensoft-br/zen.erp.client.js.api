import { Client } from "../../../Client.js";
import { AccountStatement } from "./AccountStatement.js";
import { ArgsAccountStatementOpConsolidate } from "./ArgsAccountStatementOpConsolidate.js";
import { ArgsJournalEntry } from "../accounting/ArgsJournalEntry.js";
import { JournalEntry } from "../accounting/JournalEntry.js";

export class TreasuryService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async accountStatementCreate(bean: AccountStatement): Promise<AccountStatement> {
    return this.#client.web.fetchJson("/financial/treasury/accountStatement", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accountStatementDelete(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatement/${id}`, {
      method: "DELETE",
      
    });
  }

  async accountStatementOpConsolidate(id: number, args: ArgsAccountStatementOpConsolidate): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpConsolidate/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async accountStatementOpConsolidateRevert(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpConsolidateRevert/${id}`, {
      method: "POST",
      
    });
  }

  async accountStatementOpIdentify(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpIdentify/${id}`, {
      method: "POST",
      
    });
  }

  async accountStatementOpIdentifyRevert(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpIdentifyRevert/${id}`, {
      method: "POST",
      
    });
  }

  async accountStatementOpIgnore(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpIgnore/${id}`, {
      method: "POST",
      
    });
  }

  async accountStatementOpIgnoreRevert(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpIgnoreRevert/${id}`, {
      method: "POST",
      
    });
  }

  async accountStatementOpSettle(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpSettle/${id}`, {
      method: "POST",
      
    });
  }

  async accountStatementOpSettleRevert(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatementOpSettleRevert/${id}`, {
      method: "POST",
      
    });
  }

  async accountStatementRead(search: any): Promise<AccountStatement[]> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatement?${search}`, {
      method: "GET",
      
    });
  }

  async accountStatementReadById(id: number): Promise<AccountStatement> {
    return this.#client.web.fetchJson(`/financial/treasury/accountStatement/${id}`, {
      method: "GET",
      
    });
  }

  async accountStatementUpdate(bean: AccountStatement): Promise<AccountStatement> {
    return this.#client.web.fetchJson("/financial/treasury/accountStatement", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async expenseOpCreate(args: ArgsJournalEntry): Promise<JournalEntry> {
    return this.#client.web.fetchJson("/financial/treasury/expenseOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async revenueOpCreate(args: ArgsJournalEntry): Promise<JournalEntry> {
    return this.#client.web.fetchJson("/financial/treasury/revenueOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  }
