require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require("node-spotify-api");
let axios = require("axios");
let moment = require("moment");

class Search {
  constructor(query) {
    this.query = query;
  }
}

//spotify
Search.prototype.spotify = function(query, cb) {
  let spotify = new Spotify(keys.spotify);
  if (query === "") {
    query = "The Sign";
  }
  spotify.search(
    {
      type: "track",
      query: query
    },
    function(err, data) {
      if (err) throw err;

      console.log("artist: " + data.tracks.items[0].artists[0].name);
      console.log("title: " + data.tracks.items[0].name);
      console.log("preview url: " + data.tracks.items[0].preview_url);
      console.log("album name: " + data.tracks.items[0].album.name);

      cb();
    }
  );
};

//omdb
Search.prototype.omdb = function(query, cb) {
  console.clear();
  if (query === "") {
    query = "Mr. Nobody";
  }

  let key = keys.omdbKey.key;
  let url = `http://www.omdbapi.com/?apikey=${key}&t=${query}`;

  axios.get(url).then(response => {
    console.log(response);
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[0]);
    response.data.Ratings.forEach(rating => {
      console.log("Ratings " + response.data.Rating.source);
    });
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);

    cb();
  });
};

//concert
Search.prototype.concert = function(query, cb) {
  let url = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;

  axios.get(url).then(response => {
    console.log(query)
    console.log("AT: " + response.data[0].venue.name); //name of venue
    console.log("IN: " + response.data[0].venue.city); //venue location
    console.log(moment(response.data[0].datetime).format("MM/DD/YYYY")); //date of event (MM.DD.YYYY)
  });
};

module.exports = Search;
