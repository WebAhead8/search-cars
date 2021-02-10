const fs = require('fs')
const path = require('path')
const db = require('../db/connection')

function searchEmployeHandler (request, response) {
  const params = new URLSearchParams(request.url.split('?')[1])
  const car = params.get('name')

  db.query('SELECT * FROM employes WHERE LOWER(carName) = $1', [car])
    .then(result => {
      response.writeHead(200, { 'content-type': 'application/json' })
      response.end(JSON.stringify(result.rows))
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

module.exports = searchEmployeHandler
