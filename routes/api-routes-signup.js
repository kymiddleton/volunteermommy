const db = require('../models');

module.exports = function (app) {

    app.post('/api/signup', function (req, res, next) {
        const { body } = req;
        console.log('body', body);
        const { firstName, lastName, password } = body;
        let { email } = body;

        if (!firstName) {
            return res.send({ success: false, message: 'Error: First name cannot be blank.' });
        }
        if (!lastName) {
            return res.send({ success: false, message: 'Error: Last name cannot be blank.' });
        }
        if (!email) {
            return res.send({ success: false, message: 'Error: Email cannot be blank.' });
        }
        if (!password) {
            return res.send({ success: false, message: 'Error: Password cannot be blank.' });
        }

        email = email.toLowerCase();
        console.log("email: " + email + " firstName: " + firstName + " lastName: " + lastName + " pwd: " + password);

        // Verify email does NOT exist, then save
        db.User.findOne({ email: email }, (err, previousUsers) => {
            if (err) {
                console.log("Error");
                return res.send({ success: false, message: 'Error: Server error' });

            } else if (previousUsers.length > 0) {
                console.log(previousUsers);
                return res.send({ success: false, message: 'Error: Account already exist.' });
            }

            // Save NEW user
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({ success: false, message: 'Error: Server error' });
                }
                return res.send({ success: true, message: 'Signed up' });
            });
        }); // end of sign up end point
    });
}