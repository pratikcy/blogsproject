const https = require("https");
const fs = require("fs");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const options = {
  key: fs.readFileSync("./.cert/privatekey.key"),
  cert: fs.readFileSync("./.cert/certificate.crt"),
}; //it reads the private key and certificate

const { loadBlogData } = require("./models/blogs.model"); // loads the blog data

const PORT: number = Number(process.env.PORT) || 8000;

const server = https.createServer(options, app); // https server

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
