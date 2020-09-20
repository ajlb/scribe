const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'db')));
app.use(express.static(path.join(__dirname, 'routes')));

//routes
// api routes
require("./routes/apiRoutes")(app);
// html routes
require("./routes/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});