require('dotenv/config')

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

//cors
//chrome extension for postman
const whitelist = ['chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop',
'http://192.168.100.49',
'http://192.168.100.24', 
'http://192.168.100.82']

let corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
}

app.use(cors(corsOptions));

//middleware for show information about user who request to this server 
const logger = function(req, res, next){
    console.log('==============================')
    console.log('Request URL:', req.originalUrl)
    console.log("Request type: " + req.method)
    console.log("Request device: " + req.get('User-Agent'))
    console.log("Request time: " + new Date())
    console.log('==============================')
    next()
}

app.use(logger)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('Simple Note APP, RESTful API server started on: ' + port);
