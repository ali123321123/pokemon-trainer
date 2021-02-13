const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const { PORT = 5000 } = process.env;

server.use(middleware);

server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ...`);
});
