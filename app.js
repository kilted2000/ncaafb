const express = require('express');
const http = require('https');
const bodyParser = require('body-parser');
const port = 3000
const app = express();

app.use(bodyParser.json());
app.use(express.json());

const options = {
	method: 'GET',
	hostname: 'api-american-football.p.rapidapi.com',
	port: null,
	path: '/teams?name=Ole%20Miss&league=2&season=2023',
	headers: {
		'x-rapidapi-key': '16fb6a9dbamsh1bd07dcaf5b3922p192b90jsn3c66bc34a58f',
		'x-rapidapi-host': 'api-american-football.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })