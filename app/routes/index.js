
const itineraries = require ('./itineraries-routes.js');

module.exports = function(app, db) {
    itineraries(app, db);
};