const express = require("express"); //create express app.
const morgan = require("morgan"); //logging http request information
const cors = require("cors");
const blogRouter = require("./routes/blogs.routes");

const app = express();

app.disable("x-powered-by"); //header to hide information about the server

app.use(
  cors({
    origin: "https://chetanshind-w10:3000", //whitelist this url
  })
);

app.use(morgan("combined"));

app.use(express.json());

app.use(blogRouter);

export default app;
