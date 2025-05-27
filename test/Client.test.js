import "dotenv/config";
import { describe, expect, test } from "vitest";
import { InfoService } from "../src/api/system/info/InfoService.js";
import { connect, createFromToken } from "../src/Client.js";

const TENANT = process.env.TENANT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

describe("client", () => {
  test("Connect to api on default host", async () => {
    const client1 = await connect(TENANT, USER, PASSWORD, {});
    expect(await new InfoService(client1).healthRead()).toBe("OK");

    const client2 = createFromToken(TENANT, client1.jwt);
    expect(await new InfoService(client2).healthRead()).toBe("OK");
  });

  test("Connect to api on custom host", async () => {
    const client1 = await connect(TENANT, USER, PASSWORD, { host: "https://api.zenerp.app.br:8443" });
    expect(await new InfoService(client1).healthRead()).toBe("OK");

    const client2 = createFromToken(TENANT, client1.jwt, { host: "https://api.zenerp.app.br:8443" });
    expect(await new InfoService(client2).healthRead()).toBe("OK");
  });

  test("Connect to api with an invalid username", async () => {
    await expect(
      connect(TENANT, "foo", "foo"),
    ).rejects.toThrow();
  });

  test("Connect to api on an invalid host", async () => {
    await expect(
      connect(TENANT, USER, PASSWORD, { host: "https://foo.com" }),
    ).rejects.toThrow();
  });
});

// // const fileService = new Z.api.system.file.FileService(client);
// // console.log(await fileService.fileOpReadContent(25969));

// const auditService = new Z.api.system.audit.AuditService(client);
// console.log(await auditService.logOpDeleteExpired());
