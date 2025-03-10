const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => res.send('Hello World after a refresh!'));

app.listen(port, () => console.log(`I am on port ${port}!`));