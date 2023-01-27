const { loadAllBlogDataCountByKey } = require("../models/blogs.model");
const { Request, Response } = require("express");

async function httpGetBlogsByCategory(req: Request, res: Response) {
  const result = await loadAllBlogDataCountByKey("category");
  return Response.status(200).json(result);
}

async function httpGetBlogsByLanguage(req: Request, res: Response) {
  const result = await loadAllBlogDataCountByKey("language");
  return Response.status(200).json(result);
}

async function httpGetBlogsByHashtag(req: Request, res: Response) {
  const result = await loadAllBlogDataCountByKey("hashtag");
  return Response.status(200).json(result);
}

async function httpGetBlogsByMonth(req: Request, res: Response) {
  const result = await loadAllBlogDataCountByKey("month");
  return Response.status(200).json(result);
}

export {
  httpGetBlogsByCategory,
  httpGetBlogsByLanguage,
  httpGetBlogsByHashtag,
  httpGetBlogsByMonth,
};
