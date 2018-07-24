var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    // calling the collection from the DB
    db.createCollection('itineraries');
    var collection = db.collection('itineraries');

    //get all location entries
    app.post('/itineraries/', (req, res) => {
        // try and catch error handling
        try {
            // put all results in array
            collection.find().toArray((err, result) => {

                // extra error handling
                if (err) {
                    res.status(500).send({'error': 'An error has occurred'});
                } else {
                    res.status(200).send(result);
                }
            });
        }
        catch (e)
        {
            console.log(e);
        }
    });




};