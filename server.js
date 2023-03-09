const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connect = require('./mongo');
const middleware = require('./middleware');
const { getAllIdp, getIdpById, postIdp } = require('./idp');

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.get('/idp', getAllIdp);
app.get('/idp/:id', middleware, getIdpById);
app.post('/idp', postIdp);


app.listen(port, async () => {
    await connect();
    console.log(`Example app listening at http://localhost:${port}`);
});
