// const express = require('express')
// const app = express()
// //change the port number because react is using 3000
// const port = 5000
// const mongoDB = require('./db');
// mongoDB();
// app.get('/', (req, res) => {
//   res.send('How are you!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');

mongoDB();

app.get('/', (req, res) => {
  res.send('How are you!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
