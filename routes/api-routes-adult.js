const db = require('../models');

module.exports = function (app) {

  // GET route for retrieving items from database. 
  app.get('/api/adult', function (req, res) { //Works
    db.Adult.find({})
      .then(function (dbAdult) {
        res.json(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // POST route to create new entry in database.
  app.post('/api/adult', function (req, res) { //Works
    console.log('--->Adding Link in mongo--->');
    db.Adult.create(req.body)
      .then(function (dbAdult) {
        res.json(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // PUT route for updating adult details. 
  app.put('/api/adult/:id', function (req, res) { //Works
    console.log('----> updating <----');
    db.Adult.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
      db.Adult.findOne({_id: req.params.id})
      .then(function(dbAdult){
        res.send(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
    })
  });

  // DELETE adult from database
  app.delete('/api/adult/:id', function (req, res) { //works
    console.log('---deleting---');
    db.Adult.findByIdAndDelete({_id: req.params.id}).then(function(dbAdult) {
      res.send(dbAdult);
    });
  });
}