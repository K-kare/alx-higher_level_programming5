#!/usr/bin/node
// computes the number of tasks completed by user id.

const request = require('request');

request.get(process.argv[2], { json: true }, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const workCompleted = {};
  body.forEach((todo) => {
    if (todo.completed) {
      if (!workCompleted[todo.userId]) {
        workCompleted[todo.userId] = 1;
      } else {
        workCompleted[todo.userId] += 1;
      }
    }
  });
  console.log(workCompleted);
});
