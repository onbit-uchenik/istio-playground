const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app); 

const SERVER_HOST = process.env.SERVER_HOST || '0.0.0.0';
const SERVER_PORT = process.env.PORT || 8901;


server.listen(SERVER_PORT,SERVER_HOST, function () {
  console.info(`Server started at http://${SERVER_HOST}:${SERVER_PORT}`);
});

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hey, thanks for reaching me.'
  });
});

app.get('/restraunt/:cityName', (req, res) => {
  const cityName = req.params.cityName

  return res.status(200).json({
    message: `So sad there are no restraunts in city ${cityName}`
  });
});