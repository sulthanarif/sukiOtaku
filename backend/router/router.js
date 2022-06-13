// use strict
'use strict'

const express = require('express');
// controller
const {Controller} = require('../controller/Controller');
const {MovieRouter} = require(`./MovieRouter`);
const router = express.Router();    // create router





// endpoints
router.get('/', Controller.homePage);

// router use
router.use('/movies', MovieRouter);

module.exports = {router};