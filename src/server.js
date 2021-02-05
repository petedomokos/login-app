const express = require('express')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const data = require('./user-stats.json');

app.get('/user-stats', function (req, res) {
    // TODO need to filter data based on params
    return res.send(data);
});

app.listen(8080);
