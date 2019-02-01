const db = require('../models');

module.exports = function (app) {

    app.get('/api/logout', (req, res, next) => {
        // Get the token
        const { query } = req;
        const { token } = query;
        // ?token=test
        // Verify the token is one of a kind and it's not deleted.
        db.UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, {
                $set: { isDeleted: true }
            }, null, (err, sessions) => {
                if (err) {
                    return res.send({ success: false, message: 'Error: Server error' });
                }
                else {
                    return res.send({ success: true, message: 'Good' });
                }
            });
    });
}