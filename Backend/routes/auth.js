const express = require('express')
const router = express.Router();
const User = require('../models/User')

const { body, validationResult } = require('express-validator');

router.post('/createuser', [
    body("name", "Enter a valid Name").isLength({min: 3}),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({min: 5})
] , async (req, resp)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }
    try {

      let user = await User.findOne({email: req.body.email})
      if(user){
        return resp.status(400).json({error: "This email is already taken..."})
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      resp.json(user);

    } catch (error) {
      console.error(error.message)
      resp.status(500).send("Some Unexpected error has occurred")
    }
})

module.exports = router;