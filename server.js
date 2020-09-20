const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'db')));
app.use(express.static(path.join(__dirname, 'routes')));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});