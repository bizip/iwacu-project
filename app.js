const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

let adminRoutes = require("./routes/admin");
let shoproutes = require("./routes/shop");
let errorRoutes = require("./controller/error");
let port = 5000 || process.env;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(adminRoutes);
app.use(shoproutes);
app.use(errorRoutes.getError);

//the port to listern
app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("You made it pascal!!!!");
    }
});