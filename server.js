const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

app.locals.songs = [
  {
    id: 1,
    title: 'Haaaay!',
    artist: 'Weird Al Yankovick',
    urlKey: 'someUrlKey',
    genres: ['rock', 'jazz', 'parody'],
    searchTerms: ['studious', 'happy'],
  }
];

app.get("/:id", (request, response) => {
  const data = app.locals.songs;
  let foundSong = data.find( song => song.id ===  parseInt(request.params.id));
  if (!foundSong) {
    response.status(404).send({
      error: `Sorry this song doesn't exist yet!`,
    });
  }
  response.send({ foundSong });
});

app.set("port", process.env.PORT || 3001);
app.locals.title = "MoodTunes-api";

app.get("/", (request, response) => {
  const songs = app.locals.songs;
  if (!songs) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ songs });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
