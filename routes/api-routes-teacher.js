const db = require('../models');

module.exports = function (app) {

  // GET route: retrieving db items
  app.get('/api/teacher', function (req, res) { //works
    db.Teacher.find({})
      .then(function (dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // POST route: create new db entry
  app.post('/api/teacher', function (req, res) {  //works
    console.log('--->Adding Teacher in mongo--->');
    db.Teacher.create(req.body)
      .then(function (dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // PUT route for updating database. 
  app.put('/api/teacher/:id', function (req, res) { //works
    console.log('----> updating Teacher <----');
    db.Teacher.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
      db.Teacher.findOne({ _id: req.params.id })
        .then(function (dbTeacher) {
          res.send(dbTeacher);
        })
        .catch(function (err) {
          res.json(err);
        });
    })
  });

  // DELETE item from database
  app.delete('/api/teacher/:id', function (req, res) { //works
    console.log('---deleting teacher---');
    db.Teacher.findByIdAndDelete({_id: req.params.id}).then(function(dbTeacher) {
      res.send(dbTeacher);
    });
  });

}