const db = require("../models");

module.exports = {
    find: function(req, res) {
        console.log("Gathering saved articles from the db");
        db.Article.find({}).then(function(doc) {
          res.json(doc);
        }).catch(function(err) {
          res.json(err);
        });
      },
      // this method handles adding new articles to the db
      insert: function(req, res) {
        console.log("Adding saved artice to the db");
        console.log("req.body: ", req.body);
        db.Article.create(req.body).then(function(doc) {
          res.json(doc);
          console.log("doc: ", doc);
        }).catch(function(err) {
          res.json(err);
        });
      },
      // this method handles deleting articles from the db
      delete: function(req, res) {
        console.log("Deleting a saved article from the db");
        db.Article.findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    
      }
};
