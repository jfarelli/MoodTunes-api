const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

app.locals.data = {
  songs: [
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
      genres: ["alternative rock", "funk metal", `children's music`],
      searchTerms: ["quirky", "fear", "weird"],
    },
    {
      id: 3,
      title: "Kyle (I Found You)",
      artist: "Fred Again..",
      urlKey: "mmlQ2HPfXE",
      genres: ["Dance", "Electronic", "Hip-Hop", "Rap", "Amapiano"],
      searchTerms: ["floating", "Sentimental", "Peaceful"],
    },
    {
      id: 4,
      title: "I'll Be Missing You",
      artist: "Faith Evans and Sean Combs",
      urlKey: "mmlQ2HPfXE",
      genres: ["R&B", "Soul", "Pop", "Hip-Hop", "Rap"],
      searchTerms: ["Peaceful", "Sad", "Dreamy"],
    },
  ],
  moods: [
    {
      title: "Chasing",
      img: "https://www.business2community.com/wp-content/uploads/2018/02/BeingChased-600x400.jpg",
    },
    {
      title: "Dark",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Dreamy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qTPQt7hnD5Y1vF9uOpvReiy-4s7JDjEVaQ&usqp=CAU",
    },
    {
      title: "Eccentric",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Elegant",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Epic",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Euphoric",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Fear",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Floating",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Funny",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Glamorous",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Happy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Hopeful",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Marching",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Mysterious",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Peaceful",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Quirky",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Relaxing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Restless",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Romantic",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Running",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Sad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Scary",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Sentimental",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Sexy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Smooth",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Sneaking",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Suspense",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      title: "Weird",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
  ],
};

app.get("/:id", (request, response) => {
  const data = app.locals.songs;
  let foundSong = data.find((song) => song.id === parseInt(request.params.id));
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
  const data = app.locals.data;
  if (!data) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ data });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
