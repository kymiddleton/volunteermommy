// const db = require('../models');

// module.exports = function (app) {

//     app.post('/api/signin', (req, res, next) => {
//         console.log("in sign in ")
//         const { body } = req;
//         const { password } = body;
//         let { email } = body;

//         console.log("in sign in")

//         if (!email) {
//             return res.send({ success: false, message: 'Error: Email cannot be blank.' });
//         }
//         if (!password) {
//             return res.send({ success: false, message: 'Error: Password cannot be blank.' });
//         }

//         email = email.toLowerCase();
//         email = email.trim();

//         db.User.find({ email: email }, (err, users) => {
//             if (err) {
//                 console.log('err 2:', err);
//                 return res.send({ success: false, message: 'Error: server error' });
//             }
//             if (users.length != 1) {
//                 return res.send({ success: false, message: 'Error: Invalid' });
//             }

//             const user = users[0];
//             if (!user.validPassword(password)) {
//                 return res.send({ success: false, message: 'Error: Invalid' });
//             }

//             // Otherwise correct user
//             const userSession = new UserSession();
//             userSession.userId = user._id;
//             userSession.save((err, doc) => {
//                 if (err) {
//                     return res.send({ success: false, message: 'Error: server error' });
//                 }
//                 return res.send({
//                     success: true,
//                     message: 'Valid sign in',
//                     token: doc._id
//                 });
//             });
//         });
//     });

//     app.get('/api/signin/verify', (req, res, next) => {
//         // Get the token
//         const { query } = req;
//         const { token } = query;
//         // ?token=test
//         // Verify the token is one of a kind and it's not deleted.
//         db.UserSession.find({
//             _id: token,
//             isDeleted: false
//         }, (err, sessions) => {
//             if (err) {
//                 console.log(err);
//                 return res.send({ success: false, message: 'Error: Server error' });
//             }
//             if (sessions.length != 1) {
//                 return res.send({ success: false, message: 'Error: Invalid' });
//             }
//             else {
//                 return res.send({ success: true, message: 'Good' });
//             }
//         });
//     });
    
// }