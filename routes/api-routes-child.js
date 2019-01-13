const db = require('../models');

module.exports = function (app) {

  // GET route for retrieving items from database. 
  app.get('/api/child', function (req, res) {
    db.Child.find({})
      .then(function (dbChild) {
        res.json(dbChild);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // POST route to create new entry in database.
  app.post('/api/child', function (req, res) {
    db.Child.create(req.body)
      .then(function (dbChild) {
        res.json(dbChild);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // PUT route for updating database. 
  app.put('/api/child', function (req, res) {
    db.Child.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          firstName: req.body.firstName,
          middleInitial: req.body.middleInitial,
          lastName: req.body.lastName,
          grade: req.body.grade, //array
          teacher: req.body.teacher, //number
          parent: req.body.parent //array
        }
      })
      .then(function (dbChild) {
        res.json(dbChild);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // DELETE item from database
  app.delete('/api/child/:child_id', function (req, res) {
    db.Child.findByIdAndRemove(req.params.child_id, function (err, child) {
      if (err) return res.status(500).send(err);
      // We'll create an object to send back with a message and id of the removed document.
      const response = {
        message: "Item successfully deleted",
        id: child._id
      };
      return res.status(200).send(response);
    });
  });

}