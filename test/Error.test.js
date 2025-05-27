import "dotenv/config";
import { describe, test } from "vitest";
import { expect } from "../node_modules/vitest/dist/index.js";
import { connect } from "../src/Client.js";
import { AppError } from "../src/AppError.js";

const TENANT = process.env.TENANT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

describe("Error", () => {
  test("Test AppError", async () => {
    try {
      await connect("foo", "foo", "bar");
    } catch (error) {
      expect(error instanceof AppError).toBe(true);

      expect(error.status).toBe(401);

      expect(error.payload.type).toBe("error");
    }

    try {
      await connect(TENANT, "foo", "bar");
    } catch (error) {
      expect(error instanceof AppError).toBe(true);

      expect(error.status).toBe(401);

      expect(error.payload.type).toBe("localizedResource");
    }
  });
});