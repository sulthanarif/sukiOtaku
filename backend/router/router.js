// use strict
'use strict'

const express = require('express');
const {Controller} = require('../controller/Controller');
const router = express.Router();    // create router

// controller


// endpoints
router.get('/', Controller.getAll);

module.exports = {router};