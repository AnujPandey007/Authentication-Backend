require('dotenv').config()

const User = require('./models/users');
const usersApi = require('./routes/users');
const userAuth = require('./routes/auth');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors());

//use bodyparser or express for json
// app.use(bodyParser.json()); 

app.use(express.json())
const port = process.env.PORT || 3000;

//main
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_KEY);
  app.listen(port, () => {
      console.info(`Listening on port http://localhost:${port}`);
  });
}

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/users', usersApi);

app.use('/auth', userAuth);
