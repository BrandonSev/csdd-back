const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

describe("Room API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM room WHERE id > 0";
    const sql2 = "ALTER TABLE room AUTO_INCREMENT=1";
    await query(sql);
    await query(sql2);
  });

  describe("Created a new room with valid value", () => {
    it("POST /api/rooms/ and should return {message: {number} }", async () => {
      const res = await request(app).post("/api/rooms/").send({ name: "Chambre" });
      expect(res.statusCode).toBe(201);
      expect(res.body.room).toEqual(expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }));
    });
  });

  describe("Created a new room with no valid value", () => {
    it("POST /api/rooms/ and should return {}", async () => {
      const res = await request(app).post("/api/rooms/").send({ names: "Chambre" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Created a new room with already name value exist", () => {
    it("POST /api/rooms/ and should return {}", async () => {
      const res = await request(app).post("/api/rooms/").send({ name: "Chambre" });
      expect(res.statusCode).toBe(422);
      expect(res.body).toEqual({ message: "Une chambre sous ce nom existe déjà" });
    });
  });

  describe("Get one room", () => {
    it("GET /api/rooms/1 and should return {id: 1, name: 'Lieu de réception'}", async () => {
      const res = await request(app).get("/api/rooms/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ id: expect.any(Number), name: expect.any(String) });
    });
  });

  describe("Get one room not existing", () => {
    it("GET /api/rooms/2 and should return code 404", async () => {
      const res = await request(app).get("/api/rooms/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one room not existing", () => {
    it("PUT /api/rooms/3 and should return code 404", async () => {
      const res = await request(app).put("/api/rooms/3").send({ name: "Lieu de réception modifié" });
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Update one room existing", () => {
    it("PUT /api/rooms/1 and should return code 200", async () => {
      const res = await request(app).put("/api/rooms/1").send({ name: "Name modifié" });
      expect(res.statusCode).toBe(200);
      expect(res.body.room).toEqual(expect.objectContaining({ name: "Name modifié" }));
    });
  });

  describe("Deleted one room existing", () => {
    it("DELETE /api/rooms/1 and should return code 204", async () => {
      const res = await request(app).delete("/api/rooms/1").send();
      expect(res.statusCode).toBe(204);
    });
  });

  describe("Deleted one room not existing", () => {
    it("DELETE /api/rooms/2 and should return code 404", async () => {
      const res = await request(app).delete("/api/rooms/3").send();
      expect(res.statusCode).toBe(404);
    });
  });
});
