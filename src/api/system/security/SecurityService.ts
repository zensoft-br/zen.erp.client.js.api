import { Client } from "../../../Client.js";
import { AccessPoint } from "./AccessPoint.js";
import { AccessProfile } from "./AccessProfile.js";
import { Grant } from "./Grant.js";
import { Group } from "./Group.js";
import { KeyStore } from "./KeyStore.js";
import { Role } from "./Role.js";
import { RoleAccessPoint } from "./RoleAccessPoint.js";
import { Session } from "./Session.js";
import { User } from "./User.js";
import { UserPermission } from "./UserPermission.js";

export class SecurityService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async accessPointCreate(bean: AccessPoint): Promise<AccessPoint> {
    return this.#client.web.fetchJson("/system/security/accessPoint", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accessPointDelete(id: number): Promise<AccessPoint> {
    return this.#client.web.fetchJson(`/system/security/accessPoint/${id}`, {
      method: "DELETE",
      
    });
  }

  async accessPointOpValidate(code: string): Promise<boolean> {
    const sp = new URLSearchParams();
    if (code) sp.set("code", String(code));
    return this.#client.web.fetchJson(`/system/security/accessPointOpValidate?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async accessPointRead(search: any): Promise<AccessPoint[]> {
    return this.#client.web.fetchJson(`/system/security/accessPoint?${search}`, {
      method: "GET",
      
    });
  }

  async accessPointReadById(id: number): Promise<AccessPoint> {
    return this.#client.web.fetchJson(`/system/security/accessPoint/${id}`, {
      method: "GET",
      
    });
  }

  async accessPointUpdate(bean: AccessPoint): Promise<AccessPoint> {
    return this.#client.web.fetchJson("/system/security/accessPoint", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accessProfileCreate(bean: AccessProfile): Promise<AccessProfile> {
    return this.#client.web.fetchJson("/system/security/accessProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async accessProfileDelete(id: number): Promise<AccessProfile> {
    return this.#client.web.fetchJson(`/system/security/accessProfile/${id}`, {
      method: "DELETE",
      
    });
  }

  async accessProfileRead(search: any): Promise<AccessProfile[]> {
    return this.#client.web.fetchJson(`/system/security/accessProfile?${search}`, {
      method: "GET",
      
    });
  }

  async accessProfileReadById(id: number): Promise<AccessProfile> {
    return this.#client.web.fetchJson(`/system/security/accessProfile/${id}`, {
      method: "GET",
      
    });
  }

  async accessProfileUpdate(bean: AccessProfile): Promise<AccessProfile> {
    return this.#client.web.fetchJson("/system/security/accessProfile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async grantCreate(bean: Grant): Promise<Grant> {
    return this.#client.web.fetchJson("/system/security/grant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async grantDelete(id: number): Promise<Grant> {
    return this.#client.web.fetchJson(`/system/security/grant/${id}`, {
      method: "DELETE",
      
    });
  }

  async grantRead(search: any): Promise<Grant[]> {
    return this.#client.web.fetchJson(`/system/security/grant?${search}`, {
      method: "GET",
      
    });
  }

  async grantReadById(id: number): Promise<Grant> {
    return this.#client.web.fetchJson(`/system/security/grant/${id}`, {
      method: "GET",
      
    });
  }

  async groupCreate(bean: Group): Promise<Group> {
    return this.#client.web.fetchJson("/system/security/group", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async groupDelete(id: number): Promise<Group> {
    return this.#client.web.fetchJson(`/system/security/group/${id}`, {
      method: "DELETE",
      
    });
  }

  async groupOpClone(id: number, args: any): Promise<Group> {
    return this.#client.web.fetchJson(`/system/security/groupOpClone/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async groupRead(search: any): Promise<Group[]> {
    return this.#client.web.fetchJson(`/system/security/group?${search}`, {
      method: "GET",
      
    });
  }

  async groupReadById(id: number): Promise<Group> {
    return this.#client.web.fetchJson(`/system/security/group/${id}`, {
      method: "GET",
      
    });
  }

  async groupUpdate(bean: Group): Promise<Group> {
    return this.#client.web.fetchJson("/system/security/group", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async keyStoreCreate(bean: KeyStore): Promise<KeyStore> {
    return this.#client.web.fetchJson("/system/security/keyStore", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async keyStoreDelete(id: number): Promise<KeyStore> {
    return this.#client.web.fetchJson(`/system/security/keyStore/${id}`, {
      method: "DELETE",
      
    });
  }

  async keyStoreOpReadContent(id: number): Promise<any> {
    return this.#client.web.fetchBlob(`/system/security/keyStoreOpReadContent/${id}`, {
      method: "POST",
      
    });
  }

  async keyStoreRead(search: any): Promise<KeyStore[]> {
    return this.#client.web.fetchJson(`/system/security/keyStore?${search}`, {
      method: "GET",
      
    });
  }

  async keyStoreReadById(id: number): Promise<KeyStore> {
    return this.#client.web.fetchJson(`/system/security/keyStore/${id}`, {
      method: "GET",
      
    });
  }

  async keyStoreUpdate(bean: KeyStore): Promise<KeyStore> {
    return this.#client.web.fetchJson("/system/security/keyStore", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async roleAccessPointCreate(bean: RoleAccessPoint): Promise<RoleAccessPoint> {
    return this.#client.web.fetchJson("/system/security/roleAccessPoint", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async roleAccessPointDelete(id: number): Promise<RoleAccessPoint> {
    return this.#client.web.fetchJson(`/system/security/roleAccessPoint/${id}`, {
      method: "DELETE",
      
    });
  }

  async roleAccessPointRead(search: any): Promise<RoleAccessPoint[]> {
    return this.#client.web.fetchJson(`/system/security/roleAccessPoint?${search}`, {
      method: "GET",
      
    });
  }

  async roleAccessPointReadById(id: number): Promise<RoleAccessPoint> {
    return this.#client.web.fetchJson(`/system/security/roleAccessPoint/${id}`, {
      method: "GET",
      
    });
  }

  async roleRead(search: any): Promise<Role[]> {
    return this.#client.web.fetchJson(`/system/security/role?${search}`, {
      method: "GET",
      
    });
  }

  async roleReadById(id: number): Promise<Role> {
    return this.#client.web.fetchJson(`/system/security/role/${id}`, {
      method: "GET",
      
    });
  }

  async sessionDelete(id: any): Promise<Session> {
    return this.#client.web.fetchJson(`/system/security/session/${id}`, {
      method: "DELETE",
      
    });
  }

  async sessionOpGetCurrent(): Promise<Session> {
    return this.#client.web.fetchJson("/system/security/sessionOpGetCurrent", {
      method: "GET",
      
    });
  }

  async sessionRead(search: any): Promise<Session[]> {
    return this.#client.web.fetchJson(`/system/security/session?${search}`, {
      method: "GET",
      
    });
  }

  async sessionReadById(id: any): Promise<Session> {
    return this.#client.web.fetchJson(`/system/security/session/${id}`, {
      method: "GET",
      
    });
  }

  async tokenOpInvalidate(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/tokenOpInvalidate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async tokenOpInvalidateCurrent(): Promise<void> {
    return this.#client.web.fetchJson("/system/security/tokenOpInvalidateCurrent", {
      method: "POST",
      
    });
  }

  async tokenOpRenew(): Promise<string> {
    return this.#client.web.fetchText("/system/security/tokenOpRenew", {
      method: "POST",
      
    });
  }

  async tokenOpRequest(args: any): Promise<string> {
    return this.#client.web.fetchText("/system/security/tokenOpRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async tokenOpRequestPermanent(args: any): Promise<string> {
    return this.#client.web.fetchText("/system/security/tokenOpRequestPermanent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userCreate(bean: User): Promise<User> {
    return this.#client.web.fetchJson("/system/security/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async userDelete(id: number): Promise<User> {
    return this.#client.web.fetchJson(`/system/security/user/${id}`, {
      method: "DELETE",
      
    });
  }

  async userOpActivate(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/security/userOpActivate/${id}`, {
      method: "POST",
      
    });
  }

  async userOpAuthenticate(args: any): Promise<boolean> {
    return this.#client.web.fetchJson("/system/security/userOpAuthenticate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpChangeEmail(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpChangeEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpChangeEmailConfirmation(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpChangeEmailConfirmation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpChangePassword(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpChangePassword", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpChangePasswordThird(id: number, args: any): Promise<void> {
    return this.#client.web.fetchJson(`/system/security/userOpChangePasswordThird/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpCreate(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpCreateConfirmation(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpCreateConfirmation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpCreateResend(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpCreateResend", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpGrantOptionAdd(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/security/userOpGrantOptionAdd/${id}`, {
      method: "POST",
      
    });
  }

  async userOpGrantOptionRemove(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/security/userOpGrantOptionRemove/${id}`, {
      method: "POST",
      
    });
  }

  async userOpInactivate(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/security/userOpInactivate/${id}`, {
      method: "POST",
      
    });
  }

  async userOpResetPassword(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpResetPassword", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpResetPasswordConfirmation(args: any): Promise<void> {
    return this.#client.web.fetchJson("/system/security/userOpResetPasswordConfirmation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userOpUnlock(id: number): Promise<void> {
    return this.#client.web.fetchJson(`/system/security/userOpUnlock/${id}`, {
      method: "POST",
      
    });
  }

  async userOpUpdate(bean: User): Promise<User> {
    return this.#client.web.fetchJson("/system/security/userOpUpdate", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async userPermissionRead(search: any): Promise<UserPermission[]> {
    return this.#client.web.fetchJson(`/system/security/userPermission?${search}`, {
      method: "GET",
      
    });
  }

  async userRead(search: any): Promise<User[]> {
    return this.#client.web.fetchJson(`/system/security/user?${search}`, {
      method: "GET",
      
    });
  }

  async userReadById(id: number): Promise<User> {
    return this.#client.web.fetchJson(`/system/security/user/${id}`, {
      method: "GET",
      
    });
  }

  async userUpdate(bean: User): Promise<User> {
    return this.#client.web.fetchJson("/system/security/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
