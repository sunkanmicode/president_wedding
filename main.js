const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ];
    




const wedDate = document.querySelector('.wed-date');
const endDate = document.querySelector(".end-date");
const outcome = document.querySelector('h3');
const countDown = document.querySelectorAll('.time p');
const deadline = document.querySelector('.deadline')


const futureDate = new Date(2022, 09, 06, 12, 00, 0);
const endingDate = new Date(2022, 09, 09, 10, 00, 0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate()
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

const year2 = endingDate.getFullYear();
const hours2 = endingDate.getHours();
const mins2 = endingDate.getMinutes();
const date2 = endingDate.getDate();
let month2 = endingDate.getMonth();
month2 = months[month2];
let weekday2 = endingDate.getDay();
weekday2 = weekdays[weekday2];


wedDate.innerHTML = ` ${weekday}  ${date}th ${month} ${year}, ${hours}:0${mins}pm`
endDate.innerHTML = ` ${weekday2}  ${date2}th ${month2} ${year2}, ${hours2}:0${mins2}am`;

const futureTime = futureDate.getTime();


const getCountDownStart = () =>{
  const today = new Date().getTime();
  const countDate = futureDate - today;
  
  // 1s = 1000
  // 1m = 60s
  // 1h = 60m
  // 1d = 24
  
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;
  
  const days = Math.floor(countDate/oneDay);
  const  hours = Math.floor((countDate % oneDay) / oneHour);
  const mins = Math.floor((countDate % oneHour)/oneMin );
  const secs = Math.floor((countDate % oneMin)/1000);
  
  
  const value = [days, hours, mins, secs];

  const format =(item)=>{
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  countDown.forEach((item, index) =>{
    return item.innerHTML = format(value[index])
 });
 if(countDate < 0){
   clearInterval(counter)
   deadline.innerHTML = `<h2>Congraduations  <br> Dr  and Mrs Dr Joseph</h2>`;
 }
  
  
};
const counter = setInterval(getCountDownStart, 1000);
getCountDownStart();


const sideNav = document.querySelector('.sideNav');
const manuBtn = document.querySelector('.manuBtn');
const photoGallery = document.querySelector('.photo-gallery');
const bestiesGallery = document.querySelector('.besties-gallery')

manuBtn.addEventListener('click', () => {
  sideNav.classList.toggle('showNav')
});

sideNav.addEventListener('click', () => {
  sideNav.classList.remove('showNav')
});

const pictures = [
  {
    id: 6,
    category: "intro",
    image: "./img/ov1.jpg",
  },
  {
    id: 7,
    category: "intro",
    image: "./img/ov2.jpg",
  },
  {
    id: 8,
    category: "intro",
    image: "./img/ov3.jpg",
  },
  {
    id: 14,
    category: "intro",
    image: "./img/ov4.jpg",
  },
  {
    id: 15,
    category: "All",
    image: "./img/ov5.jpg",
  },
  {
    id: 16,
    category: "All",
    image: "./img/ov6.jpg",
  },
  {
    id: 9,
    category: "intro",
    image: "./img/ov7.jpg",
  },
  {
    id: 10,
    category: "intro",
    image: "./img/ov8.jpg",
  },
  {
    id: 13,
    category: "intro",
    image: "./img/ov9.jpg",
  },
  {
    id: 3,
    category: "All",
    image: "./img/ov10.jpg",
  },
  {
    id: 4,
    category: "All",
    image: "./img/ov11.jpg",
  },
  // {
  //   id: 5,
  //   category: "All",
  //   image: "./img/ov12.jpg",
  // },
  {
    id: 5,
    category: "All",
    image: "./img/ov13.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov14.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov15.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov16.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov17.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov18.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov19.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov20.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov21.png",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov22.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov23.jpg",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov24.png",
  },
  {
    id: 5,
    category: "All",
    image: "./img/ov25.jpg",
  },
  // {
  //   id: 5,
  //   category: "All",
  //   image: "./img/ov26.png",
  // },
  // {
  //   id: 5,
  //   category: "All",
  //   image: "./img/pic(5).jpg",
  // },
  // {
  //   id: 5,
  //   category: "All",
  //   image: "./img/pic(5).jpg",
  // },
  // {
  //   id: 5,
  //   category: "All",
  //   image: "./img/pic(5).jpg",
  // },
];
const besties = [
  // {
  //   id: 1,
  //   images: "./img/photo (2).jpg",
  //   name: "Noel"
  // },
  {
    id: 2,
    images: "./img/img5.jpg",
    name: "Mickhee",
    postion: "student and a chef",
  },
  {
    id: 3,
    images: "./img/img6.jpg",
    name: "Aidee",
    postion: "student,CEO wearidara",
  },
  {
    id: 4,
    images: "./img/img7.jpg",
    name: "Lizzy Udo",
    postion: "makeup artist",
  },
  // {
  //   id: 5,
  //   images: "./img/img8.jpg",
  //   name: "Vivian",
  // },
  {
    id: 6,
    images: "./img/img9.jpg",
    name: "Princess",
    postion: "Realtor/business enterpreneur",
  },
  {
    id: 7,
    images: "./img/img10.jpg",
    name: "Sunshine",
    postion: "Makeup artist",
  },
  {
    id: 8,
    images: "./img/img11.jpg",
    name: "Justpretty",
    postion: "Hair stylist",
  },
  {
    id: 9,
    images: "./img/img12.jpg",
    name: "Joan",
    postion: "Public Health officer",
  },
  {
    id: 10,
    images: "./img/img13.jpg",
    name: "Kelsy",
    postion: "Realtor",
  },
  {
    id: 11,
    images: "./img/img14.jpg",
    name: "Havilah",
    postion: "Realtor and a fashion Designer",
  },
  {
    id: 12,
    images: "./img/img15.png",
    name: "Helene",
    postion: "Data analyst(Tech)",
  },
  {
    id: 12,
    images: "./img/img16.jpg",
    name: "Blairson",
    postion: "Business Enterpreneur",
  },
  {
    id: 12,
    images: "./img/img17.jpg",
    name: "QueenBey",
    postion: "Model",
  },
  {
    id: 12,
    images: "./img/img18.jpg",
    name: "Diamond",
    postion: "CEO Tonia bedding and interiors",
  },
  {
    id: 12,
    images: "./img/img19.jpg",
    name: "Investor",
    postion: "Lawyer",
  },
  {
    id: 12,
    images: "./img/img20.jpg",
    name: "Wealth",
    postion: "Nurse",
  },
  {
    id: 12,
    images: "./img/guy1.jpg",
    name: "Ezekiel-Hart Michael",
    postion: "Supretendent of immigration service",
  },
  {
    id: 12,
    images: "./img/guy2.jpg",
    name: "Ojike Francis Onyedikachi",
    postion: "Medical Doctor",
  },
  {
    id: 12,
    images: "./img/guy3.jpg",
    name: "Blessing Menim",
    postion: "SA (Media) Ministry of Information and Strategy",
  },
  {
    id: 12,
    images: "./img/guy5.jpg",
    name: "OJIAKO, DARLINGTON CHRISTIAN ",
    postion: "MD/CEO, COMPANY ZEE DARLS PHARMACEUTICAL LIMITED",
  },
  {
    id: 12,
    images: "./img/guy4.jpg",
    name: "Dr Akaka Bassey",
    postion: "State Clinical Mentor Ministry of Health Delta State",
  },
  {
    id: 12,
    images: "./img/guy6.jpg",
    name: "BIZZY",
    postion: " ED Technical, RAEBONY Associates, Nigeria.",
  },
  {
    id: 12,
    images: "./img/guy7.jpg",
    name: "Blaise paschal Uzoma",
    postion: "Chairman SCHUZOMAHN HOLDINGS, & CO FOUNDER of MELODY AUTOS.",
  },
  // {
  //   id: 12,
  //   images: "./img/guy8.jpg",
  //   name: "Jumbo Ubong",
  //   postion: "Medical Doctor",
  // },
  {
    id: 12,
    images: "./img/guy9.jpg",
    name: "Mfoniso Atan Strota",
    postion: "Software engineer,Gadget/property Sales agent.",
  },
  {
    id: 12,
    images: "./img/guy10.jpg",
    name: "BIG WIZ",
    postion: "BUSINESS MAN(GADGETS)",
  },
  {
    id: 12,
    images: "./img/guy11.jpg",
    name: "Kingsman ",
    postion: "CEO KV-STAR world",
  },
  {
    id: 12,
    images: "./img/guy12.jpg",
    name: "Essien God’spower Unwana",
    postion: "A medical Doctor Clinician at Heartland Alliance",
  },
  {
    id: 12,
    images: "./img/guy13.jpg",
    name: "Ukeme Akpabio",
    postion: "Medical Doctor",
  },
  {
    id: 12,
    images: "./img/guy14.jpg",
    name: "Ray Johnson. ",
    postion: "Fashion Designer | Digital Nomad, Creative Director.",
  },
  {
    id: 12,
    images: "./img/guy15.jpg",
    name: "CEO of Aresclothier",
    postion: "A Quantity surveyor and a stylist",
  },
  {
    id: 12,
    images: "./img/guy16.jpg",
    name: "Grant Triston ",
    postion: "Content creator Owner of TRIMMED",
  },
  {
    id: 12,
    images: "./img/guy17.jpeg",
    name: "Akwa Joseph",
    postion: "Entrepreneur",
  },
  {
    id: 12,
    images: "./img/guy18.jpg",
    name: "Robert Umoh",
    postion: "Business Development Manager, Rodees Limited",
  },
  {
    id: 12,
    images: "./img/guy19.jpg",
    name: "Ifiok Abasi Ekpenyong",
    postion: "Medical Doctor",
  },
  {
    id: 12,
    images: "./img/guy20.jpg",
    name: "Kufre",
    postion: "CEO @blinzxstitches A Quantity surveyor",
  },
  {
    id: 12,
    images: "./img/guy21.jpg",
    name: "Alhaji Cashwire.",
    postion: "Bureau de change",
  },
  {
    id: 12,
    images: "./img/guy22.jpg",
    name: "Daniel Akwaima Ekpo",
    postion: "Consultant, A Data Analyst ( Tech )",
  },
  {
    id: 12,
    images: "./img/guy23.jpg",
    name: "Chef Iykay Monday",
    postion: "CEO Iykay's Belle Matters",
  },
  {
    id: 12,
    images: "./img/guy24.jpg",
    name: "Victor isong",
    postion: "Data analyst",
  },
  // {
  //   id: 12,
  //   images: "./img/guy16.jpg",
  //   name: "Grant Triston ",
  //   postion: "Content creator Owner of TRIMMED",
  // },
];


window.addEventListener('DOMContentLoaded', ()=>{
  displayPictures();
  
});

const displayPictures = () =>{
  const displayPic = pictures.map((pic) =>{
    return `<div class="col-4">
            <img src="${pic.image}" alt="">
            </div> `
  });
  const displayPhoto = besties.map((photo) =>{
    return `<div class="col-3">
            <img src="${photo.images}" alt="">
            <p>${photo.name}</p>
            <p>${photo.postion}</p>
            </div> `;
  })
  showPhoto = displayPhoto.join('')
    bestiesGallery.innerHTML = showPhoto;
  showPicture = displayPic.join('')
    photoGallery.innerHTML = showPicture;
}










