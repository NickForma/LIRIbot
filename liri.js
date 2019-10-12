let dotenv = require("dotenv").config();
let inquirer = require("inquirer");
//var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// let key = process.env;

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What's your name?"
  },
  {
    type: "list",
    name: "search",
    message: "What do you want to search for?",
    choices: ["concert", "song", "movie"]
  }
]).then((user)=> {
    console.log(user.name)
    console.log(user.search)
});
