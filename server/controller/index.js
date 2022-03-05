const db = require('../db')
const models = require('../model');

const getQuestions = (req, res) => {
  const params = req.query;
  models.getQuestions(params, (err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
}

const getAnswers = (req, res) => {
  const params = req.query;
  models.getAnswers(params, (err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
}

const getPhotos = (req, res) => {
  const params = req.query;
  models.getPhotos(params, (err, results) => {
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