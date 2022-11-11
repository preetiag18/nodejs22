"use strict";

const http = require("http");
const path = require("path");
const fs = require("fs");

const { port, host } = require("./config.json");

const homePath = path.join(__dirname, "home.html");

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.promises.readFile(homePath, "utf-8");
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(data, "utf-8"),
    });
    res.end(data);
  } catch (err) {
    res.statusCode = 404;
    res.end(`Error:${err.message}`);
  }
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running`)
);
