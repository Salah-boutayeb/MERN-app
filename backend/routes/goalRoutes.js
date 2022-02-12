const express = require("express");
const {
  getGoals,
  updateGoal,
  postGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddelware");
const router = express.Router();
router.route("/").get(protect, getGoals).post(protect, postGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
