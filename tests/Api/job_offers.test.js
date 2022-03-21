const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Job Offers API Endpoint", () => {
  beforeAll(async () => {
    const sql = `SET FOREIGN_KEY_CHECKS=0;
        truncate job_offers;
        SET FOREIGN_KEY_CHECKS=1;`;
    await query(sql);
  });

  describe("Created a new job offers with valid value", () => {
    it.only("POST /api/jobOffers/", async () => {
      const res = await request(app)
        .post("/api/jobOffers/")
        .send({ reference: "20220321-TEST", poste: "Poste", city: "La loupe", description: "description" });
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(expect.objectContaining({ id: expect.any(Number), description: expect.any(String) }));
    });
    it.only("POST /api/jobOffers/", async () => {
      const res = await request(app).post("/api/jobOffers/").send({ reference: "20220321-TEST", poste: "Poste", city: "La loupe" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("GET job offers", () => {
    it.only("GET /api/jobOffers/", async () => {
      const res = await request(app).get("/api/jobOffers").send();
      expect(res.statusCode).toBe(200);
    });
    it.only("GET /api/jobOffers/1", async () => {
      const res = await request(app).get("/api/jobOffers/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.objectContaining({ reference: "20220321-TEST" }));
    });
    it.only("GET /api/jobOffers/2", async () => {
      const res = await request(app).get("/api/jobOffers/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("PUT job offers", () => {
    it.only("PUT /api/jobOffers/", async () => {
      const res = await request(app).put("/api/jobOffers/1").send({ poste: "poste 1" });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.objectContaining({ poste: "poste 1" }));
    });
    it.only("PUT /api/jobOffers/", async () => {
      const res = await request(app).put("/api/jobOffers/2").send({ poste: "poste 1" });
      expect(res.statusCode).toBe(404);
    });
    it.only("PUT /api/jobOffers/", async () => {
      const res = await request(app).put("/api/jobOffers/2").send({ poste: "poste 1" });
      expect(res.statusCode).toBe(404);
    });
  });

  describe("DELETE job offers", () => {
    it.only("DELETE /api/jobOffers/", async () => {
      const res = await request(app).delete("/api/jobOffers/1").send();
      expect(res.statusCode).toBe(204);
    });
    it.only("DELETE /api/jobOffers/", async () => {
      const res = await request(app).delete("/api/jobOffers/2").send();
      expect(res.statusCode).toBe(404);
    });
  });
});
