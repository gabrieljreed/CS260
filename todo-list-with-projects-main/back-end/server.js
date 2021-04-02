const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Create a schema for projects
const projectSchema = new mongoose.Schema({
    name: String,
    color: String
});

// Create a model for projects
const Project = mongoose.model('Project', projectSchema);

const itemSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project'
    },
    text: String,
    completed: Boolean,
});

const Item = mongoose.model('Item',itemSchema);


// Create a project
app.post('/api/projects', async(req, res) => {
    const project = new Project({
        name: req.body.name,
        color: req.body.color
    });
    try {
        await project.save();
        res.send(project);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/api/projects", async(req, res) => {
    try {
        let projects = await Project.find();
        res.send(projects);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/projects/:projectID/items', async (req, res) => {
    try {
        let project = await Project.findOne({_id: req.params.projectID});
        if (!project) {
            res.sendStatus(404);
            return;
        }
        let item = new Item({
            project: project,
            text: req.body.text,
            completed: req.body.completed,
        });
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of items
app.get("/api/projects/:projectID/items", async(req, res) => {
    try {
        let project = await Project.findOne({_id: req.params.projectID});
        if (!project) {
            res.sendStatus(404);
            return;
        }
        let items = await Item.find({project: project});
        res.send(items);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Update an item
app.put("/api/projects/:projectID/items/:itemID", async(req, res) => {
    try {
        let item = await Item.findOne({_id:req.params.itemID, project: req.params.projectID});
        if(!item) {
            res.sendStatus(404);
            return;
        }

        item.text = req.body.text;
        item.completed = req.body.completed;
        await item.save();
        res.send(item);
    } catch(error) {
        console.log(error);
        res.send(500);
    }
});

// Delete an item
app.put("/api/projects/:projectID/items/:itemID", async(req, res) => {
    try {
        let item = await Item.findOne({_id:req.params.itemID, project: req.params.projectID});
        if(!item) {
            res.sendStatus(404);
            return;
        }

        await item.delete();
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});


app.listen(3000, () => console.log('Server listening on port 3000 ;)'));