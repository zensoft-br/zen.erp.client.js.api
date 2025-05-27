import "dotenv/config";
import { describe, test } from "vitest";
import { connect } from "../src/Client.js";
import { SystemService } from "../src/api/system/SystemService.js";

const TENANT = process.env.TENANT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

describe("SystemService", () => {
  test("Test lock", async () => {
    const client = await connect(TENANT, USER, PASSWORD);

    const systemService = new SystemService(client);
    let lockToken = await systemService.lockOpAcquire("mylock", undefined, "1s");
    lockToken = await systemService.lockOpAcquire("mylock", "1s", "1s");
    await systemService.lockOpExtend("mylock", lockToken, "1s");
    await systemService.lockOpRelease("mylock", lockToken);
  });
});