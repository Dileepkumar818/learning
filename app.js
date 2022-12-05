let expree = require("express");
let app = expree();

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(3000);

module.exports = expree;
