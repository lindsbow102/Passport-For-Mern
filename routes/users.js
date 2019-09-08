const express = require("express");
const router = express.Router();
const passport = require("../passport");

//passport.authenticate('local-signup', () => {

//})

// POST users listing
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/home',
    session: false
}));

router.post('/signin', passport.authenticate('local-signin', () => {
    
}));

module.exports = router;