require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require("node-spotify-api");
let axios = require("axios");
let moment = require("moment");

class Search {
  constructor(query) {
    this.query = query;
  };
};

//spotify
Search.prototype.spotify = function(query, cb) {
  let spotify = new Spotify(keys.spotify);
  if (query === ""){
      console.log("Enter a search item!");
      cb();
      return
  }
  spotify.search({
    type: "track",
    query: query
  },
  function(err, data){
    console.log(data)
  });
};

//omdb
Search.prototype.omdb = function(query, cb){
    console.clear();
    if (query === "") {
        query = "Mr. Nobody"
    };

    let key = keys.omdbKey.key;
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${query}`;

    axios.get(url)
        .then(response => {
            console.log(response)
        });
};

//concert
Search.prototype.concert = function(query, cb){
    console.clear();

    let url = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;

axios.get(url)
    .then(response => {
        console.log(response);
    })
}

module.exports = Search;