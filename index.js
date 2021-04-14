const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

https
  .createServer(
    {
      key: fs.readFileSync('/home/gibson/ca' + '/key.pem', 'utf-8'),
      cert: fs.readFileSync('/home/gibson/ca' + '/cert.pem', 'utf-8')
    },
    app.use('/', (req, res) => {
      res.send('Congrats! You made https server now :)');
    })
  )
  .listen(3001);
