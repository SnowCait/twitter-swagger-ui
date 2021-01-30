const express = require('express');
const path = require('path');

const hostname = 'localhost';
const port = 8000;
const repository = path.basename(__dirname);
const folder = '/docs';

const app = express();

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/${repository}/`);
});

app.use(`/${repository}`, express.static(path.join(__dirname, folder)));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, `${folder}/404.html`));
});
