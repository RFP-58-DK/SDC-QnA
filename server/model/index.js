const db = require('../db');

const getQuestions = (callback) => {
  db.query('SELECT * FROM questions LIMIT 10',  (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}

const getAnswers = (callback) => {
  db.query('SELECT * FROM answers LIMIT 10', (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}

const getPhotos = (callback) => {
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