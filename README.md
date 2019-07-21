# NoteApp-ExpressJS-RESTfulApi

## Built With

* [NodeJS](https://nodejs.org/en/docs/)
* [ExpressJS](https://expressjs.com/en/starter/installing.html)
* [CORS](https://expressjs.com/en/resources/middleware/cors.html)
* [BodyParser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [MySQL](https://expressjs.com/en/guide/database-integration.html#mysql)

### Create Database
* Import Database  [simplenote](https://github.com/hajidito/NoteApp-ExpressJS-RESTfulApi/tree/master/database) into your MySQL

### Configuration Environment Variables
* Make .env file on this project
* Open .env file and copy paste this code below
``` bash
DB_HOST = yourDBHOST
DB_USER = yourDBUSER
DB_PASSWORD = yourDBPASSWORD
DB_NAME = simplenote
PORT = 3000
```

### 1. Install Dependencies
``` bash
npm install
```

### 2. Run Server
``` bash
nodemon server.js
```
