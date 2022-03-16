const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

const assetsPayload = {
  filename: "test.png",
};

describe("Assets API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM assets WHERE id > 0";
    const sql2 = "ALTER TABLE assets AUTO_INCREMENT=1";
    await query(sql);
    await query(sql2);
  });

  describe("Created a new assets with valid value", () => {
    it.skip("POST /api/assets/ and should return {}", async () => {
      const res = await request(app).post("/api/assets/").send(assetsPayload);
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({ id: expect.any(Number), name: expect.any(String) });
    });
  });
});
