const db = require('../db');

const getQuestions = (params, callback) => {

  const queryStr = `SELECT * FROM questions LEFT OUTER JOIN answers ON questions.question_id = answers.question_id WHERE questions.product_id = ${params.product_id} LIMIT ${params.count || 5}`;
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


// `SELECT * FROM questions LEFT OUTER JOIN answers ON questions.question_id = answers.question_id WHERE questions.product_id = ${params.product_id} LIMIT ${params.count || 5}`