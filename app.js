const express = require('express');
const fs = require('fs');

app = express()

app.get('/', (req, res) => {
    html = fs.readFileSync('./index.html', 'utf-8');
    html = html.replace('{{name}}', 'Satoshi');
    res.send(html);
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