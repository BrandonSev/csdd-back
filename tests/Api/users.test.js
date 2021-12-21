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
  status_id: 2,
};

const badUserPayload = {
  firstname: "Brandon",
  lastname: "Seveste",
  city: "St remy",
  phone: "0768567654",
  password: "test",
  status_id: 1,
};

describe("Users API Endpoint", () => {
  beforeAll(async () => {
    const sql = "DELETE FROM users WHERE id=1";
    const sql2 = "ALTER TABLE users AUTO_INCREMENT=1";
    await query(sql);
    await query(sql2);
  });

  describe("Create a new user with valid value", () => {
    it("POST /api/users/ and should obtain { id:1, firstname: 'Xa', lastname: 'Ge', email: 'test@gmail.com', ...}", async () => {
      const res = await request(app).post("/api/users/").send(userPayload);
      expect(res.statusCode).toBe(201);
    });
  });

  describe("Create a new user with no all necessary value", () => {
    it("POST /api/users/ and should obtain code 400", async () => {
      const res = await request(app).post("/api/users/").send(badUserPayload);
      expect(res.statusCode).toBe(400);
    });
  });

  describe("Create a new user with existing email", () => {
    it("POST /api/users/ and should obtain code 422", async () => {
      const res = await request(app).post("/api/users/").send(userPayload);
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Find users where user not existing", () => {
    it("GET /api/users/2 and should obtain code 404", async () => {
      const res = await request(app).get("/api/users/2");
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({});
    });
  });

  describe("Find All users", () => {
    it("GET /api/users and should obtain [{...}]", async () => {
      const res = await request(app).get("/api/users/");
      expect(res.status).toBe(200);
      expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: expect.any(Number) })]));
    });
  });

  describe("Updated user where user not existing", () => {
    it("PUT /api/users/2 and should obtain code 404", async () => {
      const res = await request(app).put("/api/users/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("Updated user with good value to be modified", () => {
    it("PUT /api/users/1 and should obtain code 200", async () => {
      const res = await request(app).put("/api/users/1").send({ address: "21 rue de dev" });
      expect(res.statusCode).toBe(200);
    });
  });

  describe("Updated user with value to not be modified", () => {
    it("PUT /api/users/1 and should obtain code 400", async () => {
      const res = await request(app).put("/api/users/1").send({ firstname: "Brandon" });
      expect(res.statusCode).toBe(400);
    });
  });

  describe("DELETE user not existing", () => {
    it("DELETE /api/users/2 and should obtain code 404", async () => {
      const res = await request(app).delete("/api/users/2").send();
      expect(res.statusCode).toBe(404);
    });
  });

  describe("DELETE user existing", () => {
    it("DELETE /api/users/1 and should obtain code 204", async () => {
      const res = await request(app).delete("/api/users/1").send();
      expect(res.statusCode).toBe(204);
    });
  });
});
