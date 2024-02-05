const express = require('express');

const app = express();
app.get('/', (req, res) => {
    console.log(`Date: ${new Date()}`)
    res.send('Hello world\n');
});

const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);