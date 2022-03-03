const { Schema } = mongoose;

const questions = new Schema({
  product_id: Number,
  results: [{
    question_id: Number,
    question_body: String,
    question_date: String,
    asker_name: String,
    question_helpfulness: Number,
    question_reported: Boolean,
    answers: {
      answer_id: Number,
      answer_body: String,
      answer_date: String,
      answerer_name: String,
      answer_helpfulness: Number,
      photos: {
        photo_id: Number,
        photo_url: String,
      },
    },
  }],
});

const answers = new Schema({
  question_id: Number,
  page: Number,
  count: String,
  results: [{
    answer_id: Number,
    answer_body: String,
    answer_date: String,
    answerer_name: String,
    answer_helpfulness: Number,
    photos: {
      photo_id: Number,
      photo_url: String,
    },
  }],
});
