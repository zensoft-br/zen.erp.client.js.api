import "dotenv/config";
import { describe, test } from "vitest";
import { connect } from "../src/Client.js";
import { StorageService } from "../src/api/system/storage/StorageService.js";
import { expect } from "../node_modules/vitest/dist/index.js";

const TENANT = process.env.TENANT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

describe("SystemService", () => {
  test("Test lock", async () => {
    const client = await connect(TENANT, USER, PASSWORD);

    const storageService = new StorageService(client);

    await storageService.userPutNumber("test", 1.5);
    expect(await storageService.userGetNumber("test")).toBe(1.5);

    await storageService.userPutString("test", "1");
    expect(await storageService.userGetString("test")).toBe("1");

    await storageService.userPut("test", { a: 1 });
    expect(await storageService.userGet("test")).toEqual({ a: 1 });
  });
});