const db = require('../db');

const getQuestions = (params, callback) => {

  const queryStr = `
  SELECT
    q.question_id,
    q.question_body,
    q.question_date,
    q.asker_name,
    q.question_helpfulness,
    q.question_reported AS reported,
    json_object_agg(
      a.answer_id,
      json_build_object(
        'id', a.answer_id,
        'body', a.answer_body,
        'date', a.answer_date,
        'answerer_name', a.answerer_name,
        'helpfulness', a.answer_helpfulness,
        'photos', (
          SELECT
            json_agg(
              json_build_object(
                'id', p.photo_id,
                'url', p.photo_url
              )
            )
          FROM photos AS p
          WHERE p.answer_id = a.answer_id
        )
      )
    ) AS answers
  FROM questions AS q
  JOIN answers AS a
  ON q.question_id = a.question_id
  WHERE q.product_id = ${params.product_id}
    AND a.answer_id IS NOT NULL
  GROUP BY q.question_id
  LIMIT ${params.count || 5}`;

  db.query(queryStr,  (err, results) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}

const getAnswers = (params, callback) => {
  const queryStr = `
  SELECT
    a.answer_id,
    a.answer_body AS body,
    a.answer_date AS date,
    a.answerer_name,
    a.answer_helpfulness AS helpfulness,
    (
      SELECT
        json_agg(
          json_build_object(
            'id', p.photo_id,
            'url', p.photo_url
          )
        )
      FROM photos AS p
      WHERE p.answer_id = a.answer_id
    ) AS photos
  FROM answers AS a
  WHERE a.question_id = ${params.question_id}
  LIMIT ${params.count || 5}`;
  db.query(queryStr, (err, results) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}


module.exports = {
  getQuestions,
  getAnswers
}