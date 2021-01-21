const express = require('express');
const bodyParser = require('body-parser')
const GradeAPI = require('./gradeAPI');
const path = require("path");

require('dotenv').config()
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get(`/api/getAdmissionData`, (req, res) => {
  let gradesList = [];
  GradeAPI.GradeAPI.grades.map(grade =>{
    gradesList.push(grade.category);
  })

  res.status(200).send(JSON.stringify(gradesList));
});

app.get(`/api/getGradeDetails/:grade`, (req, res) => {
  const gradeName = req.params.grade;
  let gradesList = [];
  GradeAPI.GradeAPI.grades.map(grade =>{
    if(grade.category === gradeName) {
      gradesList = grade.options;
    }
  });
  res.status(200).send(JSON.stringify(gradesList));
});

//Required for Build
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = 3001;
app.listen(port);

console.log(`Up and listening on ${port}`);
