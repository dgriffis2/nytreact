const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  url: { type: String, required: true },
});

const Article = mongoose.model("Article", artSchema);

module.exports = Article;
