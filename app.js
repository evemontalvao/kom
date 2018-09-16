const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets', express.static(__dirname + '/assets'));

app.use('/', (req, res) => {
  const file = routes[req.path].file

  res.sendFile(path.resolve(`${process.cwd()}/_site/${file}`))
});

app.listen('2107', () => {
  console.log('Server listening to 2107')
})
