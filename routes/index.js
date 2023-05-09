const express = require("express");
const router = express.Router();
const constrollers = require("../controllers/index");

router
  .get("/", constrollers.controllersGet)
  .post("/create", constrollers.controllersCreate)
  .patch("/:id", constrollers.controllersUpdate)
  .delete("/:id", constrollers.controllersDelete);

module.exports = router;
