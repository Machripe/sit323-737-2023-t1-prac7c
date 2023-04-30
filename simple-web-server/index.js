const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/story', (req, res) => {
    res.sendFile(__dirname + "/story.html");
});

app.listen(port, () => { console.log("Server listening on port " + port) });