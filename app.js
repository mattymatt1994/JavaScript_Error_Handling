// TODO: Enable strict mode
"use strict";

// TODO: Fix the following parameter list

function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  try{
    return JSON.parse(data);
  } catch (error){
    console.error(error);
    return null;
  }
  
  
  // TODO: if an exception is raised
  // print the error to the console
  // and return null
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
