const request = require("supertest");
const fs = require("fs");
const app = require("../../src/app");
const { query } = require("../../db-connection");

describe("Events API Endpoint", () => {
  beforeAll(async () => {
    const sql = `SET FOREIGN_KEY_CHECKS=0;
   truncate events;
   SET FOREIGN_KEY_CHECKS=1;`;
    await query(sql);
  });
  describe("Create new event", () => {
    it("should create event and return code 201", async () => {
      const res = await request(app)
        .post("/api/events")
        .field("data", JSON.stringify({ event_date: "2022-02-26 18:00", description: "description" }))
        .attach("assets", `${__dirname}/test.svg`);
      expect(res.statusCode).toBe(201);
    });
    it("should create event and return code 422", async () => {
      const res = await request(app)
        .post("/api/events")
        .field("data", JSON.stringify({ event_date: "2022-02-26 18:00", description: "description" }));
      expect(res.statusCode).toBe(422);
    });
  });
  describe("GET new event", () => {
    it("should get event and return code 200", async () => {
      const res = await request(app).get("/api/events/1").send();
      expect(res.statusCode).toBe(200);
    });
    it("should get event and return code 404", async () => {
      const res = await request(app).get("/api/events/2").send();
      expect(res.statusCode).toBe(404);
    });
    it("should get all event and return code 200", async () => {
      const res = await request(app).get("/api/events").send();
      expect(res.statusCode).toBe(200);
    });
  });
  describe("PUT event", () => {
    it("should put event and return code 200", async () => {
      const res = await request(app)
        .put("/api/events/1")
        .field("data", JSON.stringify({ event_date: "2022-03-22 18:00" }));
      expect(res.body.event_date).toContain("2022-03-21");
      expect(res.statusCode).toBe(200);
    });
    it("should put event and return code 200", async () => {
      const res = await request(app).put("/api/events/1").attach("assets", `${__dirname}/test.svg`);
      expect(res.body.filename).toContain("test.svg");
      expect(res.statusCode).toBe(200);
    });
  });
  describe("DELETE event", () => {
    it("should delete event and return code 204", async () => {
      const res = await request(app).delete("/api/events/1");
      expect(res.statusCode).toBe(204);
    });
    it("should delete event and return code 404", async () => {
      const res = await request(app).delete("/api/events/2").send();
      expect(res.statusCode).toBe(404);
    });
  });
  afterAll(() => {
    fs.readdir("assets", (err, files) => {
      files?.forEach((file) => {
        if (file.includes("test")) {
          fs.unlink(`assets/${file}`, (err2) => {
            return !err2;
          });
        }
      });
    });
  });
});
