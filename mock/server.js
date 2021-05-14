const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = 4500;

let form = require("./form.json");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/form", (req, res) => {
    setTimeout(() => {
        res.json(form);
    }, 100);
});

server.listen(port, () => {
    console.log(`JSON Server is running in localhost:${port}`);
});