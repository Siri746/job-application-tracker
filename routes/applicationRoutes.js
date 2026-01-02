const router = require("express").Router();
const Application = require("../models/Application");

router.post("/", async (req, res) => {
  const app = await Application.create(req.body);
  res.json(app);
});

router.get("/", async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
});

module.exports = router;
