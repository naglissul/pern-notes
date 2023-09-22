const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getAllNotes);
router.post("/", controller.createNote);
router.put("/", controller.updateNote);
router.delete("/:id", controller.deleteNote);

module.exports = router;
