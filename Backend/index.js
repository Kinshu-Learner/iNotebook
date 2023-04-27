const ConnectToMongo = require('./db')
const express = require('express')
const app = express();

const port = 5000;

app.use(express.json());

ConnectToMongo();

// Different routes
app.get('/', (req, resp)=>{
    resp.send('Hello Someone!')
});

app.use('/api/auth', require('./routes/auth'));

app.use('/api/notes', require('./routes/notes'));


app.listen(port, ()=>{
    console.log(`iNotebook Backend listening at port http://localhost:${port}`)
});