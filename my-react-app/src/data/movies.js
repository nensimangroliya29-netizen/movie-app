import frozen from "../assets/frozen.jpg";
import moana from "../assets/moana.jpg";
import lionKing from "../assets/lion-king.jpg";
import kungFuPanda from "../assets/Kung Fu Panda.jpg";
import toyStory from "../assets/toy-story.jpg";
import findingNemo from "../assets/Finding Nemo.jpg";
import turningRed from "../assets/Turning Red.jpg";
import brave from "../assets/Brave.jpg";
import howToTrainYourDragon from "../assets/How to Train Your Dragon.jpg";

const movies = [
  {
    id: 1,
    title: "Frozen",
    image: frozen,
    year: 2013,
    genre: "Animation",
    description:
      "A magical adventure about two sisters and a frozen kingdom.",
    duration: "1h 42min",
    releaseDate: "November 27, 2013",
    cast: "Kristen Bell, Idina Menzel, Josh Gad",
    director: "Chris Buck, Jennifer Lee",
    producer: "Peter Del Vecho",
    trailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc",
  },

  {
    id: 2,
    title: "Toy Story",
    image: toyStory,
    year: 1995,
    genre: "Animation",
    description:
      "A story about toys that come to life when humans are not around.",
    duration: "1h 21min",
    releaseDate: "November 22, 1995",
    cast: "Tom Hanks, Tim Allen, Don Rickles",
    director: "John Lasseter",
    producer: "Ralph Guggenheim, Bonnie Arnold",
    trailer: "https://www.youtube.com/watch?v=v-PjgYDrg70",
  },

  {
    id: 3,
    title: "Kung Fu Panda",
    image: kungFuPanda,
    year: 2008,
    genre: "Animation",
    description:
      "A clumsy panda becomes the chosen Dragon Warrior.",
    duration: "1h 32min",
    releaseDate: "June 6, 2008",
    cast: "Jack Black, Angelina Jolie, Dustin Hoffman",
    director: "Mark Osborne, John Stevenson",
    producer: "Melissa Cobb",
    trailer: "https://www.youtube.com/watch?v=PXi3Mv6KMzY",
  },

  {
    id: 4,
    title: "The Lion King",
    image: lionKing,
    year: 2019,
    genre: "Animation",
    description:
      "A young lion discovers his destiny and becomes king.",
    duration: "1h 58min",
    releaseDate: "July 19, 2019",
    cast: "Donald Glover, Beyoncé, James Earl Jones",
    director: "Jon Favreau",
    producer: "Jon Favreau, Jeffrey Silver",
    trailer: "https://www.youtube.com/watch?v=7TavVZMewpY",
  },

  {
    id: 5,
    title: "Moana",
    image: moana,
    year: 2016,
    genre: "Animation",
    description:
      "A brave young girl sails across the ocean to save her island.",
    duration: "1h 47min",
    releaseDate: "November 23, 2016",
    cast: "Auliʻi Cravalho, Dwayne Johnson, Rachel House",
    director: "Ron Clements, John Musker",
    producer: "Osnat Shurer",
    trailer: "https://www.youtube.com/watch?v=LKFuXETZUsI",
  },

  {
    id: 6,
    title: "Finding Nemo",
    image: findingNemo,
    year: 2003,
    genre: "Animation",
    description:
      "A father fish travels across the ocean to find his missing son.",
    duration: "1h 40min",
    releaseDate: "May 30, 2003",
    cast: "Albert Brooks, Ellen DeGeneres, Alexander Gould",
    director: "Andrew Stanton",
    producer: "Graham Walters",
    trailer: "https://www.youtube.com/watch?v=wZdpNglLrmA",
  },

  {
    id: 7,
    title: "Turning Red",
    image: turningRed,
    year: 2022,
    genre: "Animation",
    description:
      "A teenage girl discovers that she transforms into a giant red panda.",
    duration: "1h 40min",
    releaseDate: "March 11, 2022",
    cast: "Rosalie Chiang, Sandra Oh, Ava Morse",
    director: "Domee Shi",
    producer: "Lindsey Collins",
    trailer: "https://www.youtube.com/watch?v=XdKzUbAiswE",
  },

  {
    id: 8,
    title: "Brave",
    image: brave,
    year: 2012,
    genre: "Animation",
    description:
      "A brave princess challenges tradition and discovers her own destiny.",
    duration: "1h 33min",
    releaseDate: "June 22, 2012",
    cast: "Kelly Macdonald, Billy Connolly, Emma Thompson",
    director: "Mark Andrews, Brenda Chapman",
    producer: "Katherine Sarafian",
    trailer: "https://www.youtube.com/watch?v=TEHWDA_6e3M",
  },

  {
    id: 9,
    title: "How to Train Your Dragon",
    image: howToTrainYourDragon,
    year: 2010,
    genre: "Animation",
    description:
      "A young Viking becomes friends with a dragon and changes his village forever.",
    duration: "1h 38min",
    releaseDate: "March 26, 2010",
    cast: "Jay Baruchel, Gerard Butler, Craig Ferguson",
    director: "Chris Sanders, Dean DeBlois",
    producer: "Bonnie Arnold",
    trailer: "https://www.youtube.com/watch?v=oKiYuIsPxYk",
  },
];

export default movies;