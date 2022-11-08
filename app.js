// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

app.get('/albums', (request, response, next) => response.sendFile(__dirname + '/views/albums.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
