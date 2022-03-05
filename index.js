 const express = require('express');
 const app = express();
 const port = 3000;
 const db = require('./server/db');
 const axios = require('axios');


 app.use(express.urlencoded({ extended: true }));
 app.use(express.json);

 app.listen(port, () => {
   console.log(`Listening on port ${port}`);
 });

 app.get('/qa/questions', (req, res) => {
   res.send('questions response here');
 });
