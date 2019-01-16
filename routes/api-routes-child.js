const db = require('../models');

module.exports = function (app) {

    // GET route: retrieving db items
    app.get('/api/child', function (req, res) { //Works
        db.Child.find({})
        .populate('Adult')
            .then(function (dbChild) {
                res.json(dbChild);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST route: create new db entry
    app.post('/api/child', function (req, res) {  //Works
        console.log('--->Adding child in mongo--->');
        db.Child.create(req.body)
            .then(function (dbChild) {
                res.json(dbChild);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // PUT route: updating db items
    app.put('/api/child/:id', function (req, res) { //Works
        console.log('----> updating child <----');
        db.Child.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
            db.Child.findOne({ _id: req.params.id })
            .then(function (dbChild) {
                res.send(dbChild);
            })
            .catch(function (err) {
                res.json(err);
            });
        })
    });

    // DELETE db item
    app.delete('/api/child/:id', function (req, res) {  //Works
        console.log('---deleting child---');
        db.Child.findByIdAndDelete({_id: req.params.id}).then(function(dbChild) {
            res.send(dbChild);
        });
    });
}