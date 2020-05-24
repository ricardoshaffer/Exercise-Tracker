var path = require("path");
const router = require("express").Router();

router.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "../public/index.html"));
  });
  router.get("/exercise", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  router.get("/stats", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  module.exports = router;