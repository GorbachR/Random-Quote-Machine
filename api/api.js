/*Quotes are from http://quotes.stormconsultancy.co.uk/*/

const http = require("http");
const host = "localhost";
const port = "8081";
const quotes = require("./quotes.json");

const requestListener = (req, res) => {
  req.on("error", (err) => {
    console.log(err);
  });

  if (req.method === "GET" && req.url === "/") {
    const randIndex = Math.floor(Math.random() * quotes.length);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.statusCode = 200;
    res.end(JSON.stringify(quotes[randIndex]));
  } else {
    res.statusCode = 404;
    res.end();
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Listening on http//${host}:${port}`);
});
