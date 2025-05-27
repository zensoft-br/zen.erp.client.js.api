import "dotenv/config";
import { describe, test } from "vitest";
import { connect } from "../src/Client.js";

const TENANT = process.env.TENANT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

describe("SystemService", () => {
  test("Test lock", async () => {
    const client = await connect(TENANT, USER, PASSWORD);

    const storageService = new StorageService(client);

    await storageService.userPutNumber("test", 1.5);
    console.log(await storageService.userGetNumber("test"));

    await storageService.userPutString("test", "1");
    console.log(await storageService.userGetString("test"));

    await storageService.userPut("test", { a: 1 });
    console.log(await storageService.userGet("test"));
  });
});