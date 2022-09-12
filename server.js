const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

app.locals.songs = [
  {
    id: 1,
    title: "Haaaay!",
    artist: "Weird Al Yankovick",
    urlKey: "someUrlKey",
    genres: ["rock", "jazz", "parody"],
    searchTerms: ["studious", "happy"],
  },
  {
    id: 2,
    title: "Jerry Was A Race Car Driver",
    artist: "Primus",
    urlKey: "LBQ2305fLeA",
    genres: ['alternative rock', 'funk metal',`children's music`],
    searchTerms: ["quirky", "fear",'weird'],
  },
    {
    id: 3,
    title: "Kyle (I Found You)",
    artist: "Fred Again..",
    urlKey: "mmlQ2HPfXE",
    genres: ['Dance','Electronic', 'Hip-Hop','Rap', 'Amapiano'],
    searchTerms: ["floating",'Sentimental', "Peaceful"],
  },
      {
    id: 4,
    title: "I'll Be Missing You",
    artist: "Faith Evans and Sean Combs",
    urlKey: "mmlQ2HPfXE",
    genres: ['R&B','Soul', 'Pop', 'Hip-Hop','Rap'],
    searchTerms: ["Peaceful","Sad","Dreamy"],
  },
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
