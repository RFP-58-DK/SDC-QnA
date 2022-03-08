const db = require('../db')
const models = require('../model');

const getQuestions = (req, res) => {
  const params = req.query;
  models.getQuestions(params, (err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      const response = {
        product_id: params.product_id,
        results: results
      }
      res.status(200).send(response);
    }
  });
}

const getAnswers = (req, res) => {
  const params = req.query;
  // console.log(req.params);
  models.getAnswers(params, (err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      const response = {
        question: params.question_id,
        page: params.page,
        count: params.count,
        results: results
      }
      res.status(200).send(response);
    }
  });
}

module.exports = {
  getQuestions,
  getAnswers
}