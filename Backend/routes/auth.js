const express = require('express')
const router = express.Router();
const User = require('../models/User')

router.post('/', (req, resp)=>{
    console.log(req.body)
    resp.send(req.body)
    const user = User(req.body);
    user.save();
})

module.exports = router;