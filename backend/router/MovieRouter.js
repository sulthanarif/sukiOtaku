// use strict
'use strict'

// import express
const express = require('express');
// import router
const MovieRouter = express.Router();
// movie controller
const {MovieController} = require('../controller/MovieController');
// end point get all movies
MovieRouter.get('/', MovieController.findAllMovies);
// end point get movie by id
MovieRouter.get('/:id', MovieController.findMovieById);
// end point create movie
MovieRouter.post('/add', MovieController.postMovie);
// end point update movie
MovieRouter.put('/update/:id', MovieController.amendMovie);
// end point delete movie
MovieRouter.delete('/delete/:id', MovieController.deleteMovie);
// module export
module.exports = {MovieRouter};