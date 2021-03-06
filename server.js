/**
 * Created by odyssefs on 10/3/15.
 */
// Run with the shell command "node server.js".
// Run in the background with "node server.js &".
// (first install Express with the command "npm install express")
// (first install Node.js, see https://github.com/joyent/node/wiki/Installation
var express = require('./config/express'),
    mongoose = require('./config/mongoose');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express();


console.log('Now serving http://localhost:8000');
