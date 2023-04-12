const ConnectToMongo = require('./db')
const express = require('express')
const app = express();

const port = 3000;

app.use(express.json());

ConnectToMongo();

// Different routes
app.get('/', (req, resp)=>{
    resp.send('Hello Someone!')
});

app.use('/auth', require('./routes/auth'));

app.use('/notes', require('./routes/notes'));


app.listen(port, ()=>{
    console.log(`Example app listening at port http://localhost:${port}`)
});