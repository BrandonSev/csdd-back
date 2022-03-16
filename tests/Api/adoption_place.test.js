const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Adoption place API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM adoption_place WHERE id > 0";
    const sql2 = "ALTER TABLE adoption_place AUTO_INCREMENT=1";
    await query(sql);
    await query(sql2);
  });

  describe("Created a new adoption place with valid value", () => {
    it("POST /api/adoptionPlace/ and should return {message: {number} }", async () => {
      const res = await request(app).post("/api/adoptionPlace/").send({ name: "Lieu d'adoption" });
      expect(res.statusCode).toBe(201);
      expect(res.body.adoption_place).toEqual(expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }));
    });
  });

  describe("Created a new adoption place with no valid value", () => {
    it("POST /api/adoptionPlace/ and should return {}", async () => {
      const res = await request(app).post("/api/adoptionPlace/").send({ names: "Lieu de réception" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Created a new adoption place with already name value exist", () => {
    it("POST /api/adoptionPlace/ and should return {}", async () => {
      const res = await request(app).post("/api/adoptionPlace/").send({ name: "Lieu d'adoption" });
      expect(res.statusCode).toBe(422);
      expect(res.text).toEqual("Lieu d'adoption déjà existant");
    });
  });

  describe("Get one adoption place", () => {
    it("GET /api/adoptionPlace/1 and should return {id: 1, name: 'Lieu de réception'}", async () => {
      const res = await request(app).get("/api/adoptionPlace/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ id: expect.any(Number), name: expect.any(String) });
    });
  });

  describe("Get one adoption place not existing", () => {
    it("GET /api/adoptionPlace/2 and should return code 404", async () => {
      const res = await request(app).get("/api/adoptionPlace/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one adoption place not existing", () => {
    it("PUT /api/adoptionPlace/3 and should return code 404", async () => {
      const res = await request(app).put("/api/adoptionPlace/3").send({ name: "Lieu de réception modifié" });
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one adoption place existing", () => {
    it("PUT /api/adoptionPlace/1 and should return code 200", async () => {
      const res = await request(app).put("/api/adoptionPlace/1").send({ name: "Name modifié" });
      expect(res.statusCode).toBe(200);
      expect(res.body.adoption_place).toEqual(expect.objectContaining({ name: "Name modifié" }));
    });
  });

  describe("Deleted one adoption place existing", () => {
    it("DELETE /api/adoptionPlace/1 and should return code 204", async () => {
      const res = await request(app).delete("/api/adoptionPlace/1").send();
      expect(res.statusCode).toBe(204);
    });
  });

  describe("Deleted one adoption not existing", () => {
    it("DELETE /api/adoptionPlace/2 and should return code 404", async () => {
      const res = await request(app).delete("/api/adoptionPlace/3").send();
      expect(res.statusCode).toBe(404);
    });
  });
});
