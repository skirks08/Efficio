const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = [];

// Fetch tasks

app.get('/tasks', (req, res) => {
    res.json(tasks);
});