const router = require("express").Router();
const {
  create,
  read,
  readOne,
  update,
  remove,
} = require("../controller/postController");

router.put("/", (req, res) => {
  create(req, res);
});

router.get("/", (req, res) => {
  read(req, res);
});

router.get("/:id", (req, res) => {
  readOne(req, res);
});

router.post("/:id", (req, res) => {
  update(req, res);
});

router.delete("/", (req, res) => {
  remove(req, res);
});

module.exports = router;
