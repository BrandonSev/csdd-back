const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");
const { Books } = require("../../src/models");

describe("Books API Endpoint", () => {
  beforeAll(async () => {
    const sql = `SET FOREIGN_KEY_CHECKS=0;
        truncate books;
        SET FOREIGN_KEY_CHECKS=1;`;
    await query(sql);
  });

  describe("Created a new books", () => {
    it.only("POST /api/books/", async () => {
      const res = await request(app)
        .post("/api/books/")
        .field("data", JSON.stringify({ link: "https://google.fr", img_link: "https://google.fr" }))
        .attach("assets", `${__dirname}/test.svg`);
      const [[res2]] = await Books.findOneById(1);
      expect(res2.filename).toContain("test.svg");
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(expect.objectContaining({ link: "https://google.fr" }));
    });
    it.only("POST /api/books/", async () => {
      const res = await request(app)
        .post("/api/books/")
        .field("data", JSON.stringify({ links: "https://google.fr", img_link: "https://google.fr" }))
        .attach("assets", `${__dirname}/test.svg`);
      expect(res.statusCode).toBe(422);
    });
    it.only("POST /api/books/", async () => {
      const res = await request(app).post("/api/books/").attach("assets", `${__dirname}/test.svg`);
      expect(res.statusCode).toBe(422);
    });
  });

  describe("GET books", () => {
    it.only("GET /api/books/", async () => {
      const res = await request(app).get("/api/books/").send();
      expect(res.body).toHaveLength(1);
    });
    it.only("GET /api/books/1", async () => {
      const res = await request(app).get("/api/books/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.objectContaining({ link: "https://google.fr" }));
    });
    it.only("GET /api/books/2", async () => {
      const res = await request(app).get("/api/books/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("PUT books", () => {
    it.only("PUT /api/books/1", async () => {
      const res = await request(app).put("/api/books/1").send({ link: "https://test.fr" });
      expect(res.body).toEqual(expect.objectContaining({ link: "https://test.fr" }));
    });
    it.only("PUT /api/books/2", async () => {
      const res = await request(app).put("/api/books/2").send({ link: "https://test.fr" });
      expect(res.statusCode).toBe(404);
    });
    it.only("PUT /api/books/1", async () => {
      const res = await request(app).put("/api/books/1").send({ links: "https://test.fr" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("DELETE books", () => {
    it.only("DELETE /api/books/1", async () => {
      const res = await request(app).delete("/api/books/1").send();
      expect(res.statusCode).toBe(204);
    });
    it.only("DELETE /api/books/2", async () => {
      const res = await request(app).delete("/api/books/2").send();
      expect(res.statusCode).toBe(404);
    });
  });
});
