const fs = require('fs')
const path = require('path')
const db = require('../db/connection')

function searchHandler (request, response) {
  const params = new URLSearchParams(request.url.split('?')[1])
  const car = params.get('name')

  db.query(`SELECT * FROM cars WHERE LOWER(carName) LIKE $1 || '%'`, [car])
    .then(result => {
      response.writeHead(200, { 'content-type': 'application/json' })
      let carsArray = result.rows.filter(cars => {
        return cars.carname
      })
      carsArray = [...new Set(carsArray)]

      response.end(JSON.stringify(carsArray))
    })
    .catch(error => {
      console.log('error', error.message)
      response.writeHead(
        404,
        { encoding: 'utf-8' },
        { 'content-type': 'text/html' }
      )
      response.end('<h1> error </h1>')
    })
}

module.exports = searchHandler
