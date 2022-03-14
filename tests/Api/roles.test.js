const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Roles API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM roles WHERE id > 0";
    const sql2 = "ALTER TABLE roles AUTO_INCREMENT=1";
    await query(sql);
    await query(sql2);
  });

  describe("Created a new role with valid value", () => {
    it("POST /api/roles/ and should return {}", async () => {
      const res = await request(app).post("/api/roles/").send({ name: "Roles" });
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({ id: expect.any(Number), name: expect.any(String) });
    });
  });

  describe("Created a new role with no valid value", () => {
    it("POST /api/roles/ and should return {}", async () => {
      const res = await request(app).post("/api/roles/").send({ names: "Roles" });
      expect(res.statusCode).toBe(400);
    });
  });

  describe("Created a new role with already name value exist", () => {
    it("POST /api/roles/ and should return {}", async () => {
      const res = await request(app).post("/api/roles/").send({ name: "Roles" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Get one role", () => {
    it("GET /api/roles/1 and should return {id: 1, name: 'Roles'}", async () => {
      const res = await request(app).get("/api/roles/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ id: expect.any(Number), name: expect.any(String) });
    });
  });

  describe("Get one role not existing", () => {
    it("GET /api/roles/2 and should return code 404", async () => {
      const res = await request(app).get("/api/roles/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one role not existing", () => {
    it("PUT /api/roles/2 and should return code 404", async () => {
      const res = await request(app).put("/api/roles/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one role existing", () => {
    it("PUT /api/roles/2 and should return code 200", async () => {
      const res = await request(app).put("/api/roles/1").send({ name: "Admin" });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ name: "Admin" })]));
    });
  });

  describe("Deleted one role existing", () => {
    it("DELETE /api/roles/1 and should return code 204", async () => {
      const res = await request(app).delete("/api/roles/1").send();
      expect(res.statusCode).toBe(204);
      expect(res.body).toEqual({});
    });
  });

  describe("Deleted one role not existing", () => {
    it("DELETE /api/roles/2 and should return code 404", async () => {
      const res = await request(app).delete("/api/roles/2").send();
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({});
    });
  });
});
