const express = require("express");
const routes = require("./routes");
const { config } = require("./config/index");

const app = express();

app.use(express.json());

app.use("/api/clase", routes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
