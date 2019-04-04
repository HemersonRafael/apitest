const express = require('express');
const bodyParser = require('body-parser')
const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.send('<h1>Hello word!</h1>')
});


app.listen(PORT)