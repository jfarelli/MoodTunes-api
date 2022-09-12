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
      id: 1,
      title: "Chasing",
      img: "https://www.business2community.com/wp-content/uploads/2018/02/BeingChased-600x400.jpg",
    },
    {
      id: 2,
      title: "Dark",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 3,
      title: "Dreamy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qTPQt7hnD5Y1vF9uOpvReiy-4s7JDjEVaQ&usqp=CAU",
    },
    {
      id: 4,
      title: "Eccentric",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 5,
      title: "Elegant",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 6,
      title: "Epic",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 7,
      title: "Euphoric",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 8,
      title: "Fear",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 9,
      title: "Floating",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 10,
      title: "Funny",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 11,
      title: "Glamorous",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 12,
      title: "Happy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 13,
      title: "Hopeful",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 14,
      title: "Marching",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 15,
      title: "Mysterious",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 16,
      title: "Peaceful",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 17,
      title: "Quirky",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 18,
      title: "Relaxing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 19,
      title: "Restless",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 20,
      title: "Romantic",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 21,
      title: "Running",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 22,
      title: "Sad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 23,
      title: "Scary",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 24,
      title: "Sentimental",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 25,
      title: "Sexy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 26,
      title: "Smooth",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 27,
      title: "Sneaking",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 28,
      title: "Suspense",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 29,
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
