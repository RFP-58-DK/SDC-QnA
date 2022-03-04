 const express = require('express');
 const app = express();

 const port = 3000;

 app.use(express.urlencoded({ extended: true }));

 app.get('/qa/questions', (req, res) => {
   res.send('questions response here');
 });

 app.listen(port, () => {
   console.log(`Listening on port ${port}`);
 });
