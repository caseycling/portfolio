const express = require('express');
var app = express();
const SgMail = require('@sendgrid/mail');

SgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var PORT = process.env.PORT || 5000;

app.post('/contact', (req, res) => {
    console.log(req.body)
    SgMail.send(req.body)
    .then(res => console.log(`SERVER.JS RESPONSE: ${res.body}`))
    .catch(err => console.log(`SERVER.JS ERROR: ${err}`));
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))