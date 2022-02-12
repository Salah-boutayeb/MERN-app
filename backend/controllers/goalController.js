const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.json({ goals }).status(200);
});
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(401);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  if (user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error("user not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ updatedGoal }).status(200);
});
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(401);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  if (user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error("user not authorized");
  }
  goal.remove();
  res.json({ id: goal.id }).status(200);
});
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }

  const goal = await Goal.create({ text: req.body.text, user: req.user.id });
  res.json({ goal }).status(200);
});

module.exports = {
  getGoals,
  updateGoal,
  postGoal,
  deleteGoal,
};
