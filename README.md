# simpleNoteApp-restfulApi
## Built With

* [NodeJS](https://nodejs.org/en/docs/)
* [ExpressJS](https://expressjs.com/en/starter/installing.html)
* [CORS](https://expressjs.com/en/resources/middleware/cors.html)
* [BodyParser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [MySQL](https://expressjs.com/en/guide/database-integration.html#mysql)

### Configuration Environment Variables
* Make .env file on this project
* Open .env file and copy paste this code below
``` bash
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = 
DB_NAME = simplenote
PORT = 3000
```

1. Install Dependencies
``` bash
npm install
npm install --save express mysql body-parser
npm install -g daemon
npm install --save cors
npm install dotenv --save
```

``` bash
2. Run Server
nodemon server.js
```
