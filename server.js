// server.js
const express  = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

var dburl = require('./config/database');
const assert = require('assert');

const app   = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


MongoClient.connect(dburl.url, (err, client) => {
    assert.equal(null, err);
    if (err) return console.log(err)

    // Call db name 
    const db = client.db('santour');
    //client.close();
    console.log("Connected successfully to database");
    require('./app/routes')(app, db);
    app.listen(port, function(){
        console.log("Server is listening on port "+port);
    });
})





