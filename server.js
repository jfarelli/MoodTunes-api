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
      genres: ["Alternative Rock", "Funk Metal", `Children's Music`],
      searchTerms: ["quirky", "fear", "weird"],
    },

    {
      id: 3,
      title: "I'll Be Missing You",
      artist: "Faith Evans and Sean Combs",
      urlKey: "NKMtZm2YuBE",
      genres: ["R&B", "Soul", "Pop", "Hip-Hop", "Rap"],
      searchTerms: ["peaceful", "sad", "dreamy"],
    },
    {
      id: 4,
      title: "Grand Tour",
      artist: "George Jones",
      urlKey: "up0ql8YXxP0",
      genres: ["Country"],
      searchTerms: ["sad"],
    },
    {
      id: 5,
      title: "Real Love Baby",
      artist: "Father John Misty",
      urlKey: "myGXncjeETw",
      genres: ["Alternative"],
      searchTerms: ["happy", "eccentric", "floating", "hopeful"],
    },
    {
      id: 6,
      title: "It Was a Good Day",
      artist: "Ice Cube",
      urlKey: "h4UqMyldS7Q",
      genres: ["Rap", "Hip-Hop"],
      searchTerms: ["epic", "floating", "laid-back", "smooth"],
    },
    {
      id: 7,
      title: "Wrongful Suspicion",
      artist: "Rancid",
      urlKey: "gsn0onH-ql8",
      genres: ["Punk-Rock", "Reggae"],
      searchTerms: ["happy", "floating", "laid-back", "smooth"],
    },
    {
      id: 8,
      title: "Cold Little Heart",
      artist: "Michael Kiwanuka",
      urlKey: "nOubjLM9Cbc",
      genres: ["Soul"],
      searchTerms: ["dreamy", "elegant", "laid-back", "smooth", "sexy"],
    },
    {
      id: 9,
      title: "Psycho Killer",
      artist: "Talking Heads",
      urlKey: "O52jAYa4Pm8",
      genres: ["Rock", "Alternative"],
      searchTerms: [
        "eccentric",
        "glamorous",
        "mysterious",
        "quirky",
        "weird",
        "high af",
      ],
    },
    {
      id: 10,
      title: "Brandy (You're a Fine Girl)",
      artist: "Looking Glass",
      urlKey: "DVx8L7a3MuE",
      genres: ["Light-Rock", "Easy-Listening"],
      searchTerms: ["happy", "floating", "laid-back"],
    },
    {
      id: 11,
      title: "My First My Last My Everything",
      artist: "Barry White",
      urlKey: "tB54XUhA9_w",
      genres: ["Soul"],
      searchTerms: ["smooth"],
    },
    {
      id: 12,
      title: "Epic",
      artist: "Faith No More",
      urlKey: "ZG_k5CSYKhg",
      genres: ["Rock", "Alternative"],
      searchTerms: ["epic"],
    },
    {
      id: 13,
      title: "Where is My Mind",
      artist: "Maxence Cyrin",
      urlKey: "90Fpjwctqlw",
      genres: ["Piano", "Easy-Listening"],
      searchTerms: ["sad", "elegant", "relaxing", "dreamy", "floating"],
    },
    {
      id: 14,
      title: "Watching the Detectives",
      artist: "Elvis Costello - Watching the Detectives",
      urlKey: "k1Qnt5bx1OI",
      genres: ["Alternative", "Rock"],
      searchTerms: ["eccentric", "marching", "weird"],
    },
    {
      id: 15,
      title: "Amber",
      artist: "311",
      urlKey: "SUFSB2plwzM",
      genres: ["Rock", "Reggae"],
      searchTerms: ["dreamy", "floating", "laid-back"],
    },
    {
      id: 16,
      title: "You Never Even Called Me By My Name",
      artist: "David Allan Coe",
      urlKey: "LZbso7sNqv0",
      genres: ["Country"],
      searchTerms: ["funny", "quirky", "sentimental"],
    },
    {
      id: 17,
      title: "Against the Wind",
      artist: "Bob Seiger and the Silver Bullet Band",
      urlKey: "2vRsEC65NTA",
      genres: ["Rock 'n Roll"],
      searchTerms: ["laid-back", "floating", "peaceful"],
    },
    {
      id: 18,
      title: "Whispered Words",
      artist: "Dan Auerbach",
      urlKey: "e7CbNvOiUdg",
      genres: ["Alternative"],
      searchTerms: ["laid-back", "floating", "peaceful"],
    },
    {
      id: 19,
      title: "Shadrach",
      artist: "Beastie Boys",
      urlKey: "H6nrmFdlXc0",
      genres: ["Rap", "Hip-Hop"],
      searchTerms: ["eccentric", "running", "marching"],
    },
    {
      id: 20,
      title: "Take Me Home, Country Roads",
      artist: "John Denver",
      urlKey: "1vrEljMfXYo",
      genres: ["Country", "Light-Rock"],
      searchTerms: ["eccentric", "elegant", "euphoric", "floating"],
    },
    {
      id: 21,
      title: "Push Off",
      artist: "The Palms",
      urlKey: "MgZoNI0VmdA",
      genres: ["Alternative"],
      searchTerms: ["eccentric", "elegant", "euphoric", "floating", "smooth"],
    },
    {
      id: 22,
      title: "Walk Like an Egyption",
      artist: "The Bangles",
      urlKey: "Cv6tuzHUuuk",
      genres: ["Rock"],
      searchTerms: ["happy", "epic"],
    },
    {
      id: 23,
      title: "Careless Whisper",
      artist: "George Michael",
      urlKey: "izGwDsrQ1eQ",
      genres: ["Light-Rock", "Glam-Rock"],
      searchTerms: [
        "eccentric",
        "epic",
        "floating",
        "laid-back",
        "sentimental",
        "high af",
      ],
    },
    {
      id: 24,
      title: "Stickin'n in My Eye",
      artist: "NOFX",
      urlKey: "A2vn18DVSbU",
      genres: ["Punk-Rock"],
      searchTerms: ["eccentric", "epic", "running", "laid-back"],
    },
    {
      id: 25,
      title: "Desperate Times",
      artist: "Killswitch Engage",
      urlKey: "wFO8qiW8WzQ",
      genres: ["Punk-Rock"],
      searchTerms: ["angry", "dark", "fear", "scary", "heavy"],
    },
    {
      id: 26,
      title: "Beer For My Horses (ft. Willie Nelson)",
      artist: "Toby Keith",
      urlKey: "o1JOFhfoAD4",
      genres: ["Country"],
      searchTerms: ["happy", "laid-back"],
    },
    {
      id: 27,
      title: "Take Your Mama",
      artist: "Scissor Sisters",
      urlKey: "od7-fyGa9DQ",
      genres: ["Country"],
      searchTerms: ["happy", "eccentric", "funny", "glamorous"],
    },
    {
      id: 28,
      title: "WWE Stone Cold theme song",
      artist: "The Texas Rattle Snake",
      urlKey: "MrJLsNo9sCU",
      genres: ["Rock", "Alternative"],
      searchTerms: ["eccentric", "epic", "marching", "chasing", "fear"],
    },
    {
      id: 29,
      title: "Sexual Healing",
      artist: "Marvin Gaye",
      urlKey: "rjlSiASsUIs",
      genres: ["R&B", "Soul"],
      searchTerms: ["romantic", "sentimental", "sexy", "smooth"],
    },

    {
      id: 30,
      title: "How Does It Feel?",
      artist: "D’Angelo",
      urlKey: "SxVNOnPyvIU",
      genres: ["R&B", "Soul", "Neo Soul"],
      searchTerms: ["romantic", "sentimental", "sexy", "smooth"],
    },

    {
      id: 31,
      title: "When Doves Cry",
      artist: "Prince & The Revolution",
      urlKey: "UG3VcCAlUgE",
      genres: ["R&B", "Soul"],
      searchTerms: ["sad", "sentimental"],
    },

    {
      id: 32,
      title: `Let's Go Crazy`,
      artist: "Prince & The Revolution",
      urlKey: "aXJhDltzYVQ",
      genres: ["R&B", "Soul"],
      searchTerms: [
        "glamorous",
        "happy",
        "hopeful",
        "eccentric",
        "euphoric",
        "quirky",
      ],
    },

    {
      id: 33,
      title: ` Purple Rain`,
      artist: "Prince",
      urlKey: "TvnYmWpD_T8",
      genres: ["R&B", "Soul"],
      searchTerms: ["glamorous", "sad", "sentimental"],
    },

    {
      id: 34,
      title: "In The Air Tonight",
      artist: "Phil Collins",
      urlKey: "YkADj0TPrJA",
      genres: ["Alternative", "Indie", "R&B", "Soul", "Pop", "Rock"],
      searchTerms: ["peaceful", "dreamy", "floating", "high af"],
    },
    {
      id: 35,
      title: "Africa",
      artist: "Toto",
      urlKey: "FTQbiNvZqaY",
      genres: ["Pop"],
      searchTerms: ["happy", "epic"],
    },
    {
      id: 36,
      title: "Gooey",
      artist: "Glass Animals",
      urlKey: "jeo3an2M_Lo",
      genres: ["Alternative", "Indie", "R&B", "Soul", "Pop"],
      searchTerms: ["happy", "euphoric", "floating", "high af"],
    },

    {
      id: 37,
      title: "C.R.E.A.M.",
      artist: "Wu-Tang Clan",
      urlKey: "PBwAxmrE194",
      genres: ["Rap", "Hip-hop"],
      searchTerms: ["hopeful", "high af"],
    },

    {
      id: 38,
      title: "Kerala",
      artist: "Bonobo",
      urlKey: "S0Q4gqBUs7c",
      genres: ["Alternative", "Indie", "Dance", "Electronic"],
      searchTerms: [
        "relaxing",
        "dreamy",
        "floating",
        "hopeful",
        "euphoric",
        "high af",
      ],
    },

    {
      id: 39,
      title: "You & Me (Flume Remix)",
      artist: "MEUTE",
      urlKey: "fKFbnhcNnjE",
      genres: ["Techno", "Deep House", "House"],
      searchTerms: ["marching", "happy", "epic"],
    },

    {
      id: 40,
      title: "Mile High",
      artist: "James Blake",
      urlKey: "PWPafG8wEvc",
      genres: ["Dance", "Electronic"],
      searchTerms: [
        "sentimental",
        "dreamy",
        "smooth",
        "peaceful",
        "mysterious",
      ],
    },
    {
      id: 41,
      title: "Hero",
      artist: "Enrique Iglesias",
      urlKey: "koJlIGDImiU",
      genres: ["Light-Rock", "Easy-Listening"],
      searchTerms: ["sexy", "romantic"],
    },
    {
      id: 42,
      title: "I Want it That Way",
      artist: "Backstreet Boys",
      urlKey: "4fndeDfaWCg",
      genres: ["Alternative", "Boy-Band"],
      searchTerms: ["sexy", "romantic", "high af"],
    },
    {
      id: 43,
      title: "End of the Road",
      artist: "Boyz II Men",
      urlKey: "zDKO6XYXioc",
      genres: ["R&B", "Soul"],
      searchTerms: ["sexy", "romantic"],
    },
    {
      id: 44,
      title: "How Am I Supposed To Live Without You",
      artist: "Michael Bolton",
      urlKey: "YFood_bTOX4",
      genres: ["Soul"],
      searchTerms: ["sexy", "romantic", "studious"],
    },
    {
      id: 45,
      title: "Nobody Speak (ft. Run The Jewels)",
      artist: "DJ Shadow",
      urlKey: "NUC2EQvdzmY",
      genres: ["Rap", "Hip-Hop"],
      searchTerms: ["epic", "running"],
    },
    {
      id: 46,
      title: "Die By the Drop",
      artist: "The Dead Weather",
      urlKey: "K0YI0UUazkU",
      genres: ["Rock"],
      searchTerms: ["epic", "running", "heavy"],
    },
    {
      id: 47,
      title: "Steal Away",
      artist: "Murder by Death",
      urlKey: "e4o875fwWtA",
      genres: ["Alternative"],
      searchTerms: ["dark", "essentric", "mysterious"],
    },
    {
      id: 48,
      title: "Time After Time",
      artist: "Cindy Lauper",
      urlKey: "VdQY7BusJNU",
      genres: ["Alternative"],
      searchTerms: ["romantic", "elegant", "sentimental"],
    },
    {
      id: 49,
      title: "Van Helsing Boombox",
      artist: "Man Man",
      urlKey: "rOaee8Qss0w",
      genres: ["Alternative"],
      searchTerms: ["essentric", "quirky", "weird"],
    },
    {
      id: 50,
      title: "With a Little Help from My Friends",
      artist: "Joe Cocker",
      urlKey: "nCrlyX6XbTU",
      genres: ["Rock"],
      searchTerms: ["essentric", "epic"],
    },
    {
      id: 51,
      title: "Fuck You Bitch",
      artist: "Wheeler Walker Jr.",
      urlKey: "myJDBos5Vyw",
      genres: ["Country"],
      searchTerms: ["essentric", "funny", "quirky", "weird"],
    },
    {
      id: 52,
      title: "Rocket Man (I Think It's Going to Be a Long, Long Time)",
      artist: "Elton John",
      urlKey: "DtVBCG6ThDk",
      genres: ["Rock"],
      searchTerms: ["epic", "floating"],
    },
    {
      id: 53,
      title: "It's Too Late",
      artist: "Rodney Carrington",
      urlKey: "P7rTUTedclw",
      genres: ["Country"],
      searchTerms: ["funny", "quirky"],
    },
    {
      id: 54,
      title: "Easy",
      artist: "Faith No More",
      urlKey: "vPzDTfIb0DU",
      genres: ["Alternative", "Rock"],
      searchTerms: ["laid-back", "relaxing"],
    },
    {
      id: 55,
      title: "Thunder Kiss '65",
      artist: "White Zombie",
      urlKey: "yPNFVj-pISU",
      genres: ["Metal", "Hard-Rock"],
      searchTerms: ["heavy", "dark", "angry"],
    },
    {
      id: 56,
      title: "No Rain",
      artist: "Blind Melon",
      urlKey: "3qVPNONdF58",
      genres: ["Alternative"],
      searchTerms: ["laid-back", "happy", "quirky"],
    },
    {
      id: 57,
      title: "They Love Each Other",
      artist: "Grateful Dead",
      urlKey: "58JTV8kW2_8",
      genres: ["Rock", "Alternative"],
      searchTerms: [
        "sexy",
        "sentimental",
        "euphoric",
        "romantic",
        "peaceful",
        "smooth",
        "dreamy",
        "high af",
      ],
    },

    {
      id: 58,
      title: "You Sexy Thing",
      artist: "Hot Chocolate",
      urlKey: "YUY9Y9RFiHY",
      genres: ["R&B", "Soul"],
      searchTerms: ["eccentric", "glamorous", "mysterious", "quirky", "weird"],
    },

    {
      id: 59,
      title: "Lovely Day",
      artist: "Bill Withers",
      urlKey: "bEeaS6fuUoA",
      genres: ["R&B", "Soul"],
      searchTerms: [
        "sentimental",
        "euphoric",
        "romantic",
        "peaceful",
        "smooth",
        "dreamy",
        "high af",
      ],
    },

    {
      id: 60,
      title: "Do Right Woman, Do Right Man",
      artist: "Aretha Franklin",
      urlKey: "VhdgFfNsst0",
      genres: ["R&B", "Soul"],
      searchTerms: [
        "relaxing",
        "happy",
        "glamourous",
        "sexy",
        "sentimental",
        "euphoric",
        "romantic",
        "peaceful",
        "smooth",
        "dreamy",
      ],
    },

    {
      id: 61,
      title: "Silent in the Morning",
      artist: "Phish",
      urlKey: "Sbh8b45WN5A",
      genres: ["Rock"],
      searchTerms: [
        "sentimental",
        "euphoric",
        "peaceful",
        "smooth",
        "dreamy",
        "happy",
        "relaxing",
        "elegant",
        "epic",
        "high af",
      ],
    },
    {
      id: 63,
      title: "Bassackwards",
      artist: "Kurt Vile",
      urlKey: "pOFWHty4XFQ",
      genres: ["Alternative", "Indie"],
      searchTerms: [
        "sentimental",
        "peaceful",
        "smooth",
        "dreamy",
        "happy",
        "relaxing",
        "elegant",
        "epic",
      ],
    },
    {
      id: 64,
      title: "Dear Prudence",
      artist: "Jerry Garcia",
      urlKey: "qKHh1eCwwno",
      genres: ["Rock", "Jam", "Psychedelia"],
      searchTerms: [
        "sentimental",
        "euphoric",
        "peaceful",
        "smooth",
        "dreamy",
        "happy",
        "relaxing",
        "elegant",
        "epic",
        "high af",
      ],
    },
    // {
    //   id: 65,
    //   title: "Tweezer",
    //   artist: "Phish",
    //   urlKey: "yZwRQ6bsm_k",
    //   genres: ["Rock", "Jam", "Psychedelia"],
    //   searchTerms: ["euphoric", "happy", "epic", "eccentric", "dark"],
    // },
    {
      id: 66,
      title: "Darker Thoughts",
      artist: "Paradise Lost",
      urlKey: "URJH3ZJzxB0",
      genres: ["Metal"],
      searchTerms: ["dark", "sad"]
    },
    {
      id: 67,
      title: "My Twin",
      artist: "Katatonia",
      urlKey: "nH45PdkXF9I",
      genres: ["Metal", "Rock"],
      searchTerms: ["dark", "sad"]
    },
    {
      id: 68,
      title: "Carnival of Rust",
      artist: "Poets of the Fall",
      urlKey: "MKk1u5RMTn4",
      genres: ["Rock"],
      searchTerms: ["sad", "mysterious"]
    },
    {
      id: 69,
      title: "Make it Bun Dem",
      artist: "Skrillex & Damien",
      urlKey: "BGpzGu9Yp6Y",
      genres: ["Dubstep", "Reggae"],
      searchTerms: ["high af", "eccentric"]
    },
    {
      id: 70,
      title: "Minds Playin Tricks On Me",
      artist: "Geto Boys",
      urlKey: "IJtHdkyo0hc",
      genres: ["Rap", "Gangsta Rap"],
      searchTerms: ["high af", "dark", "restless", "mysterious"]
    },
    {
      id: 71,
      title: "ILL MIND OF HOPSIN 5",
      artist: "Hopsin",
      urlKey: "hRVOOwFNp5U",
      genres: ["Rap"],
      searchTerms: ["dark", "scary"]
    },

    {
      id: 72,
      title: "Set Trippin",
      artist: "Casanova",
      urlKey: "YiS24Ia44DQ",
      genres: ["Rap", "Gangsta Rap"],
      searchTerms: ["dark", "high af", "eccentric"]

    },
    {
      id: 73,
      title: "Can't Be Touched",
      artist: "Roy Jones Jr",
      urlKey: "ivPKDBzVhow",
      genres: ["Rap", "Gangsta Rap"],
      searchTerms: ["dark", "high af", "eccentric", "epic"]
    },
    {
      id: 74,
      title: "Panzerkampf",
      artist: "Sabaton",
      urlKey: "3vEW_r4Swn8",
      genres: ["Metal", "Heavy Metal", ""],

      searchTerms: ["marching", "eccentric", "epic"]

    },
    {
      id: 75,
      title: "Disillusion in a Discordant System",
      artist: "Acrania",
      urlKey: "ArrqUWKvq7g",
      genres: ["Metal", "Death Metal", "Speed Metal"],

      searchTerms: ["eccentric", "epic", "scary"]

    },
    {
      id: 76,
      title: "The Bleeding",
      artist: "Five Finger Death Punch",
      urlKey: "KAuyEG7JPbE",
      genres: ["Metal", "Heavy Metal", "Nu Metal"],
      searchTerms: ["dark", "scary", "sad"]
    },
    {
      id: 76,
      title: "Runnin Up That Hill",
      artist: "Kate Bush",
      urlKey: "wp43OdtAAkM",
      genres: ["Alternative", "Pop"],
      searchTerms: ["floating", "eccentric", "euphoric"]
    },
    {
      id: 77,
      title: "Total Eclipse of The Heart",
      artist: "Bonnie Tyler",
      urlKey: "lcOxhH8N3Bo",
      genres: ["Alternative", "Pop"],
      searchTerms: ["epic", "eccentric", "euphoric", "dreamy"]
    },
    {
      id: 78,
      title: "I Was Made For Lovin' You",
      artist: "Kiss",
      urlKey: "12fJAnaif34",
      genres: ["Rock", "Classic Rock"],
      searchTerms: ["epic", "euphoric", "hopeful"]
    },
    {
      id: 79,
      title: "Like a Stone",
      artist: "Audioslave",
      urlKey: "7QU1nvuxaMA",
      genres: ["Rock", "Classic Rock"],
      searchTerms: ["dark", "Sad"]
    },
    {
      id: 80,
      title: "Black Hole Sun",
      artist: "Soundgarden",
      urlKey: "3mbBbFH9fAg",
      genres: ["Rock"],
      searchTerms: ["dark", "sad", "sentimental"]
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
      title: "High AF",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    },
    {
      id: 28,
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
