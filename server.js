const express = require('express');
var app = express();
const SgMail = require('@sendgrid/mail');
const path = require('path');
require('dotenv').config();


SgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
console.log(process.env.REACT_APP_SENDGRID_API_KEY)

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.post('/contact', (req, res) => {
    console.log(req.body) 
    SgMail.send(req.body)
    .then(res => console.log(`SERVER.JS RESPONSE: ${res}`))
    .catch(err => console.log(`SERVER.JS ERROR: ${err}`));
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))