const request = require("supertest");
const app = require("../index");

describe("GET /api/cities", () => {
  it("should return all cities", async () => {
    const res = await request(app).get("/api/cities");
    expect(res.statusCode).toBe(200);
    expect(res.body.cities.length).toBeGreaterThan(0);
  });

  it("should return correct city data", async () => {
    const res = await request(app).get("/api/cities");
    expect(res.statusCode).toBe(200);
    let city = res.body.cities.filter((el) => el.name === "Munich");
    expect(city.length).toBe(1);
    expect(city[0].name_native).toBe("München");
  });
});
