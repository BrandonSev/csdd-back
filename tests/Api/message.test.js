const request = require("supertest");
const { query } = require("../../db-connection");
const app = require("../../src/app");

const userPayload = {
  firstname: "Brandon",
  lastname: "Seveste",
  birthday: "2021-12-21",
  address: "21 rue de test",
  postal_code: 28000,
  city: "St remy",
  email: "seveste.te@lol.fr",
  phone: "0768567654",
  password: "test",
  province_id: 1,
  adoption_place_id: 1,
};

describe("Message API Endpoint", () => {
  beforeAll(async () => {
    const sql = "SET FOREIGN_KEY_CHECKS=0; DELETE FROM messages WHERE id > 0;";
    const sql2 = "ALTER TABLE messages AUTO_INCREMENT=1";
    const sql3 = "DELETE FROM province WHERE id > 0";
    const sql4 = "ALTER TABLE province AUTO_INCREMENT=1";
    const sql5 = "INSERT INTO province SET name='Province'";
    const sql6 = "DELETE FROM adoption_place WHERE id > 0";
    const sql7 = "ALTER TABLE adoption_place AUTO_INCREMENT=1";
    const sql8 = "INSERT INTO adoption_place SET name='Adoption'";
    const sql9 = "DELETE FROM users WHERE id > 0";
    const sql10 = "ALTER TABLE users AUTO_INCREMENT=1; SET FOREIGN_KEY_CHECKS=1";
    await query(sql);
    await query(sql2);
    await query(sql3);
    await query(sql4);
    await query(sql5);
    await query(sql6);
    await query(sql7);
    await query(sql8);
    await query(sql9);
    await query(sql10);
    await request(app).post("/api/users").send(userPayload);
  });

  describe("Created a new message with valid value", () => {
    it("POST /api/messages/ and should return {message: {number} }", async () => {
      const res = await request(app).post("/api/messages/").send({ message: "message", users_id: 1 });
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(expect.objectContaining({ id: expect.any(Number), message: expect.any(String) }));
    });
  });

  describe("Created a new message with no valid value", () => {
    it("POST /api/messages/ and should return {}", async () => {
      const res = await request(app).post("/api/messages/").send({ names: "Roles" });
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Get one message", () => {
    it("GET /api/messages/1 and should return {id: 1, message: 'message'}", async () => {
      const res = await request(app).get("/api/messages/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.objectContaining({ id: expect.any(Number), message: expect.any(String) }));
    });
  });

  describe("Get one message not existing", () => {
    it("GET /api/messages/2 and should return code 404", async () => {
      const res = await request(app).get("/api/messages/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Deleted one message existing", () => {
    it("DELETE /api/messages/1 and should return code 204", async () => {
      const res = await request(app).delete("/api/messages/1").send();
      expect(res.statusCode).toBe(204);
    });
  });

  describe("Deleted one message not existing", () => {
    it("DELETE /api/messages/2 and should return code 404", async () => {
      const res = await request(app).delete("/api/messages/3").send();
      expect(res.statusCode).toBe(404);
    });
  });
});
