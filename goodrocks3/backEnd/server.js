const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/goodrocks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser);

const cookieSession = require("cookie-session");
app.use(cookieSession({
    name: 'session',
    keys: ['secretValue'],
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

const listSchema = new mongoose.Schema({
    name: String,
    ranking: Number,
});

const List = mongoose.model('List', listSchema);

// Create a new list
app.post("/api/lists", async(req, res) => {
    const list = new List({
        name: req.body.name,
        ranking: req.body.number
    });
    try {
        await list.save();
        res.send(list);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get all lists
app.get("/api/lists", async(req, res) => {
    try {
        let lists = await List.find();
        res.send(lists);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// Schema for rocks
const rockSchema = new mongoose.Schema({
    list: {
        type: mongoose.Schema.ObjectId,
        ref: 'List'
    },
    mountain_name: String,
    mountain_height: String,
    id: String,
    explorer_name: String,
    date_discovered: String,
    details: String,
    latitude: Number,
    longitude: Number
});

const Rock = mongoose.model('Rock', rockSchema);

// Adding a mountain to a list
app.post("/api/lists/:listID/rocks", async(req, res) => {
    debugger
    try {
        let list = await List.findOne({_id: req.params.listID});
        if(!list) {
            console.log("Error - not found");
            res.sendStatus(404);
            return;
        }
        let rock = new Rock({
            list: list,
            mountain_name: req.body.mountain_name,
            mountain_height: req.body.mountain_height,
            id: req.body.id,
            explorer_name: req.body.explorer_name,
            date_discovered: req.body.date_discovered,
            details: req.body.details,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });
        await rock.save();
        res.send(rock);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Getting a list of mountains
app.get("/api/lists/:listID/rocks", async(req, res) => {
    try {
        let list = await List.findOne({_id: req.params.listID});
        if(!list) {
            res.sendStatus(404);
            return;
        }
        let rocks = await Rock.find({list: list});
        res.send(rocks);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Removing a mountain from a list
app.delete("/api/lists/:listID/rocks/:rockID", async(req, res) => {
    try {
        let rock = await Rock.findOne({_id: ObjectId(req.params.rockID), list: req.params.listID});
        if(!rock) {
            res.sendStatus(404);
            return;
        }

        await rock.delete();
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});



const users = require("./users.js");
app.use("/api/users", users.routes);




app.listen(3003, () => console.log('Server listening on port 3003 ;)'));
