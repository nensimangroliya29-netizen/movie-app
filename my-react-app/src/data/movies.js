import twelveFail from "../assets/12th Fail.jpg";
import taareZameenPar from "../assets/Taare Zameen Par.jpg";
import dangal from "../assets/Dangal.jpg";
import chhichhore from "../assets/Chhichhore.jpg";
import lakshya from "../assets/Lakshya.jpg";
import swades from "../assets/Swades.jpg";
import rangDeBasanti from "../assets/Rang De Basanti.jpg";
import englishVinglish from "../assets/English Vinglish.jpg";
import queen from "../assets/Queen.jpg";
import panga from "../assets/Panga.jpg";
import maryKom from "../assets/Mary Kom.jpg";
import bhaagMilkhaBhaag from "../assets/Bhaag Milkha Bhaag.jpg";
import neerja from "../assets/Neerja.jpg";
import airlift from "../assets/Airlift.jpg";
import wakeUpSid from "../assets/Wake Up Sid.jpg";
import nilBatteySannata from "../assets/Nil Battey Sannata.jpg";
import udaan from "../assets/Udaan.jpg";
import msDhoni from "../assets/M.S. Dhoni.jpg";
import super30 from "../assets/super 30.jpg";
import shabaashMithu from "../assets/Shabaash Mithu.jpg";
import jersey from "../assets/Jersey.jpg";
import sitaRamam from "../assets/Sita Ramam.jpg";
import khoKho from "../assets/kho kho.jpg";
import kabaddi from "../assets/kabaddi.jpg";

