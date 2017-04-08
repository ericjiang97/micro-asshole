const microApi = require('micro-api')
const fs = require('fs-promise')
var fileS = require('fs');

const handleNone = (() => 'You must use a valid request')

const handlePerson = async ({ params: { name }, res }) => {
  try {
    if(name.toLower() === "eric Jiang" ){
      return name + " is not an asshole"
    }
    return name + " is an asshole."
  } catch (err) {
    // Autos to 404
    return null
  }
}

const api = microApi([
  {
    method: 'get',
    path: '/',
    handler: handleNone
  },
  {
    method: 'get',
    path: '/:name',
    handler: handlePerson
  }
])

module.exports = api