const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("UnderStatus API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM under_status WHERE id > 0";
    const sql2 = "ALTER TABLE under_status AUTO_INCREMENT=1";
    const sql3 = "DELETE FROM status WHERE id > 0";
    const sql4 = "ALTER TABLE status AUTO_INCREMENT=1";
    const sql5 = "INSERT INTO status SET name='status'";
    await query(sql);
    await query(sql2);
    await query(sql3);
    await query(sql4);
    await query(sql5);
  });

  describe("Create a new under status with valid value", () => {
    it("POST /api/underStatus/ and should obtain {id: 1, name: 'Under status name'}", async () => {
      const res = await request(app).post("/api/underStatus/").send({ name: "name 1", status_id: 1 });
      expect(res.statusCode).toBe(201);
    });
  });

  describe("Create a new under status with bad value", () => {
    it("POST /api/underStatus/ and should obtain code 400", async () => {
      const res = await request(app).post("/api/underStatus/").send({ names: "test" });
      expect(res.statusCode).toBe(422);
      expect(res.body).toEqual({ message: expect.any(String) });
    });
  });

  describe("Create a new under status with existing under status name", () => {
    it("POST /api/underStatus/ and should obtain code 422", async () => {
      const res = await request(app).post("/api/underStatus/").send({ name: "name 1", status_id: 1 });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Find under status where under status not existing", () => {
    it("GET /api/underStatus/2 and should obtain code 404", async () => {
      const res = await request(app).get("/api/underStatus/2").send();
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({});
    });
  });

  describe("Find All status", () => {
    it("GET /api/underStatus and should obtain [{...}]", async () => {
      const res = await request(app).get("/api/underStatus/").send();
      expect(res.status).toBe(200);
      expect(res.body).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: expect.any(Number), name: expect.any(String), status_id: expect.any(Number) })]),
      );
    });
  });

  describe("DELETED status not existing", () => {
    it("DELETE /api/underStatus/2 and should obtain code 404", async () => {
      const res = await request(app).delete("/api/underStatus/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("DELETED status existing", () => {
    it("DELETE /api/underStatus/1 and should obtain code 204", async () => {
      const res = await request(app).delete("/api/underStatus/1").send();
      expect(res.statusCode).toBe(204);
    });
  });
});
