const express = require('express');
const app = express();

const port = process.env.PORT || 4000;
const path = require('path');
const fs = require('fs');

const filePath = path.resolve(__dirname, './build', 'index.html');

app.get('/', function(request, response) {
  console.log('Home')
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    response.send(data);
  })
});

app.get('/about', function(request, response) {
  console.log('About')
  fs.readFile(filePath, 'utf8', function(err,data) {
    if (err) {
      return console.log(err);
    }
    response.send(data);
  })
})

app.get('/contact', function(request, response) {
    console.log('Contact')
    fs.readFile(filePath, 'utf8', function(err,data) {
      if (err) {
        return console.log(err);
      }
      response.send(data);
    })
  })

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})