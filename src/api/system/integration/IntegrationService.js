export class IntegrationService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async messageDelete(id) {
    this.#zenClient.web.fetchJson(`/system/integration/message/${id}`, {
      method: "DELETE",

    });
  }

  async messageOpPost(args) {
    return this.#zenClient.web.fetchJson("/system/integration/messageOpPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async messageOpTransfer(id, queueCode) {
    return this.#zenClient.web.fetchJson(`/system/integration/messageOpTransfer/${id}?queueCode=${queueCode}`, {
      method: "POST",

    });
  }

  async messageRead(search) {
    return this.#zenClient.web.fetchJson(`/system/integration/message?${search}`, {
      method: "GET",

    });
  }

  async messageReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/integration/message/${id}`, {
      method: "GET",

    });
  }

  async queueCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/integration/queue", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async queueDelete(id) {
    this.#zenClient.web.fetchJson(`/system/integration/queue/${id}`, {
      method: "DELETE",

    });
  }

  async queueOpDeleteExpiredMessages(queueCode) {
    this.#zenClient.web.fetchJson(`/system/integration/queueOpDeleteExpiredMessages?queueCode=${queueCode}`, {
      method: "POST",

    });
  }

  async queueOpReadMessage(queueCode, maxMessages) {
    return this.#zenClient.web.fetchJson(`/system/integration/queueOpReadMessage?queueCode=${queueCode}&maxMessages=${maxMessages}`, {
      method: "POST",

    });
  }

  async queueOpReadMessageTimeout(queueCode, maxMessages, timeoutS) {
    return this.#zenClient.web.fetchJson(`/system/integration/queueOpReadMessageTimeout?queueCode=${queueCode}&maxMessages=${maxMessages}&timeoutS=${timeoutS}`, {
      method: "POST",

    });
  }

  async queueRead(search) {
    return this.#zenClient.web.fetchJson(`/system/integration/queue?${search}`, {
      method: "GET",

    });
  }

  async queueReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/integration/queue/${id}`, {
      method: "GET",

    });
  }

  async queueUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/integration/queue", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async subscriptionCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/integration/subscription", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async subscriptionDelete(id) {
    this.#zenClient.web.fetchJson(`/system/integration/subscription/${id}`, {
      method: "DELETE",

    });
  }

  async subscriptionRead(search) {
    return this.#zenClient.web.fetchJson(`/system/integration/subscription?${search}`, {
      method: "GET",

    });
  }

  async subscriptionReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/integration/subscription/${id}`, {
      method: "GET",

    });
  }

  async subscriptionUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/integration/subscription", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async topicCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/integration/topic", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async topicDelete(id) {
    this.#zenClient.web.fetchJson(`/system/integration/topic/${id}`, {
      method: "DELETE",

    });
  }

  async topicOpPublish(args) {
    this.#zenClient.web.fetchJson("/system/integration/topicOpPublish", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async topicRead(search) {
    return this.#zenClient.web.fetchJson(`/system/integration/topic?${search}`, {
      method: "GET",

    });
  }

  async topicReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/integration/topic/${id}`, {
      method: "GET",

    });
  }

  async topicUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/integration/topic", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
