export class PrintingService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async printerCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/printing/printer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async printerDelete(id) {
    this.#zenClient.web.fetchJson(`/system/printing/printer/${id}`, {
      method: "DELETE",
      
    });
  }

  async printerJobCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/printing/printerJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async printerJobDataReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerJobData/${id}`, {
      method: "GET",
      
    });
  }

  async printerJobDelete(id) {
    this.#zenClient.web.fetchJson(`/system/printing/printerJob/${id}`, {
      method: "DELETE",
      
    });
  }

  async printerJobOpFetch(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerJobOpFetch/${id}`, {
      method: "POST",
      
    });
  }

  async printerJobOpPrinted(id) {
    this.#zenClient.web.fetchJson(`/system/printing/printerJobOpPrinted/${id}`, {
      method: "POST",
      
    });
  }

  async printerJobOpUnlock(id) {
    this.#zenClient.web.fetchJson(`/system/printing/printerJobOpUnlock/${id}`, {
      method: "POST",
      
    });
  }

  async printerJobRead(search) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerJob?${search}`, {
      method: "GET",
      
    });
  }

  async printerJobReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerJob/${id}`, {
      method: "GET",
      
    });
  }

  async printerOpPause(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerOpPause/${id}`, {
      method: "POST",
      
    });
  }

  async printerOpPauseRevert(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerOpPauseRevert/${id}`, {
      method: "POST",
      
    });
  }

  async printerOpPrintTestPage(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerOpPrintTestPage/${id}`, {
      method: "POST",
      
    });
  }

  async printerOpPrinterJobFetch(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printerOpPrinterJobFetch/${id}`, {
      method: "POST",
      
    });
  }

  async printerRead(search) {
    return this.#zenClient.web.fetchJson(`/system/printing/printer?${search}`, {
      method: "GET",
      
    });
  }

  async printerReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/printing/printer/${id}`, {
      method: "GET",
      
    });
  }

  async printerUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/printing/printer", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
