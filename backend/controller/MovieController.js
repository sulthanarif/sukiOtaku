'use strict'
/**
 * Class Declaration
 * Write Static Method
 * Add Model to Controller
 * Module Export Class
 */
// class declaration 
const {Movie} = require('../model/Movie');
class MovieController {
    // static method get all movies
    static findAllMovies(req, res) {
        Movie.getAllMovies((err, data) => {
                if (err) {
                    console.log(`error: ${err}`);
                } else {
                    res.json({
                        title: 'Movie List',
                        collection: 'collection',
                        data 
                    });
                };
            }
        )
    };

    // static method get movie by id
    static findMovieById(req, res) {
        let id = req.params.id;
        Movie.getMovieById(id, (err, data) => {
                if (err) {
                    console.log(`error: ${err}`);
                } else {
                    res.json({
                        title: 'Movie Detail',
                        collection: 'collection',
                        data
                    });
                };
            }    
        )
    };

    // static method create movie
    static postMovie(req, res) {
        let payload = req.body;
        Movie.createMovie(payload, (err, data) => {
                if (err) {
                    console.log(`error: ${err}`);
                } else {
                    res.json({
                        title: 'Movie Created',
                        collection: 'collection',
                        data
                    });
                };
            }
        )
    };
    
    // static method update movie
    static amendMovie(req, res) {
        let payload = req.body;
        let id = req.params.id;


        Movie.updateMovie(id,payload, (err, data) => {
                if (err) {
                    console.log(`error:`, err);
                } else {
                    res.json({
                        title: 'Movie Updated',
                        collection: 'updated colection', 
                        data
                    });
                };
            }
        )
    };

    // static method delete movie
    static deleteMovie(req, res) {
        let id = req.params.id;
        Movie.removeMovie(id, (err, data) => {
                if (err) {
                    console.log(`error:`, err);
                } else {
                    res.json({
                        title: 'Movie Deleted',
                        collection: 'deleted colection', 
                        data
                    });
                };
            }
        )
    }
};


   


    module.exports = {
        MovieController
    };