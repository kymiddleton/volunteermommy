const Note = require('../models/Note');

module.exports = function (app) {

  app.get('/api/notes', function (req, res) {
    Note.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/notes', function (req, res) {
    Note.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}