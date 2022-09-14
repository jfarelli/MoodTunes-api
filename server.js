const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

//github.com/jfarelli/MoodTunes-api/blob/500738ef7ebee30cc797067d0ee0e94d50b3363a/assets/happy.png

https: app.locals.data = {
  songs: [
    {
      id: 1,
      title: "Jerry Was A Race Car Driver",
      artist: "Primus",
      urlKey: "LBQ2305fLeA",
      genres: ["alternative rock", "funk metal", `children's music`],
      searchTerms: ["quirky", "fear", "weird"],
    },
    {
      id: 2,
      title: "Kyle (I Found You)",
      artist: "Fred Again..",
      urlKey: "mmlQ2HPfXE",
      genres: ["Dance", "Electronic", "Hip-Hop", "Rap", "Amapiano"],
      searchTerms: ["floating", "Sentimental", "Peaceful"],
    },
    {
      id: 3,
      title: "I'll Be Missing You",
      artist: "Faith Evans and Sean Combs",
      urlKey: "mmlQ2HPfXE",
      genres: ["R&B", "Soul", "Pop", "Hip-Hop", "Rap"],
      searchTerms: ["Peaceful", "Sad", "Dreamy"],
    },
    {
      id: 4,
      title: "Grand Tour",
      artist: "George Jones",
      urlKey: "up0ql8YXxP0",
      genres: ["country"],
      searchTerms: ["sad"],
    },
    {
      id: 5,
      title: "Real Love Baby",
      artist: "Father John Misty",
      urlKey: "myGXncjeETw",
      genres: ["alternative"],
      searchTerms: ["happy", "eccentric", "floating", "hopeful"],
    },
    {
      id: 6,
      title: "It Was a Good Day",
      artist: "Ice Cube",
      urlKey: "h4UqMyldS7Q",
      genres: ["rap", "hip-hop"],
      searchTerms: ["epic", "floating", "laid-back", "smooth"],
    },
    {
      id: 7,
      title: "Wrongful Suspicion",
      artist: "Rancid",
      urlKey: "gsn0onH-ql8",
      genres: ["punk-rock", "reggae"],
      searchTerms: ["happy", "floating", "laid-back", "smooth"],
    },
    {
      id: 8,
      title: "Cold Little Heart",
      artist: "Michael Kiwanuka",
      urlKey: "nOubjLM9Cbc",
      genres: ["soul"],
      searchTerms: ["dreamy", "elegant", "laid-back", "smooth", "sexy"],
    },
    {
      id: 9,
      title: "Psycho Killer",
      artist: "Talking Heads",
      urlKey: "O52jAYa4Pm8",
      genres: ["rock", "alternative"],
      searchTerms: ["eccentric", "glamorous", "mysterious", "quirky", "weird"],
    },
    {
      id: 10,
      title: "Brandy (You're a Fine Girl)",
      artist: "Looking Glass",
      urlKey: "DVx8L7a3MuE",
      genres: ["light-rock", "easy-listening"],
      searchTerms: ["happy", "floating", "laid-back"],
    },
    {
      id: 11,
      title: "My First My Last My Everything",
      artist: "Barry White",
      urlKey: "tB54XUhA9_w",
      genres: ["soul"],
      searchTerms: ["smooth"],
    },
    {
      id: 12,
      title: "Epic",
      artist: "Faith No More",
      urlKey: "ZG_k5CSYKhg",
      genres: ["rock", "alternative"],
      searchTerms: ["epic"],
    },
    {
      id: 13,
      title: "Where is My Mind",
      artist: "Maxence Cyrin",
      urlKey: "90Fpjwctqlw",
      genres: ["piano", "easy-listening"],
      searchTerms: ["sad", "elegant", "relaxing", "dreamy", "floating"],
    },
    {
      id: 14,
      title: "Watching the Detectives",
      artist: "Elvis Costello - Watching the Detectives",
      urlKey: "k1Qnt5bx1OI",
      genres: ["piano", "easy-listening"],
      searchTerms: ["eccentric", "marching", "weird"],
    },
    {
      id: 15,
      title: "Amber",
      artist: "311",
      urlKey: "SUFSB2plwzM",
      genres: ["rock", "reggae"],
      searchTerms: ["dreamy", "floating", "laid-back"],
    },
    {
      id: 16,
      title: "You Never Even Called Me By My Name",
      artist: "David Allan Coe",
      urlKey: "LZbso7sNqv0",
      genres: ["country"],
      searchTerms: ["funny", "quirky", "sentimental"],
    },
    {
      id: 17,
      title: "Against the Wind",
      artist: "Bob Seiger and the Silver Bullet Band",
      urlKey: "2vRsEC65NTA",
      genres: ["rock 'n roll"],
      searchTerms: ["laid-back", "floating", "peaceful"],
    },
    {
      id: 18,
      title: "Whispered Words",
      artist: "Dan Auerbach",
      urlKey: "e7CbNvOiUdg",
      genres: ["alternative"],
      searchTerms: ["laid-back", "floating", "peaceful"],
    },
    {
      id: 19,
      title: "Shadrach",
      artist: "Beastie Boys",
      urlKey: "H6nrmFdlXc0",
      genres: ["rap", "hip-hop"],
      searchTerms: ["eccentric", "running", "marching"],
    },
    {
      id: 20,
      title: "Take Me Home, Country Roads",
      artist: "John Denver",
      urlKey: "1vrEljMfXYo",
      genres: ["country", "light-rock"],
      searchTerms: ["eccentric", "elegant", "euphoric", "floating"],
    },
    {
      id: 21,
      title: "Push Off",
      artist: "The Palms",
      urlKey: "MgZoNI0VmdA",
      genres: ["alternative"],
      searchTerms: ["eccentric", "elegant", "euphoric", "floating", "smooth"],
    },
    {
      id: 22,
      title: "Walk Like an Egyption",
      artist: "The Bangles",
      urlKey: "Cv6tuzHUuuk",
      genres: ["rock"],
      searchTerms: ["happy", "epic"],
    },
    {
      id: 23,
      title: "Careless Whisper",
      artist: "George Michael",
      urlKey: "izGwDsrQ1eQ",
      genres: ["light-rock", "glam-rock"],
      searchTerms: [
        "eccentric",
        "epic",
        "floating",
        "laid-back",
        "sentimental",
      ],
    },
    {
      id: 24,
      title: "Stickin'n in My Eye",
      artist: "NOFX",
      urlKey: "A2vn18DVSbU",
      genres: ["punk-rock"],
      searchTerms: ["eccentric", "epic", "running", "laid-back"],
    },
    {
      id: 25,
      title: "Desperate Times",
      artist: "Killswitch Engage",
      urlKey: "wFO8qiW8WzQ",
      genres: ["punk-rock"],
      searchTerms: ["angry", "dark", "fear", "scary", "heavy"],
    },
    {
      id: 26,
      title: "Beer For My Horses (ft. Willie Nelson)",
      artist: "Toby Keith",
      urlKey: "o1JOFhfoAD4",
      genres: ["country"],
      searchTerms: ["happy", "laid-back"],
    },
    {
      id: 27,
      title: "Take Your Mama",
      artist: "Scissor Sisters",
      urlKey: "od7-fyGa9DQ",
      genres: ["country"],
      searchTerms: ["happy", "eccentric", "funny", "glamorous"],
    },
  ],
  moods: [
    {
      id: 1,
      title: "Happy",
      img: `https://www.2ndacthealth.com/wp-content/uploads/2015/10/wallpaper-beach-happy-people.jpg`,
    },
    {
      id: 2,
      title: "Relaxing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCGfXMJiywhO1wChl5TR5MCZJFkVPF--XEQ&usqp=CAU",
    },
    {
      id: 3,
      title: "Dreamy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qTPQt7hnD5Y1vF9uOpvReiy-4s7JDjEVaQ&usqp=CAU",
    },
    {
      id: 4,
      title: "Glamorous",
      img: "https://i.pinimg.com/originals/84/41/83/844183a3111f09d04abbdd974a0305c6.jpg",
    },
    {
      id: 5,
      title: "Elegant",
      img: "https://memegenerator.net/img/images/73326557.jpg",
    },
    {
      id: 6,
      title: "Epic",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/12/15/11/stone-cold-beer.jpg?quality=75&width=982&height=726&auto=webp",
    },
    {
      id: 7,
      title: "Sad",
      img: "https://media.istockphoto.com/photos/depressed-woman-sitting-on-a-chair-in-dark-room-at-home-lonly-sad-picture-id865618914?b=1&k=20&m=865618914&s=170667a&w=0&h=D0AppFdYGgOlQZ4rcs90tWYf0ZDAxfUgZ9oA5fPmxQ8=",
    },
    {
      id: 8,
      title: "Smooth",
      img: "https://i.scdn.co/image/d04ae222146d052fbbe9ed2598c1c3319d4e7ebc",
    },
    {
      id: 9,
      title: "Floating",
      img: "https://w0.peakpx.com/wallpaper/424/116/HD-wallpaper-take-me-away-aesthetic-ballons-clouds-dreamy-floating-mood-soft-takemeaway.jpg",
    },
    {
      id: 10,
      title: "Sexy",
      img: "https://img.buzzfeed.com/buzzfeed-static/static/2019-01/8/14/tmp/buzzfeed-prod-web-05/tmp-name-2-23747-1546977174-0_dblbig.jpg?output-format=auto&output-quality=auto&resize=300:*;",
    },
    {
      id: 11,
      title: "Eccentric",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 12,
      title: "Chasing",
      img: "https://www.business2community.com/wp-content/uploads/2018/02/BeingChased-600x400.jpg",
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
      title: "Dark",
      img: "https://i.scdn.co/image/ab67706c0000bebb59945d1c8e4430b6ad5f2207",
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
      title: "Euphoric",
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
      title: "Funny",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 26,
      title: "Fear",
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
