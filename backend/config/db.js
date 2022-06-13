'use strict'

/**
 * mysql dan db config
 * membuat koneksi
 * membuat mysql koneksi
 **/

const mysql = require('mysql');

const DBConfig = require('./db.config');

const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB 
})

connectDB.connect((err)=>{
    if(err) throw err;
    console.log('connected to database');
})

module.exports = connectDB; 