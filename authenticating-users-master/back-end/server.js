const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Setup express
const app = express();

// Setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Connect to mongoose database
mongoose.connect("mongodb://localhost:27017/pagliaccio", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['secretValue'],
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

const users = require("./users.js");
app.use("/api/users", users.routes);

// Listen
app.listen(3000, () => console.log("Server is running on port 3000 :)"));
