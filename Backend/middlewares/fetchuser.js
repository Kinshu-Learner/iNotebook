const jwt = require('jsonwebtoken');

const JWT_SECRET = "SomeRandom$1319sString"

const fetchuser = async (req, resp, next)=>{

    const token = req.header('auth-token');

    if(!token){
        resp.status(401).json({error: "Please authenticate using a valid token"})
    }
    
    try {
        
        let data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next();

    } catch (error) {
        resp.status(401).json({error: "Please authenticate using a valid token"})
    }

}

module.exports = fetchuser;