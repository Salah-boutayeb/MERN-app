const express = require("express");
const {
  getGoals,
  updateGoal,
  postGoal,
  deleteGoal,
} = require("../controllers/controllerGoals");
const router = express.Router();
router.route("/").get(getGoals).post(postGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
