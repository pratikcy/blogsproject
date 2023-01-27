const { loadAllBlogDataCountByKey } = require("../../models/blogs.model");

import app from "../../app";

const request = require("supertest");

describe("Unit Tests 1", () => {
  test("Check Occurrence for language key", async () => {
    const actual = { en: 22, fr: 4, es: 6, de: 6 };
    const result = await loadAllBlogDataCountByKey("language");
    expect(result).toEqual(actual);
  });
});

// describe("Unit Tests 2", () => {
//   test("Check Occurrence for invalid key", async () => {
//     const actual = {};
//     const result = await loadAllBlogDataCountByKey("test");
//     expect(result).toEqual(actual);
//   });
// });

describe("Test GET calls", () => {
  const actualCategory: { [key: string]: number } = {
    Technology: 13,
    National: 4,
    Religion: 21,
  };
  test("Get all Categories Count", async () => {
    const response = await request(app).get("/blogs/queryByCategory");
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(actualCategory);
  });

  const actualLanguage: { [key: string]: number } = {
    en: 22,
    fr: 4,
    es: 6,
    de: 6,
  };
  test("Get all Language Count", async () => {
    const response = await request(app).get("/blogs/queryByLanguage");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(actualLanguage);
  });

  const actualHashTag = { "#tech": 13, "#national": 4, "#religion": 21 };
  test("Get all Hashtag Count", async () => {
    const response = await request(app).get("/blogs/queryByHashtag");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(actualHashTag);
  });

  const actualMonth: { [key: string]: number } = {
    January: 10,
    February: 6,
    March: 2,
    April: 2,
    May: 4,
    June: 2,
    July: 2,
    August: 1,
    September: 1,
    October: 2,
    November: 1,
    December: 5,
  };
  test("Get all Month Count", async () => {
    const response = await request(app).get("/blogs/queryByMonth");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(actualMonth);
  });
});
