const db = require('../db')
const models = require('../model');

const getQuestions = (req, res) => {
  const params = req.query;
  models.getQuestions(params, (err, questions) => {
    if (err) {
      // console.log(err);
      res.status(500).send();
    } else {
      const response = {
        product_id: params.product_id,
        results: questions
      }
      for (let i = 0; i < response.results.length; i++) {
        let d = new Date(parseInt(response.results[i].question_date));
        response.results[i].question_date = d;
        if (response.results[i].reported === 0) {
          response.results[i].reported = false;
        } else {
          response.results[i].reported = true;
        }
        for (let keys in response.results[i].answers) {
          let d = new Date(parseInt(response.results[i].answers[keys].date));
          response.results[i].answers[keys].date = d;
          if (response.results[i].answers[keys].photos === null) {
            response.results[i].answers[keys].photos = [];
          }
        }
      }
      res.status(200).send(response);
    }
  });
}

const getAnswers = (req, res) => {
  const params = req.query;
  // console.log(req.params);
  models.getAnswers(params, (err, answers) => {
    if (err) {
      res.status(500).send();
    } else {
      const response = {
        question: params.question_id,
        page: params.page || 0,
        count: params.count || 5,
        results: answers
      }
      for (let i = 0; i < response.results.length; i++) {
        let d = new Date(parseInt(response.results[i].date));
        response.results[i].date = d;
        if (response.results[i].photos === null) {
          response.results[i].photos = [];
        }
      }
      res.status(200).send(response);
    }
  });
}

module.exports = {
  getQuestions,
  getAnswers
}