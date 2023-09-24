const express = require('express');

const app = express();
const cors = require('cors');
const port = 3002;
const budget= require('./server.json')
app.use(cors());
app.use('/',express.static('public'));
app.get('/intro', (req, res) => {
    res.send("Hello world");
});
app.get('/budget', (req, res) => {
    res.json(budget);
    
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});