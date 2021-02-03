const express = require('express');
const logger = require('morgan');
const app = express();
const port = 3000;

app.use(logger('combined'));

app.use((req, res) => res.sendStatus(200));

app.listen(port, () => {
    console.log(`Server started at ${new Date().toLocaleString()} on port ${port}`);
});
