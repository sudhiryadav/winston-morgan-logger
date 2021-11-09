const express = require("express");
const Logger = require("./lib/logger");
const app = express();
const PORT = 3000;

function logThis() {
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");
}

app.listen(PORT, () => {
  // Logger.clear();
  Logger.debug(`Server is up and running @ http://localhost:${PORT}`);
  logThis();
});
