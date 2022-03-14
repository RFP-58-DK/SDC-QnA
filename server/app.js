 const express = require('express');
 const app = express();
 const port = 3000;
 const db = require('./db');
 const axios = require('axios');
 const controller = require('./controller');

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json({}));
 app.get('/qa/questions', (req, res) => {
  controller.getQuestions(req, res);
 });
 app.get('/qa/questions/answers', (req, res) => {
   controller.getAnswers(req, res);
 });

 module.exports = app;

