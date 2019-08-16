const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api')
const cors = require('cors');


const PORT = 3000;
const app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello form server');
})
app.use('/api',api)

app.listen(PORT,()=>{
    console.log('server is listening ',PORT)
})