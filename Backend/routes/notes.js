const express = require('express')
const router = express.Router();

router.get('/', (req, resp)=>{
    resp.json([]);
})

module.exports = router;