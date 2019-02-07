const db = require('../models');

module.exports = function (app) {

  // GET route: retrieving db items
  app.get('/api/user/:id', function (req, res) {
    db.User.find({
        _id: req.params.id
    })
    .then( function (dbUser) {
      res.send(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

    // GET route: retrieving db items
    app.get('/api/user', function (req, res) {
    db.User.find({})
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  // DELETE User from database
  app.delete('/api/user/:id', function (req, res) { 
    console.log('---deleting user---');
    db.User.findByIdAndDelete({_id: req.params.id}).then(function(dbUser) {
      res.send(dbUser);
    });
  });
}