const express = require('express')
//const User = require('../models/user')
const router = express.Router();

router.get('/', (req, res) =>{
    res.send({ok: true});
});

module.exports = app => app.use('/project', router);
