const db = require('../db')
const models = require('../model');

const getQuestions = (req, res) => {
  models.getQuestions((err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
}

const getAnswers = (req, res) => {
  models.getAnswers((err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
}

const getPhotos = (req, res) => {
  models.getPhotos((err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
}

module.exports = {
  getQuestions,
  getAnswers,
  getPhotos
}