const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Status API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM status WHERE id > 0";
    const sq2 = "ALTER TABLE status AUTO_INCREMENT=1";
    await query(sql);
    await query(sq2);
  });

  describe("Create a new status with valid value", () => {
    it("POST /api/status/ and should obtain {id: 1, name: 'status'}", async () => {
      const res = await request(app).post("/api/status/").send({ name: "status" });
      expect(res.statusCode).toBe(201);
    });
  });

  describe("Create a new status with bad value", () => {
    it("POST /api/status/ and should obtain code 400", async () => {
      const res = await request(app).post("/api/status/").send({ names: "test" });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual({ message: expect.any(String) });
    });
  });

  describe("Create a new status with existing status name", () => {
    it("POST /api/status/ and should obtain code 422", async () => {
      const res = await request(app).post("/api/status/").send({ name: "status" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Find status where status not existing", () => {
    it("GET /api/status/2 and should obtain code 404", async () => {
      const res = await request(app).get("/api/status/2");
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({});
    });
  });

  describe("Find All status", () => {
    it("GET /api/status and should obtain [{...}]", async () => {
      const res = await request(app).get("/api/status/");
      expect(res.status).toBe(200);
      expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: expect.any(Number), name: expect.any(String) })]));
    });
  });

  describe("DELETED status not existing", () => {
    it("DELETE /api/status/2 and should obtain code 404", async () => {
      const res = await request(app).delete("/api/status/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("DELETED status existing", () => {
    it("DELETE /api/status/1 and should obtain code 204", async () => {
      const res = await request(app).delete("/api/status/1").send();
      expect(res.statusCode).toBe(204);
    });
  });
});
