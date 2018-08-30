const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/api/articles"
router.route("/articles")
  .get(articleController.find)
  .post(articleController.insert)
// Matches with "/api/books/:id"
router
  .route("/articles/:id")
  .delete(articleController.delete);

module.exports = router;
