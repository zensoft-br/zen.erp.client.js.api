export class SecurityService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async accessPointCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/accessPoint", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accessPointDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/accessPoint/${id}`, {
      method: "DELETE",

    });
  }

  async accessPointOpValidate(code) {
    return this.#zenClient.web.fetchJson(`/system/security/accessPointOpValidate?code=${code}`, {
      method: "POST",

    });
  }

  async accessPointRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/accessPoint?${search}`, {
      method: "GET",

    });
  }

  async accessPointReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/accessPoint/${id}`, {
      method: "GET",

    });
  }

  async accessPointUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/accessPoint", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accessProfileCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/accessProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async accessProfileDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/accessProfile/${id}`, {
      method: "DELETE",

    });
  }

  async accessProfileRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/accessProfile?${search}`, {
      method: "GET",

    });
  }

  async accessProfileReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/accessProfile/${id}`, {
      method: "GET",

    });
  }

  async accessProfileUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/accessProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async grantCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/grant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async grantDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/grant/${id}`, {
      method: "DELETE",

    });
  }

  async grantRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/grant?${search}`, {
      method: "GET",

    });
  }

  async grantReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/grant/${id}`, {
      method: "GET",

    });
  }

  async groupCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/group", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async groupDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/group/${id}`, {
      method: "DELETE",

    });
  }

  async groupOpClone(id, args) {
    return this.#zenClient.web.fetchJson(`/system/security/groupOpClone/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async groupRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/group?${search}`, {
      method: "GET",

    });
  }

  async groupReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/group/${id}`, {
      method: "GET",

    });
  }

  async groupUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/group", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async keyStoreCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/keyStore", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async keyStoreDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/keyStore/${id}`, {
      method: "DELETE",

    });
  }

  async keyStoreOpReadContent(id) {
    return this.#zenClient.web.fetchJson(`/system/security/keyStoreOpReadContent/${id}`, {
      method: "POST",

    });
  }

  async keyStoreRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/keyStore?${search}`, {
      method: "GET",

    });
  }

  async keyStoreReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/keyStore/${id}`, {
      method: "GET",

    });
  }

  async keyStoreUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/keyStore", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async roleAccessPointCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/roleAccessPoint", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async roleAccessPointDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/roleAccessPoint/${id}`, {
      method: "DELETE",

    });
  }

  async roleAccessPointRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/roleAccessPoint?${search}`, {
      method: "GET",

    });
  }

  async roleAccessPointReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/roleAccessPoint/${id}`, {
      method: "GET",

    });
  }

  async roleRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/role?${search}`, {
      method: "GET",

    });
  }

  async roleReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/role/${id}`, {
      method: "GET",

    });
  }

  async sessionDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/session/${id}`, {
      method: "DELETE",

    });
  }

  async sessionOpGetCurrent() {
    return this.#zenClient.web.fetchJson("/system/security/sessionOpGetCurrent", {
      method: "GET",

    });
  }

  async sessionRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/session?${search}`, {
      method: "GET",

    });
  }

  async sessionReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/session/${id}`, {
      method: "GET",

    });
  }

  async tokenOpInvalidate(args) {
    this.#zenClient.web.fetchJson("/system/security/tokenOpInvalidate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async tokenOpInvalidateCurrent() {
    this.#zenClient.web.fetchJson("/system/security/tokenOpInvalidateCurrent", {
      method: "POST",

    });
  }

  async tokenOpRenew() {
    return this.#zenClient.web.fetchJson("/system/security/tokenOpRenew", {
      method: "POST",

    });
  }

  async tokenOpRequest(args) {
    return this.#zenClient.web.fetchJson("/system/security/tokenOpRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async tokenOpRequestPermanent(args) {
    return this.#zenClient.web.fetchJson("/system/security/tokenOpRequestPermanent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userCreate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async userDelete(id) {
    this.#zenClient.web.fetchJson(`/system/security/user/${id}`, {
      method: "DELETE",

    });
  }

  async userOpActivate(id) {
    this.#zenClient.web.fetchJson(`/system/security/userOpActivate/${id}`, {
      method: "POST",

    });
  }

  async userOpAuthenticate(args) {
    return this.#zenClient.web.fetchJson("/system/security/userOpAuthenticate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpChangeEmail(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpChangeEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpChangeEmailConfirmation(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpChangeEmailConfirmation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpChangePassword(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpChangePassword", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpChangePasswordThird(id, args) {
    this.#zenClient.web.fetchJson(`/system/security/userOpChangePasswordThird/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpCreate(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpCreateConfirmation(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpCreateConfirmation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpCreateResend(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpCreateResend", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpGrantOptionAdd(id) {
    this.#zenClient.web.fetchJson(`/system/security/userOpGrantOptionAdd/${id}`, {
      method: "POST",

    });
  }

  async userOpGrantOptionRemove(id) {
    this.#zenClient.web.fetchJson(`/system/security/userOpGrantOptionRemove/${id}`, {
      method: "POST",

    });
  }

  async userOpInactivate(id) {
    this.#zenClient.web.fetchJson(`/system/security/userOpInactivate/${id}`, {
      method: "POST",

    });
  }

  async userOpResetPassword(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpResetPassword", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpResetPasswordConfirmation(args) {
    this.#zenClient.web.fetchJson("/system/security/userOpResetPasswordConfirmation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(args),

    });
  }

  async userOpUnlock(id) {
    this.#zenClient.web.fetchJson(`/system/security/userOpUnlock/${id}`, {
      method: "POST",

    });
  }

  async userOpUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/userOpUpdate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

  async userPermissionRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/userPermission?${search}`, {
      method: "GET",

    });
  }

  async userRead(search) {
    return this.#zenClient.web.fetchJson(`/system/security/user?${search}`, {
      method: "GET",

    });
  }

  async userReadById(id) {
    return this.#zenClient.web.fetchJson(`/system/security/user/${id}`, {
      method: "GET",

    });
  }

  async userUpdate(bean) {
    return this.#zenClient.web.fetchJson("/system/security/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bean),

    });
  }

}