const movies = [
  {
    id: 10,
    title: "12th Fail",
    image: twelveFail,
    year: 2023,
    genre: "Biography, Drama",
    description:
      "A young man from a poor background overcomes poverty and failure to achieve his dream of becoming an IPS officer.",
    duration: "2h 27min",
    releaseDate: "October 27, 2023",
    cast: "Vikrant Massey, Medha Shankr, Anant V Joshi",
    director: "Vidhu Vinod Chopra",
    producer: "Vidhu Vinod Chopra",
    trailer: "https://www.youtube.com/watch?v=KjbtuqENvVE",
  },

  {
    id: 11,
    title: "Taare Zameen Par",
    image: taareZameenPar,
    year: 2007,
    genre: "Drama, Family",
    description:
      "A teacher helps a young boy overcome his learning difficulties and discover his unique abilities.",
    duration: "2h 45min",
    releaseDate: "December 21, 2007",
    cast: "Aamir Khan, Darsheel Safary, Tisca Chopra",
    director: "Aamir Khan",
    producer: "Aamir Khan",
    trailer: "https://www.youtube.com/watch?v=tn_2Ie_jtX8",
  },

  {
    id: 12,
    title: "Dangal",
    image: dangal,
    year: 2016,
    genre: "Biography, Sports, Drama",
    description:
      "A former wrestler trains his daughters to become successful wrestlers and fulfill his dream.",
    duration: "2h 41min",
    releaseDate: "December 23, 2016",
    cast: "Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra",
    director: "Nitesh Tiwari",
    producer: "Aamir Khan, Kiran Rao, Siddharth Roy Kapur",
    trailer: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
  },

  {
    id: 13,
    title: "Chhichhore",
    image: chhichhore,
    year: 2019,
    genre: "Comedy, Drama",
    description:
      "A father shares his college memories with his son and teaches him that failure is not the end.",
    duration: "2h 23min",
    releaseDate: "September 6, 2019",
    cast: "Sushant Singh Rajput, Shraddha Kapoor, Varun Sharma",
    director: "Nitesh Tiwari",
    producer: "Sajid Nadiadwala",
    trailer: "https://www.youtube.com/watch?v=tsxemFX0a7k",
  },

  {
    id: 14,
    title: "Lakshya",
    image: lakshya,
    year: 2004,
    genre: "Drama, War",
    description:
      "A careless young man discovers his purpose and transforms himself through discipline and determination.",
    duration: "3h 6min",
    releaseDate: "June 18, 2004",
    cast: "Hrithik Roshan, Preity Zinta, Amitabh Bachchan",
    director: "Farhan Akhtar",
    producer: "Ritesh Sidhwani",
    trailer: "https://www.youtube.com/watch?v=YoKGmYyljmc",
  },

  {
    id: 15,
    title: "Swades",
    image: swades,
    year: 2004,
    genre: "Drama",
    description:
      "An Indian scientist returns to his village and decides to make a difference in the lives of its people.",
    duration: "3h 9min",
    releaseDate: "December 17, 2004",
    cast: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
    director: "Ashutosh Gowariker",
    producer: "Ashutosh Gowariker",
    trailer: "https://www.youtube.com/watch?v=vc7AZNWvs0M",
  },

  {
    id: 16,
    title: "Rang De Basanti",
    image: rangDeBasanti,
    year: 2006,
    genre: "Drama, Comedy",
    description:
      "A group of friends becomes aware of social problems and decides to take responsibility for change.",
    duration: "2h 47min",
    releaseDate: "January 26, 2006",
    cast: "Aamir Khan, Siddharth, Soha Ali Khan",
    director: "Rakeysh Omprakash Mehra",
    producer: "Rakeysh Omprakash Mehra, Ronnie Screwvala",
    trailer: "https://www.youtube.com/watch?v=QHhnhqxB4E8",
  },

  {
    id: 17,
    title: "English Vinglish",
    image: englishVinglish,
    year: 2012,
    genre: "Comedy, Drama",
    description:
      "A homemaker gains confidence and discovers her independence while learning English.",
    duration: "2h 14min",
    releaseDate: "October 5, 2012",
    cast: "Sridevi, Adil Hussain, Mehdi Nebbou",
    director: "Gauri Shinde",
    producer: "R. Balki, Sunil Lulla",
    trailer: "https://www.youtube.com/watch?v=wmGVY4T88dc",
  },

  {
    id: 18,
    title: "Queen",
    image: queen,
    year: 2013,
    genre: "Comedy, Drama",
    description:
      "A young woman travels alone after her wedding is cancelled and discovers her independence.",
    duration: "2h 26min",
    releaseDate: "March 7, 2014",
    cast: "Kangana Ranaut, Rajkummar Rao, Lisa Haydon",
    director: "Vikas Bahl",
    producer: "Anurag Kashyap, Vikramaditya Motwane, Madhu Mantena",
    trailer: "https://www.youtube.com/watch?v=M_HP8xgXhBU",
  },

  {
    id: 19,
    title: "Panga",
    image: panga,
    year: 2020,
    genre: "Sports, Drama",
    description:
      "A former kabaddi player gets a second chance to return to the sport and follow her dream.",
    duration: "2h 11min",
    releaseDate: "January 24, 2020",
    cast: "Kangana Ranaut, Jassie Gill, Richa Chadda",
    director: "Ashwiny Iyer Tiwari",
    producer: "Fox Star Studios",
    trailer: "https://www.youtube.com/watch?v=QDP6tCC8zTo",
  },

  {
    id: 20,
    title: "Mary Kom",
    image: maryKom,
    year: 2014,
    genre: "Biography, Sports, Drama",
    description:
      "The inspiring journey of a determined boxer who overcomes challenges to achieve her dreams.",
    duration: "2h 2min",
    releaseDate: "September 5, 2014",
    cast: "Priyanka Chopra, Darshan Kumaar, Sunil Thapa",
    director: "Omung Kumar",
    producer: "Sanjay Leela Bhansali, Viacom18 Motion Pictures",
    trailer: "https://www.youtube.com/watch?v=Q6ye1uZt90M",
  },

  {
    id: 21,
    title: "Bhaag Milkha Bhaag",
    image: bhaagMilkhaBhaag,
    year: 2013,
    genre: "Biography, Sports, Drama",
    description:
      "The remarkable journey of an athlete who overcomes his difficult past through hard work and determination.",
    duration: "3h 9min",
    releaseDate: "July 12, 2013",
    cast: "Farhan Akhtar, Sonam Kapoor, Divya Dutta",
    director: "Rakeysh Omprakash Mehra",
    producer: "Rakeysh Omprakash Mehra, Rajiv Tandon",
    trailer: "https://www.youtube.com/watch?v=3uICXnnW86U",
  },

  {
    id: 22,
    title: "Neerja",
    image: neerja,
    year: 2016,
    genre: "Biography, Thriller, Drama",
    description:
      "A brave flight attendant risks her life to protect passengers during a hijacking.",
    duration: "2h 2min",
    releaseDate: "February 19, 2016",
    cast: "Sonam Kapoor, Shabana Azmi, Yogendra Tiku",
    director: "Ram Madhvani",
    producer: "Atul Kasbekar, Shanti Sivaram Maini",
    trailer: "https://www.youtube.com/watch?v=7779JrWy04g",
  },

  {
    id: 23,
    title: "Airlift",
    image: airlift,
    year: 2016,
    genre: "Drama, Thriller",
    description:
      "A businessman takes responsibility for helping thousands of Indians escape a war zone.",
    duration: "2h 6min",
    releaseDate: "January 22, 2016",
    cast: "Akshay Kumar, Nimrat Kaur, Purab Kohli",
    director: "Raja Krishna Menon",
    producer: "Nikhil Advani, Monisha Advani, Madhu Bhojwani",
    trailer: "https://www.youtube.com/watch?v=vb5xCMbMfZ0",
  },

  {
    id: 35,
    title: "Kabaddi",
    image: kabaddi,
    year: 2013,
    genre: "Sports, Drama",
    description:
      "A sports drama centered around kabaddi, determination, discipline, and the spirit of competition.",
    duration: "2h 10min",
    releaseDate: "2013",
    cast: "Various Cast",
    director: "Various Director",
    producer: "Various Producer",
    trailer: "https://www.youtube.com/watch?v=FnKcMpp9-70",
  },

  {
    id: 25,
    title: "Wake Up Sid",
    image: wakeUpSid,
    year: 2009,
    genre: "Comedy, Drama",
    description:
      "A carefree young man learns about responsibility and discovers what he truly wants from life.",
    duration: "2h 18min",
    releaseDate: "October 2, 2009",
    cast: "Ranbir Kapoor, Konkona Sen Sharma, Supriya Pathak",
    director: "Ayan Mukerji",
    producer: "Dharma Productions",
    trailer: "https://www.youtube.com/watch?v=Ngimy3GpHS0",
  },

  {
    id: 26,
    title: "Nil Battey Sannata",
    image: nilBatteySannata,
    year: 2015,
    genre: "Drama",
    description:
      "A mother works hard to motivate her daughter to study and build a better future.",
    duration: "1h 40min",
    releaseDate: "April 22, 2016",
    cast: "Swara Bhasker, Ratna Pathak Shah, Riya Shukla",
    director: "Ashwiny Iyer Tiwari",
    producer: "Anand L. Rai, Ajay G. Rai",
    trailer: "https://www.youtube.com/watch?v=rGrhXaVyltc",
  },

  {
    id: 27,
    title: "Udaan",
    image: udaan,
    year: 2010,
    genre: "Drama",
    description:
      "A young boy struggles against family pressure while trying to follow his dream of becoming a writer.",
    duration: "2h 18min",
    releaseDate: "July 16, 2010",
    cast: "Rajat Barmecha, Ronit Roy, Aayan Boradia",
    director: "Vikramaditya Motwane",
    producer: "Anurag Kashyap, Sanjay Singh",
    trailer: "https://www.youtube.com/watch?v=wEJxe2bE-cE",
  },

  {
    id: 28,
    title: "M.S. Dhoni",
    image: msDhoni,
    year: 2016,
    genre: "Biography, Sports, Drama",
    description:
      "The journey of a small-town boy who works hard to become one of India's greatest cricketers.",
    duration: "3h 10min",
    releaseDate: "September 30, 2016",
    cast: "Sushant Singh Rajput, Kiara Advani, Disha Patani",
    director: "Neeraj Pandey",
    producer: "Arun Pandey, Fox Star Studios",
    trailer: "https://www.youtube.com/watch?v=6L6XqWoS8tw",
  },

  {
    id: 29,
    title: "Super 30",
    image: super30,
    year: 2019,
    genre: "Biography, Drama",
    description:
      "A teacher helps talented students from poor backgrounds prepare for India's toughest entrance exams.",
    duration: "2h 34min",
    releaseDate: "July 12, 2019",
    cast: "Hrithik Roshan, Mrunal Thakur, Pankaj Tripathi",
    director: "Vikas Bahl",
    producer: "Sajid Nadiadwala, Reliance Entertainment",
    trailer: "https://www.youtube.com/watch?v=QU4-LX7Xkwo",
  },

  {
    id: 30,
    title: "Shabaash Mithu",
    image: shabaashMithu,
    year: 2022,
    genre: "Biography, Sports, Drama",
    description:
      "The inspiring story of a young girl who overcomes obstacles to become a successful cricketer.",
    duration: "2h 36min",
    releaseDate: "July 15, 2022",
    cast: "Taapsee Pannu, Vijay Raaz, Mumtaz Sorcar",
    director: "Srijit Mukherji",
    producer: "Viacom18 Studios",
    trailer: "https://www.youtube.com/watch?v=FLd_ZeEe9pc",
  },

  {
    id: 31,
    title: "Jersey",
    image: jersey,
    year: 2022,
    genre: "Sports, Drama",
    description:
      "A former cricketer decides to return to the sport and fulfill his dream despite difficult circumstances.",
    duration: "2h 50min",
    releaseDate: "April 22, 2022",
    cast: "Shahid Kapoor, Mrunal Thakur, Pankaj Kapur",
    director: "Gowtam Tinnanuri",
    producer: "Aman Gill, Dil Raju, S. Naga Vamsi",
    trailer: "https://www.youtube.com/watch?v=BT0zd0kmTxM",
  },

  {
    id: 33,
    title: "Sita Ramam",
    image: sitaRamam,
    year: 2022,
    genre: "Romance, Drama",
    description:
      "A soldier receives mysterious love letters that lead him on an emotional journey of love and destiny.",
    duration: "2h 43min",
    releaseDate: "August 5, 2022",
    cast: "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna",
    director: "Hanu Raghavapudi",
    producer: "C. Aswani Dutt, Priyanka Dutt",
    trailer: "https://www.youtube.com/watch?v=PFcE1Rw5lmo",
  },

  {
    id: 34,
    title: "Kho Kho",
    image: khoKho,
    year: 2021,
    genre: "Sports, Drama",
    description:
      "A sports drama that highlights teamwork, determination, discipline, and the spirit of never giving up.",
    duration: "2h 2min",
    releaseDate: "April 14, 2021",
    cast: "Rajisha Vijayan, Mamitha Baiju, Venkitesh V P",
    director: "Rahul R Sharma",
    producer: "First Print Studios",
    trailer: "https://www.youtube.com/watch?v=rHoC_JEnmA0",
  },
];

export default movies;
