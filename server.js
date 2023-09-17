const express = require('express');

const app = express();
const port = 3002;
app.use('/',express.static('public'));
app.get('/intro', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});