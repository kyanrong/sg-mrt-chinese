const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/*', (req: any, res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, (err: any) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
