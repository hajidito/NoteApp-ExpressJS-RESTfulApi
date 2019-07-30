<h1 align='center'>NoteApp-ExpressJS-RESTfulApi</h1>

<p align='center'>
  <a href='https://nodejs.org/en/'>
  <img src='https://kreitech.io/blog/wp-content/uploads/2018/10/1_-NOQtyJAGQ1RNC3iVt_thA.png' />
  </a>
</p>

<br>
<br>

## Introduction
[![Node.js](https://img.shields.io/badge/Node.js-v.12.7.0-green.svg?style=rounded-square)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-^4.17.1-blue.svg?style=rounded-square)](http://expressjs.com/)

Here is my new repository which builded with NodeJS and ExpressJS Framework for making the backend side and API for application [NoteApp-ReactNative-Redux](https://github.com/hajidito/NoteApp-ReactNative-Redux) .

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
