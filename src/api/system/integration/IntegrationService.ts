import { Client } from "../../../Client.js";
import { Queue } from "./Queue.js";
import { Topic } from "./Topic.js";
import { Subscription } from "./Subscription.js";
import { Message } from "./Message.js";

export class IntegrationService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async messageDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/integration/message/${id}`, {
      method: "DELETE",
      
    });
  }

  async messageOpPost(args: any): Promise<Message> {
    return this.#client.web.fetchJson("/system/integration/messageOpPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async messageOpTransfer(id: number, queueCode: string): Promise<Message> {
    const sp = new URLSearchParams();
    if (queueCode) sp.set("queueCode", String(queueCode));
    return this.#client.web.fetchJson(`/system/integration/messageOpTransfer/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async messageRead(search: any): Promise<Message[]> {
    return this.#client.web.fetchJson(`/system/integration/message?${search}`, {
      method: "GET",
      
    });
  }

  async messageReadById(id: number): Promise<Message> {
    return this.#client.web.fetchJson(`/system/integration/message/${id}`, {
      method: "GET",
      
    });
  }

  async queueCreate(bean: Queue): Promise<Queue> {
    return this.#client.web.fetchJson("/system/integration/queue", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async queueDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/integration/queue/${id}`, {
      method: "DELETE",
      
    });
  }

  async queueOpDeleteExpiredMessages(queueCode: string): Promise<void> {
    const sp = new URLSearchParams();
    if (queueCode) sp.set("queueCode", String(queueCode));
    this.#client.web.fetchJson(`/system/integration/queueOpDeleteExpiredMessages?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async queueOpReadMessage(queueCode: string, maxMessages: any): Promise<Message[]> {
    const sp = new URLSearchParams();
    if (queueCode) sp.set("queueCode", String(queueCode));
    if (maxMessages) sp.set("maxMessages", String(maxMessages));
    return this.#client.web.fetchJson(`/system/integration/queueOpReadMessage?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async queueOpReadMessageTimeout(queueCode: string, maxMessages: any, timeoutS: any): Promise<Message[]> {
    const sp = new URLSearchParams();
    if (queueCode) sp.set("queueCode", String(queueCode));
    if (maxMessages) sp.set("maxMessages", String(maxMessages));
    if (timeoutS) sp.set("timeoutS", String(timeoutS));
    return this.#client.web.fetchJson(`/system/integration/queueOpReadMessageTimeout?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async queueRead(search: any): Promise<Queue[]> {
    return this.#client.web.fetchJson(`/system/integration/queue?${search}`, {
      method: "GET",
      
    });
  }

  async queueReadById(id: number): Promise<Queue> {
    return this.#client.web.fetchJson(`/system/integration/queue/${id}`, {
      method: "GET",
      
    });
  }

  async queueUpdate(bean: Queue): Promise<Queue> {
    return this.#client.web.fetchJson("/system/integration/queue", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async subscriptionCreate(bean: Subscription): Promise<Subscription> {
    return this.#client.web.fetchJson("/system/integration/subscription", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async subscriptionDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/integration/subscription/${id}`, {
      method: "DELETE",
      
    });
  }

  async subscriptionRead(search: any): Promise<Subscription[]> {
    return this.#client.web.fetchJson(`/system/integration/subscription?${search}`, {
      method: "GET",
      
    });
  }

  async subscriptionReadById(id: number): Promise<Subscription> {
    return this.#client.web.fetchJson(`/system/integration/subscription/${id}`, {
      method: "GET",
      
    });
  }

  async subscriptionUpdate(bean: Subscription): Promise<Subscription> {
    return this.#client.web.fetchJson("/system/integration/subscription", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async topicCreate(bean: Topic): Promise<Topic> {
    return this.#client.web.fetchJson("/system/integration/topic", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async topicDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/integration/topic/${id}`, {
      method: "DELETE",
      
    });
  }

  async topicOpPublish(args: any): Promise<void> {
    this.#client.web.fetchJson("/system/integration/topicOpPublish", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async topicRead(search: any): Promise<Topic[]> {
    return this.#client.web.fetchJson(`/system/integration/topic?${search}`, {
      method: "GET",
      
    });
  }

  async topicReadById(id: number): Promise<Topic> {
    return this.#client.web.fetchJson(`/system/integration/topic/${id}`, {
      method: "GET",
      
    });
  }

  async topicUpdate(bean: Topic): Promise<Topic> {
    return this.#client.web.fetchJson("/system/integration/topic", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
