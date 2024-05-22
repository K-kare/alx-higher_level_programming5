#!/usr/bin/node
//prints the title of a Star Wars movie

const request = require('request');
const URL = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request.get(URL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const work = JSON.parse(body);
    console.log(work.title);
  }
});
