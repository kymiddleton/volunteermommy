const db = require('../models');

module.exports = function (app) {

  // GET route: retrieving db items
  app.get('/api/adult', function (req, res) { //Works
    db.Adult.find({})
    .populate('Child')
      .then(function (dbAdult) {
        res.json(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // POST route: create new db entry
  app.post('/api/adult', function (req, res) { //Works
    console.log('--->Adding Adult in mongo--->');
    db.Adult.create(req.body)
      .then(function (dbAdult) {
        console.log('haha')
        res.json(dbAdult);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //POST: Find Adults & Children route
  // app.post('/api/adult', function (req, res) { 
  //   console.log('--->Adding Adult in mongo--->');
  //   const adultId = req.body.adultId;
  //   const newChild = {
  //     name: req.body.name,
  //     grade: req.body.grade,
  //     teacher: req.body.teacher,
  //     parent: req.body.parent
  //   }
  //   db.Child.create(newChild)
  //     .then(function (childData) {
  //       return Adult.findOneAndUpdate({_id: adultId}, { $push: {children: childData._id } }, { new: true});
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });


  // PUT route for updating adult details. 
  app.put('/api/adult/:id', function (req, res) { //Works
    console.log('----> updating Adult <----');
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
    console.log('---deleting Adult---');
    db.Adult.findByIdAndDelete({_id: req.params.id}).then(function(dbAdult) {
      res.send(dbAdult);
    });
  });
}