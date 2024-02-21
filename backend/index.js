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
app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
res.header(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With\,Content-Type,Accept"
);
next();
});
// add this code work same as urls.py in django it will send anythinh starting api to CreateUser
app.use(express.json())
app.get('/', (req, res) => {
  res.send('How are you!');
});

app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
