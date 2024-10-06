const express = require('express');

app = express()

app.get('/', (req, res) => {
    res.send('Holaaaa');
});

app.get('/about', (req, res) => {
    res.send('about us');
});

app.get('/api', (req, res) => {
    res.send({name: 'AL'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('SERVER RUNNING hihihi');
});