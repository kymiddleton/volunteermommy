const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    // message: "You're authorized to see this secret message.",
    message: "Finish account set up in the Volunteers section.",
    // user values passed through from auth middleware
    user: req.user
  });
});

module.exports = router;