const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Roles API Endpoint", () => {
  beforeAll(async () => {
    const sql = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM province WHERE id > 0";
    const sql2 = "ALTER TABLE province AUTO_INCREMENT=1; SET FOREIGN_KEY_CHECKS=1;";
    await query(sql);
    await query(sql2);
  });

  describe("Created a new province with valid value", () => {
    it("POST /api/province/ and should return {message: {number} }", async () => {
      const res = await request(app).post("/api/province/").send({ name: "Province" });
      expect(res.statusCode).toBe(201);
      expect(res.body.province).toEqual(expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }));
    });
  });

  describe("Created a new province with no valid value", () => {
    it("POST /api/province/ and should return {}", async () => {
      const res = await request(app).post("/api/province/").send({ names: "Roles" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Created a new province with already name value exist", () => {
    it("POST /api/province/ and should return {}", async () => {
      const res = await request(app).post("/api/province/").send({ name: "Province" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Get one province", () => {
    it("GET /api/province/1 and should return {id: 1, name: 'Roles'}", async () => {
      const res = await request(app).get("/api/province/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ id: expect.any(Number), name: expect.any(String) });
    });
  });

  describe("Get one province not existing", () => {
    it("GET /api/province/2 and should return code 404", async () => {
      const res = await request(app).get("/api/province/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one province not existing", () => {
    it("PUT /api/province/2 and should return code 404", async () => {
      const res = await request(app).put("/api/province/3").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one province existing", () => {
    it("PUT /api/province/1 and should return code 200", async () => {
      const res = await request(app).put("/api/province/1").send({ name: "Province2" });
      expect(res.statusCode).toBe(200);
      expect(res.body.province).toEqual(expect.objectContaining({ name: "Province2" }));
    });
  });

  describe("Deleted one province existing", () => {
    it("DELETE /api/province/1 and should return code 204", async () => {
      const res = await request(app).delete("/api/province/1").send();
      expect(res.statusCode).toBe(204);
    });
  });

  describe("Deleted one province not existing", () => {
    it("DELETE /api/province/2 and should return code 404", async () => {
      const res = await request(app).delete("/api/province/3").send();
      expect(res.statusCode).toBe(404);
    });
  });
});
