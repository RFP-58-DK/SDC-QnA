const db = require('../db');

const getQuestions = (params, callback) => {
  const queryObj = `SELECT * FROM questions LEFT OUTER JOIN answers ON questions.question_id = answers.question_id WHERE questions.product_id = ${params.product_id} LIMIT ${params.count || 5}`;

  const queryStr = `
    SELECT
      q.question_id,
      q.question_body,
      q.question_date,
      q.asker_name,
      q.question_helpfulness,
      q.question_reported AS reported,
      json_build_object('1234', json_build_object('id', a.answer_id)) AS answers
    FROM questions AS q LEFT OUTER JOIN answers AS a ON q.question_id = a.question_id WHERE q.product_id = ${params.product_id} LIMIT ${params.count || 5}`;
  db.query(queryStr,  (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}

const getAnswers = (params, callback) => {
  db.query('SELECT * FROM answers LIMIT 10', (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}

const getPhotos = (params, callback) => {
  db.query('SELECT * FROM photos LIMIT 10', (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}

module.exports = {
  getQuestions,
  getAnswers,
  getPhotos
}