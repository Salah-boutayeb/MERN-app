const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "please add a name"],
    },
    email: {
      type: "string",
      required: [true, "please add an email"],
    },
    password: {
      type: "string",
      required: [true, "password is required "],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
