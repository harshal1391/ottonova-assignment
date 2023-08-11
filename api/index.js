const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;
app.use(cors());

app.use("/api", require("./router/cities.route"));

app.listen(port, () => console.log(`Server has started on port ${port}`));

module.exports = app;
