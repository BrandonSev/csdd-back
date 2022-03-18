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

describe("Assets API Endpoint", () => {
  beforeAll(async () => {
    const sql = `SET FOREIGN_KEY_CHECKS=0; 
    truncate assets;
    truncate users;
    truncate province;
    truncate adoption_place;
    truncate roles;
    truncate categories;
    truncate assets_category;
    INSERT INTO province SET name='Province';
    INSERT INTO adoption_place SET name='Adoption';
    INSERT INTO roles SET name='admin';
    INSERT INTO roles SET name='moderator';
    INSERT INTO categories SET name='category';
    INSERT INTO categories SET name='category2';
    SET FOREIGN_KEY_CHECKS=1;
    `;
    await query(sql);
    await request(app).post("/api/users").send(userPayload);
  });

  describe("Created a new asset with valid value", () => {
    it("POST /api/assets/", async () => {
      const res = await request(app)
        .post("/api/assets/")
        .field("data", JSON.stringify({ file_date: "2022-02-01", roleId: [1, 2], categoryId: [1, 2] }))
        .attach("assets", `${__dirname}/test.svg`);
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: expect.any(Number), filename: expect.any(String) })]));
      const sql = "SELECT * from roles_assets WHERE assets_id=1 AND roles_id IN (1,2);";
      const res2 = await query(sql);
      const sql2 = "SELECT * from assets_category WHERE assets_id=1 AND categories_id IN (1,2,3,4);";
      const res3 = await query(sql2);
      expect(res2).toHaveLength(2);
      expect(res3).toHaveLength(2);
    });
  });

  describe("Created a new asset with invalid value", () => {
    it("POST /api/assets/", async () => {
      const res = await request(app).post("/api/assets/").attach("assets", `${__dirname}/test.svg`);
      expect(res.statusCode).toBe(422);
    });
    it("POST /api/assets/", async () => {
      const res = await request(app)
        .post("/api/assets/")
        .field("data", JSON.stringify({ file_date: "2022-02-01", roleId: [1, 2] }));
      expect(res.statusCode).toBe(422);
    });
  });

  describe("Get all assets", () => {
    it("GET /api/assets/", async () => {
      const res = await request(app).get("/api/assets/").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("Get one assets", () => {
    it("GET /api/assets/1", async () => {
      const res = await request(app).get("/api/assets/1").send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.objectContaining({ filename: expect.any(String) }));
    });
  });

  describe("PUT one assets existing", () => {
    it("PUT /api/assets/1", async () => {
      const res = await request(app)
        .put("/api/assets/1")
        .field("data", JSON.stringify({ file_date: "2022-03-17 09:00" }));
      expect(res.statusCode).toBe(200);
      expect(res.body.file_date).toContain("2022-03-17");
    });
    it("PUT /api/assets/1", async () => {
      const res = await request(app)
        .put("/api/assets/1")
        .field("data", JSON.stringify({ roleId: [2] }));
      const sql = "SELECT * from roles_assets WHERE assets_id=1 AND roles_id IN (1,2,9);";
      const res2 = await query(sql);
      expect(res2).toHaveLength(1);
      expect(res.statusCode).toBe(200);
    });
    it("PUT /api/assets/1", async () => {
      const res = await request(app)
        .put("/api/assets/1")
        .field("data", JSON.stringify({ categoryId: [1, 2] }));
      const sql = "SELECT * from assets_category WHERE assets_id=1 AND categories_id IN (1,2,9);";
      const res2 = await query(sql);
      expect(res2).toHaveLength(2);
      expect(res.statusCode).toBe(200);
    });
    it("PUT /api/assets/1", async () => {
      const res = await request(app)
        .put("/api/assets/1")
        .field("data", JSON.stringify({ categoryId: [1] }));
      const sql = "SELECT * from assets_category WHERE assets_id=1 AND categories_id IN (1,2,9);";
      const res2 = await query(sql);
      expect(res2).toHaveLength(1);
      expect(res.statusCode).toBe(200);
    });
    it("PUT /api/assets/1", async () => {
      const res = await request(app).put("/api/assets/1").attach("assets", `${__dirname}/test.svg`);
      expect(res.body.filename).toContain("test.svg");
      expect(res.statusCode).toBe(200);
    });
  });

  describe("remove one assets not existing", () => {
    it("DELETE /api/assets/1", async () => {
      const res = await request(app).delete("/api/assets/2");
      expect(res.statusCode).toBe(404);
    });
  });

  describe("remove one assets existing", () => {
    it("DELETE /api/assets/1", async () => {
      const res = await request(app).delete("/api/assets/1");
      expect(res.statusCode).toBe(204);
    });
  });

  afterAll(async () => {
    const sql = `
    SET FOREIGN_KEY_CHECKS=0;
    truncate users;
    truncate province;
    truncate adoption_place;
    truncate roles;
    truncate roles_assets;
    truncate categories;
    truncate assets_category;
    SET FOREIGN_KEY_CHECKS=1;`;
    await query(sql);
  });
});
