const express = require('express');
var app = express();
const path = require('path');
var cors = require('cors');
require('dotenv').config();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

var DOMAIN = 'sandboxdc3ad469df4c4d7bb20c78a9d0c58608.mailgun.org';
var mailgun = require('mailgun-js')({
  apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
  domain: DOMAIN,
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  mailgun.messages().send(req.body, (error, body) => {
    console.log(body);
    console.log(error ? error : '');
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
