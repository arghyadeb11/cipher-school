const User = require("../models/userModel");

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exist");
  }

  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      pic: user.pic,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

module.exports = { registerUser };
