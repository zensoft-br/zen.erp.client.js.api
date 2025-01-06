import { Client } from "../../../Client.js";
import { Target } from "./Target.js";
import { TargetGroup } from "./TargetGroup.js";
import { TargetInterval } from "./TargetInterval.js";
import { TargetPlan } from "./TargetPlan.js";

export class TargetService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async targetCreate(bean: Target): Promise<Target> {
    return this.#client.web.fetchJson("/commercial/target/target", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async targetDelete(id: number): Promise<Target> {
    return this.#client.web.fetchJson(`/commercial/target/target/${id}`, {
      method: "DELETE",
      
    });
  }

  async targetGroupCreate(bean: TargetGroup): Promise<TargetGroup> {
    return this.#client.web.fetchJson("/commercial/target/targetGroup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async targetGroupDelete(id: number): Promise<TargetGroup> {
    return this.#client.web.fetchJson(`/commercial/target/targetGroup/${id}`, {
      method: "DELETE",
      
    });
  }

  async targetGroupRead(search: any): Promise<TargetGroup[]> {
    return this.#client.web.fetchJson(`/commercial/target/targetGroup?${search}`, {
      method: "GET",
      
    });
  }

  async targetGroupReadById(id: number): Promise<TargetGroup> {
    return this.#client.web.fetchJson(`/commercial/target/targetGroup/${id}`, {
      method: "GET",
      
    });
  }

  async targetGroupUpdate(bean: TargetGroup): Promise<TargetGroup> {
    return this.#client.web.fetchJson("/commercial/target/targetGroup", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async targetIntervalCreate(bean: TargetInterval): Promise<TargetInterval> {
    return this.#client.web.fetchJson("/commercial/target/targetInterval", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async targetIntervalDelete(id: number): Promise<TargetInterval> {
    return this.#client.web.fetchJson(`/commercial/target/targetInterval/${id}`, {
      method: "DELETE",
      
    });
  }

  async targetIntervalRead(search: any): Promise<TargetInterval[]> {
    return this.#client.web.fetchJson(`/commercial/target/targetInterval?${search}`, {
      method: "GET",
      
    });
  }

  async targetIntervalReadById(id: number): Promise<TargetInterval> {
    return this.#client.web.fetchJson(`/commercial/target/targetInterval/${id}`, {
      method: "GET",
      
    });
  }

  async targetIntervalUpdate(bean: TargetInterval): Promise<TargetInterval> {
    return this.#client.web.fetchJson("/commercial/target/targetInterval", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async targetPlanCreate(bean: TargetPlan): Promise<TargetPlan> {
    return this.#client.web.fetchJson("/commercial/target/targetPlan", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async targetPlanDelete(id: number): Promise<TargetPlan> {
    return this.#client.web.fetchJson(`/commercial/target/targetPlan/${id}`, {
      method: "DELETE",
      
    });
  }

  async targetPlanRead(search: any): Promise<TargetPlan[]> {
    return this.#client.web.fetchJson(`/commercial/target/targetPlan?${search}`, {
      method: "GET",
      
    });
  }

  async targetPlanReadById(id: number): Promise<TargetPlan> {
    return this.#client.web.fetchJson(`/commercial/target/targetPlan/${id}`, {
      method: "GET",
      
    });
  }

  async targetPlanUpdate(bean: TargetPlan): Promise<TargetPlan> {
    return this.#client.web.fetchJson("/commercial/target/targetPlan", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async targetRead(search: any): Promise<Target[]> {
    return this.#client.web.fetchJson(`/commercial/target/target?${search}`, {
      method: "GET",
      
    });
  }

  async targetReadById(id: number): Promise<Target> {
    return this.#client.web.fetchJson(`/commercial/target/target/${id}`, {
      method: "GET",
      
    });
  }

  async targetUpdate(bean: Target): Promise<Target> {
    return this.#client.web.fetchJson("/commercial/target/target", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
