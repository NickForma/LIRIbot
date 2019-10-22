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
      console.log(`Searching For: ${query}`);

      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Title: " + data.tracks.items[0].name);
      console.log("Preview URL: " + data.tracks.items[0].preview_url);
      console.log("Album Name: " + data.tracks.items[0].album.name);

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
    let rating = response.data.Ratings;
    // console.log(response);
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    rating.forEach(rating => {
      console.log("Ratings " + rating.Source + "  " + rating.Value);
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
    console.log(`----------------------------------`);
    console.log(`Finding Concerts for ${query}`);
    console.log(`----------------------------------`);
    let gig = response.data;
    gig.forEach(gig => {
      let { name, city, datetime } = gig.venue;
      console.log(`Venue Name: ${name}`);
      console.log(`Venue Location: ${city}`);
      console.log(`Date: ${moment(datetime).format("MM/DD/YY")}`);
      console.log(`----------------------------------`);
    });
    cb();
  });
};

module.exports = Search;
