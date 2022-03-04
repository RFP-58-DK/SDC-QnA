\c qna

COPY questions(question_id, product_id, question_body, question_date, asker_name, asker_email, question_helpfulness, question_reported)
FROM '/Users/kunhanwu/SDC-CSV/questions.csv'
DELIMITER ','
CSV HEADER;


COPY answers(answer_id, question_id, answer_body, answer_date, answerer_name, answerer_email, answer_helpfulness, answer_reported)
FROM '/Users/kunhanwu/SDC-CSV/answers.csv'
DELIMITER ','
CSV HEADER;

COPY photos(photo_id, answer_id, photo_url)
FROM '/Users/kunhanwu/SDC-CSV/answers_photos.csv'
DELIMITER ','
CSV HEADER;