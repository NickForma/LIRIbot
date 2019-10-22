# LIRI
**Language Interpretation and Recognition Interface**

LIRI is a simple node.js app that searches for information on movies, music, and concerts based off a users' search.

## Motivation

This app was created so that users can have a one stop shop type of search. When looking up information on different medias, you typically have to use different websites or apps. With LIRI you can search all three media types in one spot.

## How to use?

Upon starting the app, you are asked to provide your name. You are then prompted to choose from a list including concert, song, movie, random, or exit. Once the user has picked one of the options you are then asked to provide a search term.
Searching for concert will result in a list of shows that give the venues name, city and date of show.
Searching for a song will result in the artists name, track name, a preview url, and the album name the track is on.
Searching for a movie will result in the title, release year, multiple ratings, country of filming, primary languages, plot, and starring actors.
Searching for random will give you a random output.
Clicking exit will exit the app.


## Tech/Frameworks used

**Built with**

- [Node]((https://www.npmjs.com/package/node))
- [Moment](https://www.npmjs.com/package/moment)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
- [Axios](https://www.npmjs.com/package/axios)
- [Inquirer](https://www.npmjs.com/package/inquirer)

## API Reference

[OMDB API](http://www.omdbapi.com)
Populates searches for Movies

[Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
Populates searches for Concerts

 [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
 Populates searches for Songs

## Screenshots!!
Initial Prompt
![
](https://lh3.googleusercontent.com/3rMr9Zb-ri_opgjQ3u7_g8RhKqHxxTwthig5lYqVtXWiZgxj88Zwc3rZHRnSD0LAcYmGAF6V_ckkAA "search")
Song Results
![
](https://lh3.googleusercontent.com/01PnGeXTXrzXIKyYzglqhFnRJPIvYsSv293Ze1zNyyW5RHfB5AlGVFA8TAkrCj4RrfYdt9i2kKX0NQ "song")
Movie Results
![
](https://lh3.googleusercontent.com/paHAL2hvjqfzRXpReYh7CPeAh1EriaMoxoD2XdFMXloyjnWyNyUPhErO6UwoHOzuqaGYeputb5Bk9A "movie")
Concert Results
![
](https://lh3.googleusercontent.com/6Pk9rlJgjLouxjBPGfiK7Sm2qfPJxzKaY5C6jUXXKe6dmT-c5TZbORFR0s6fX4eR5S4zDqrkJaW5Og "concert")

## Credits


Copyright © 2019 - Coded and Developed by Nick
