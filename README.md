# basic-api-server

A basic API server to be hosted on Heroku. Uses PostGres DB to store two schemas of data.

This one has games (title and release year) and people (names and year of birth).

## Installation

to install run `git clone git@github.com:ryanyinlee/basic-api-server.git`

`cd` basic-api-server

run `npm init -y`

`npm i dotenv express jest lint node pg router routes sequelize sequelize-cli sqlite3 supertest`


## Usage

`npm start` to run server

`npm test` to test server in terminal

## Routes

CRUD is identical for games and people.

router.get('/game', read)
router.get('/game/:id', read)
router.post('/game', create)
router.patch('/game/:id', update)
router.delete('/game/:id', remove)
router.delete('/removeallgames', removeallgames) // for testing only modify the 92 to delete the IDs. 

I'll eventually get the logic do delete anything on the DB, but it's not necessary now.

## Current Deploys/GitHub Repository

GitHubRepository

https://github.com/ryanyinlee/express-server-deployment


Dev Branch:

https://ryanlee-server-deploy-dev.herokuapp.com/

Main/Production:

https://ryanlee-server-deploy-prod.herokuapp.com/


## 1/10/21 Pull Request

https://github.com/ryanyinlee/express-server-deployment/pull/3