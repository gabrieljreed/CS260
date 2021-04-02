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



app.listen(3000, () => console.log('Server listening on port 3000 ;)'));
