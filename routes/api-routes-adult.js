const db = require('../models');

module.exports = function (app) {

  // GET route for retrieving items from database. 
  app.get('/api/adult', function (req, res) {
    db.Adult.find({})
      .then(function (dbAdult) {
        res.json(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // POST route to create new entry in database.
  app.post('/api/adult', function (req, res) {
    db.Adult.create(req.body)
      .then(function (dbAdult) {
        res.json(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // PUT route for updating adult details. 
  app.put('/api/adult', function (req, res) {
    db.Adult.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          firstName: req.body.firstName,
          middleInitial: req.body.middleInitial,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber, //number
          children: req.body.children //array
        }
      })
      .then(function (dbAdult) {
        res.json(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // DELETE adult from database
  app.delete('/api/adult/:adult_id', function (req, res) {
    db.Adult.findByIdAndRemove(req.params.adult_id, function (err, adult) {
      if (err) return res.status(500).send(err);
      // We'll create a simple object to send back with a message and the id of the document that was removed
      const response = {
        message: "Link successfully deleted",
        id: adult._id
      };
      return res.status(200).send(response);
    });
  });

}