const csv = require('csv-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

let data: any[] = [];

app.use(express.static('dist'));

app.get('/*', (req: any, res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(port, async (err: any) => {
  if (err) {
    return console.error(err);
  }

  const file = fs.readFileSync(path.join(__dirname, '../src/assets/train-station-chinese-names.csv'), 'utf-8');
  data = file.split('\n').splice(1);
  data = data.map(x => {
    const line = x.split(',');
    return ({
      code: line[0],
      name_eng: line[1],
      name_chinese: line[2],
    });
  });

  return console.log(`server is listening on ${port}`);
});
