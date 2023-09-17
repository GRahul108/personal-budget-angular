const express = require('express');

const app = express();
const port = 3002;

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 50
        },
        {
            title: 'Rent',
            budget: 200
        },
        {
            title: 'Grocery',
            budget: 120
        },
    ]
};
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