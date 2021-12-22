const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Roles API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM roles WHERE id=1";
    const sql2 = "ALTER TABLE roles AUTO_INCREMENT=1";
    await query(sql);
    await query(sql2);
  });

  describe("Create a new roles", () => {
    it("POST /api/roles/ and should return {}", async () => {
      const res = await request(app).post("/api/roles/").send({ name: "Roles" });
      expect(res.statusCode).toBe(201);
    });
  });
});
