const express = require('express');
const router = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Brisk...');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});

app.use(router);