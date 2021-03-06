const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes.json');
const { exec } = require('child_process')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets', express.static(__dirname + '/assets'));

app.use('/webhook', (req, res) => {
	const body = req.body

	if(body.event == 'post_publish') {
		return exec('mkdir /tmp/kombuchakom && shipit production deploy', () => {
			console.log(arguments)
		})
	}

	req.next()
})

app.use('/', (req, res) => {
  const file = routes[req.path].file

  res.sendFile(path.resolve(`${process.cwd()}/${file}`))

});

app.listen('2107', () => {
  console.log('Server listening to 2107')
})
