let dotenv = require("dotenv").config();
let inquirer = require("inquirer");
var keys = require("./keys.js");
// let Spotify = require("node-spotify-api");
let fs = require("fs");
let Search = require("./search");
let search = new Search();

// var spotify = new Spotify(keys.spotify);

let key = process.env;

let readFromFile = function() {
  fs.readFile("./random.txt", "utf8", (err, file) => {
    if (err) throw err;

    let entry = file.replace(`"`, "").split(",");
    let type = entry[0];
    let query = entry[1];

    switch (type) {
      case "spotify-this-song":
        search.spotify(query, searchPrompt);
        break;
      case "concert-this":
        search.concert(query, searchPrompt);
        break;
      case "movie-this":
        search.omdb(query, searchPrompt);
        break;
      case "random":
        readFromFile();
        break;
      default:
        break;
    }
  });
};

let searchPrompt = function() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's your name?"
      },
      {
        type: "list",
        name: "search",
        message: "What do you want to search for?",
        choices: ["Concert", "Song", "Movie", "Random", "Exit"]
      },
      {
        type: "input",
        name: "query",
        message: "Name that thing!"
      }
      // {
      //   when: function(answers) {
      //     if (answers.search === "Exit") {
      //       return false;
      //     }
      //   }
      // },
    ])
    .then(user => {
      console.log(`Hello ${user.name}, Let's find you a ${user.search}`);
      switch (user.search) {
        case "Concert":
          search.concert(user.query, searchPrompt);
          break;
        case "Song":
          search.spotify(user.query, searchPrompt);
          break;
        case "Movie":
          search.omdb(user.query, searchPrompt);
          break;
        case "Random":
          readFromFile(searchPrompt);
          break;
        case "Exit":
          process.exit();
          break;
        default:
          break;
      }
    });
};

searchPrompt();
