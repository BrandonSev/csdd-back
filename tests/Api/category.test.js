const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Category API Endpoint", () => {
  beforeAll(async () => {
    const sql = `SET FOREIGN_KEY_CHECKS=0;
    truncate categories;
    SET FOREIGN_KEY_CHECKS=1;`;
    await query(sql);
  });

  describe("Create a new category with valid value", () => {
    it.only("POST /api/categories/", async () => {
      const res = await request(app).post("/api/categories/").send({ name: "categorie 1" });
      expect(res.statusCode).toBe(201);
    });
    it.only("POST /api/categories/", async () => {
      const res = await request(app).post("/api/categories/").send({ names: "test" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("GET category", () => {
    it.only("GET /api/categories/", async () => {
      const res = await request(app).get("/api/categories").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveLength(1);
    });
    it.only("GET /api/categories/1", async () => {
      const res = await request(app).get("/api/categories/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.objectContaining({ name: "categorie 1" }));
    });
    it.only("GET /api/categories/2", async () => {
      const res = await request(app).get("/api/categories/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("PUT category", () => {
    it.only("PUT /api/categories/1", async () => {
      const res = await request(app).put("/api/categories/1").send({ name: "categorie 2" });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.objectContaining({ name: "categorie 2" }));
    });
    it.only("PUT /api/categories/2", async () => {
      const res = await request(app).put("/api/categories/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("DELETE category", () => {
    it.only("DELETE /api/categories/1", async () => {
      const res = await request(app).delete("/api/categories/1");
      expect(res.statusCode).toBe(204);
    });
    it.only("DELETE /api/categories/2", async () => {
      const res = await request(app).delete("/api/categories/2").send();
      expect(res.statusCode).toBe(404);
    });
  });
});
