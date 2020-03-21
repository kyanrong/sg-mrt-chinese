"use strict";
const express = require('express');
const fs = require('fs');
const sortBy = require('lodash.sortby');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';
app.use(express.static('dist'));
app.get('/stations', (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../src/assets/train-station-chinese-names.csv'), 'utf-8');
    let data = file.split('\n').splice(1);
    data = data.map((x) => {
        const line = x.split(',');
        return ({
            value: line[0],
            label: line[1],
            label_chinese: line[2],
        });
    });
    data = sortBy(data, ['label']);
    res.send(data);
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port, host, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map