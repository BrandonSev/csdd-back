const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Reception place API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM reception_place WHERE id > 0";
    const sql2 = "ALTER TABLE reception_place AUTO_INCREMENT=1";
    await query(sql);
    await query(sql2);
  });

  describe("Created a new reception place with valid value", () => {
    it("POST /api/receptionPlace/ and should return {message: {number} }", async () => {
      const res = await request(app).post("/api/receptionPlace/").send({ name: "Lieu de réception" });
      expect(res.statusCode).toBe(201);
      expect(res.body.reception_place).toEqual(expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }));
    });
  });

  describe("Created a new reception place with no valid value", () => {
    it("POST /api/province/ and should return {}", async () => {
      const res = await request(app).post("/api/receptionPlace/").send({ names: "Lieu de réception" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Created a new reception place with already name value exist", () => {
    it("POST /api/receptionPlace/ and should return {}", async () => {
      const res = await request(app).post("/api/receptionPlace/").send({ name: "Lieu de réception" });
      expect(res.statusCode).toBe(422);
      expect(res.text).toEqual("Lieu de réception déjà existant");
    });
  });

  describe("Get one reception place", () => {
    it("GET /api/receptionPlace/1 and should return {id: 1, name: 'Lieu de réception'}", async () => {
      const res = await request(app).get("/api/receptionPlace/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ id: expect.any(Number), name: expect.any(String) });
    });
  });

  describe("Get one reception place not existing", () => {
    it("GET /api/receptionPlace/2 and should return code 404", async () => {
      const res = await request(app).get("/api/receptionPlace/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one reception place not existing", () => {
    it("PUT /api/receptionPlace/3 and should return code 404", async () => {
      const res = await request(app).put("/api/receptionPlace/3").send({ name: "Lieu de réception modifié" });
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one reception place existing", () => {
    it("PUT /api/receptionPlace/1 and should return code 200", async () => {
      const res = await request(app).put("/api/receptionPlace/1").send({ name: "Name modifié" });
      expect(res.statusCode).toBe(200);
      expect(res.body.reception_place).toEqual(expect.objectContaining({ name: "Name modifié" }));
    });
  });

  describe("Deleted one reception place existing", () => {
    it("DELETE /api/receptionPlace/1 and should return code 204", async () => {
      const res = await request(app).delete("/api/receptionPlace/1").send();
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
