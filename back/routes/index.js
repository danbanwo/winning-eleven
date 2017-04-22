const router = require('express').Router();

// import all API defined endpoints here:
router.use('user', require('./user-routes'));

module.exports = router;
