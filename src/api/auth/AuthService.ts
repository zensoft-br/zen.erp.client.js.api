import { Client } from "../../Client.js";
import { ArgsLogin } from "./ArgsLogin.js";
import { ArgsRegister } from "./ArgsRegister.js";
import { TokenResponse } from "./TokenResponse.js";
import { User } from "../system/security/User.js";

export class AuthService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async login(args: ArgsLogin): Promise<TokenResponse> {
    return this.#client.web.fetchJson("/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async logout(): Promise<void> {
    return this.#client.web.fetchJson("/auth/logout", {
      method: "POST",
      
    });
  }

  async me(): Promise<User> {
    return this.#client.web.fetchJson("/auth/me", {
      method: "GET",
      
    });
  }

  async passwordRecover(username: string): Promise<void> {
    const sp = new URLSearchParams();
    if (username) sp.set("username", String(username));
    return this.#client.web.fetchJson(`/auth/passwordRecover?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async passwordReset(resetToken: string, newPassword: string): Promise<void> {
    const sp = new URLSearchParams();
    if (resetToken) sp.set("resetToken", String(resetToken));
    if (newPassword) sp.set("newPassword", String(newPassword));
    return this.#client.web.fetchJson(`/auth/passwordReset?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async refresh(refreshToken: string): Promise<TokenResponse> {
    const sp = new URLSearchParams();
    if (refreshToken) sp.set("refreshToken", String(refreshToken));
    return this.#client.web.fetchJson(`/auth/refresh?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async register(args: ArgsRegister): Promise<TokenResponse> {
    return this.#client.web.fetchJson("/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  }
