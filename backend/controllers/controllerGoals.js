const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: "get goals" }).status(200);
});
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ message: "update goal " + req.params.id }).status(200);
});
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: "delete goal " + req.params.id }).status(200);
});
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.json({ message: "set goal" }).status(200);
});

module.exports = {
  getGoals,
  updateGoal,
  postGoal,
  deleteGoal,
};
