var path = require("path");
var fs = require("fs");
var notesData = require("../db/db.json");

//Routing

module.exports = function(app){
app.get('/api/notes', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    
    // respond with: response.send()

});

app.post('/api/notes', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    
    // respond with: response.send()

});

app.delete('/api/notes/:id', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    
    // respond with: response.send()

});


}