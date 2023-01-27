const express = require("express");

const {
  httpGetBlogsByCategory,
  httpGetBlogsByLanguage,
  httpGetBlogsByHashtag,
  httpGetBlogsByMonth,
} = require("./blogs.controller");

const blogsRouter = express.Router();

blogsRouter.get("/blogs/queryByCategory", httpGetBlogsByCategory);
blogsRouter.get("/blogs/queryByLanguage", httpGetBlogsByLanguage);
blogsRouter.get("/blogs/queryByHashtag", httpGetBlogsByHashtag);
blogsRouter.get("/blogs/queryByMonth", httpGetBlogsByMonth);

export default blogsRouter;

//Routing module
