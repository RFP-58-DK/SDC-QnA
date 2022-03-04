DROP DATABASE IF EXISTS qna;

CREATE DATABASE qna;

\c qna

CREATE TABLE questions (
 question_id SERIAL,
 product_id SERIAL,
 question_body VARCHAR(300) NOT NULL,
 question_date VARCHAR(300) NOT NULL,
 asker_name VARCHAR(300) NOT NULL,
 asker_email VARCHAR(300) NOT NULL,
 question_helpfulness INTEGER,
 question_reported INTEGER
);

ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (question_id);

CREATE TABLE answers (
 answer_id SERIAL,
 question_id SERIAL,
 answer_body VARCHAR(300) NOT NULL,
 answer_date VARCHAR(300) NOT NULL,
 answerer_name VARCHAR(300) NOT NULL,
 answerer_email VARCHAR(300) NOT NULL,
 answer_helpfulness INTEGER,
 answer_reported INTEGER
);

ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (answer_id);

CREATE TABLE photos (
 photo_id SERIAL,
 answer_id SERIAL,
 photo_url VARCHAR(300) NOT NULL
);

ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (photo_id);

ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(question_id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(answer_id);
