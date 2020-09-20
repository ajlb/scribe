var path = require("path");

//Routing

module.exports = function(app){

app.get('/notes', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    
    // respond with: response.send()
    response.sendFile(path.join(__dirname, "../public/notes.html"));
});

//anything other than notes gets served the index page
app.get('*', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    
    // respond with: response.send()
    response.sendFile(path.join(__dirname, "../public/index.html"));

});

}

