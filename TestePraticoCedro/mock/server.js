const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = 4500;

let qualquerJsonAe = require("./qualquerJsonAe.json");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/qualquer-coisa", (req, res) => {
    setTimeout(() => {
        res.json(qualquerJsonAe);
    });
});

server.listen(port, () => {
    console.log(`JSON Server is running in localhost:${port}`);
});