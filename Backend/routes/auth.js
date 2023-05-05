const express = require('express')
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
let fetchuser = require("../middlewares/fetchuser")

const JWT_SECRET = "SomeRandom$1319sString"

const { body, validationResult } = require('express-validator');

// Route 1: Create a new User using POST "/api/auth/createuser"

router.post('/createuser', [  // For checking validation of different parameters such as name, email, pass
  body("name", "Enter a valid Name").isLength({ min: 3 }),
  body("email", "Enter a valid Email").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({ min: 5 })
], async (req, resp) => {

  let success = false;

  // using Express Validator, send errors to response, if any
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resp.status(400).json({ success, errors: errors.array() });
  }

  // Putting the entire actual code inside a try and catch block, to eliminate any external errors
  try {

    // if a user with this email already exists, we'll show an error
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      success = false;
      return resp.status(400).json({ success, error: "This email is already taken..." })
    }

    // for extra secured password using bcrypt.js, salt ads a random string to the password
    let salt = await bcrypt.genSalt(10);
    let secPass = await bcrypt.hash(req.body.password, salt)

    // Creating a new user with credentials as specified in the req.body
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });

    // For signature using JWT Authentication
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    resp.json({ success, authtoken });

  } catch (error) {
    console.error(error.message)
    resp.status(500).send("Some Unexpected error has occurred")
  }
})


// Route 2: Authenticate a User using POST "/api/auth/login", No login required

router.post('/login', [
  body('email', "Enter a Valid Email").isEmail(),
  body('password', "Enter the correct Password").isLength({ min: 5 })
], async (req, resp) => {

  let success = false;

  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    success = false;
    return resp.status(400).json({ success, errors: errors.array() })
  }

  const { email, password } = req.body;

  try {

    let user = await User.findOne({ email })
    if (!user) {
      success = false;
      return resp.status(400).json({ success, error: "Please Enter correct Credentials!" })
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return resp.status(400).json({ success, error: "Please Enter correct Credentials!" })
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET)
    success = true;
    resp.json({ success, authtoken })

  } catch (error) {
    console.error(error.message)
    resp.status(500).send("Internal Server Error");
  }
})


// Route 3: Get logged in user details using POST "api/auth/getuser", Login Required
router.post('/getuser', fetchuser, async (req, resp) => {
  try {

    userId = req.user.id;
    const user = await User.findById(userId).select('-password')
    resp.send(user);

  } catch (error) {
    console.error(error.message);
    resp.status(500).send("Internal Server Error");
  }
})

module.exports = router;