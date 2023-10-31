const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app); 
const request = require('postman-request');

const SERVER_HOST = process.env.SERVER_HOST || '0.0.0.0';
const SERVER_PORT = process.env.PORT || 8901;
const RESTRAUNT_SERVER_HOST = process.env.RESTRAUNT_HOSTNAME;
const RESTRAUNT_SERVER_PORT = process.env.RESTRAUNT_PORT;


server.listen(SERVER_PORT,SERVER_HOST, function () {
  console.info(`Server started at http://${SERVER_HOST}:${SERVER_PORT}`);
});

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hey, thanks for reaching me.'
  });
});

app.get('/city/:name', (req, res) => {
  const cityName = req.params.name;

  request.get(`http://${RESTRAUNT_SERVER_HOST}:${RESTRAUNT_SERVER_PORT}/restraunt/${cityName}`, function (err, response, body) {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    if (response.statusCode >= 200 && response.statusCode <= 299) {
      return res.status(200).json({
        name:  cityName,
        restraunts: body
      });
    }

    return res.status(400).json({
      message: 'Bad Request'
    });
  });
});