const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.json({ goals }).status(200);
});
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ updatedGoal }).status(200);
});
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  goal.remove();
  res.json({ id: goal.id }).status(200);
});
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }

  const goal = await Goal.create({ text: req.body.text });
  res.json({ goal }).status(200);
});

module.exports = {
  getGoals,
  updateGoal,
  postGoal,
  deleteGoal,
};
