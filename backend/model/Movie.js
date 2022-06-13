"use strict";
//  require db
const sql = require("../config/db");

class Movie {
  constructor(
    id,
    title,
    genre,
    year,
    rating,
    duration,
    synopsis,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
    this.duration = duration;
    this.synopsis = synopsis;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  // get all movies
  static getAllMovies(result) {
    let sqlQuery = `SELECT * FROM movies`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      // else
      else {
        let rawData = res;
        let movies = [];
        let movie;
        rawData.forEach((eachData) => {
          movie = new Movie(
            eachData.id,
            eachData.title,
            eachData.genre,
            eachData.year,
            eachData.rating,
            eachData.duration,
            eachData.synopsis,
            eachData.created_at,
            eachData.updated_at
          );
          movies.push(movie);
        });
        console.log("result: ", movies);
        result(null, movies);
      }
    });
  }

  // get movie by id
  static getMovieById(id, result) {
    let sqlQuery = `SELECT * FROM movies WHERE id = ${id}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      // else
      else {
        let rawData = res;
        let movies = [];
        let movie;
        rawData.forEach((eachData) => {
          movie = new Movie(
            eachData.id,
            eachData.title,
            eachData.genre,
            eachData.year,
            eachData.rating,
            eachData.duration,
            eachData.synopsis,
            eachData.created_at,
            eachData.updated_at
          );
          movies.push(movie);
        });
        console.log("result: ", movies);
        result(null, movies);
      }
    });
  }

  // create movie
  static createMovie(data, result) {
    let sqlQuery = `INSERT INTO movies SET ?`;
    sql.query(sqlQuery, data, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      // else
      else {
        console.log("result: ", res);
        result(null, res);
      }
    });
  }

  // update movie
  static updateMovie(id, data, result) {
    // call other variable
    let date = new Date();
    let updatePayload = data;
    updatePayload.update_at = date;

    let sqlQuery = `UPDATE movies SET ? WHERE id = ${id}`;
    sql.query(sqlQuery, updatePayload, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      // else
      else {
        console.log("result: ", res);
        result(null, res);
      }
    });
  }

  // delete movie
  static removeMovie(id, result) {
    let sqlQuery = `DELETE FROM movies WHERE id = ${id}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      // else
      else {
        console.log("result: ", res);
        result(null, res);
      }
    });
  }
}

module.exports = { Movie };
