// RESPONSIVE MENU

class MobileNavbar {
  constructor(mobileMenu, navList) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }

    return this;
  }
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list");

mobileNavbar.init();

// COUNTDOWN

function countDays() {
  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, '0');
  const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
  const currentYear = date.getFullYear();

  let weddingDate = new Date("04/29/2023");
  let currentDate = new Date(`${currentMonth}/${currentDay}/${currentYear}`);

  const differenceOfDays = currentDate.getTime() - weddingDate.getTime();

  document.querySelector('#timer').innerHTML = Math.floor(differenceOfDays / (1000 * 60 * 60 * 24));
}

countDays();

// new Countdown({
//   selector: "#timer",
//   msgAfter: "O Evento Iniciou!",
//   msgPattern: "{days}",
//   dateEnd: new Date("2023-04-29T12:00:00"),
// });

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// PHOTOS SLIDER

let backGalleryPhotoButton = document.querySelector(".btn-back");
let nextGalleryPhotoButton = document.querySelector(".btn-next");

let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");
let radio3 = document.querySelector("#radio3");
let radio4 = document.querySelector("#radio4");
let radio5 = document.querySelector("#radio5");
let radio6 = document.querySelector("#radio6");
let radio7 = document.querySelector("#radio7");
let radio8 = document.querySelector("#radio8");
let radio9 = document.querySelector("#radio9");
let radio10 = document.querySelector("#radio10");

let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");
let label3 = document.querySelector("#label3");
let label4 = document.querySelector("#label4");
let label5 = document.querySelector("#label5");
let label6 = document.querySelector("#label6");
let label7 = document.querySelector("#label7");
let label8 = document.querySelector("#label8");
let label9 = document.querySelector("#label9");
let label10 = document.querySelector("#label10");

let activeClass = "active";
let counter = 1;

label1.classList.add(activeClass);

radio1.addEventListener("click", function () {
  label1.classList.add(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);

  counter = 1;
});

radio2.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.add(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);
  counter = 2;
});

radio3.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.add(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);
  counter = 3;
});

radio4.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.add(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);
  counter = 4;
});

radio5.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.add(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);
  counter = 5;
});

radio6.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.add(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);
  counter = 6;
});

radio7.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.add(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);
  counter = 7;
});

radio8.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.add(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.remove(activeClass);
  counter = 8;
});

radio9.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.add(activeClass);
  label10.classList.remove(activeClass);
  counter = 9;
});

radio10.addEventListener("click", function () {
  label1.classList.remove(activeClass);
  label2.classList.remove(activeClass);
  label3.classList.remove(activeClass);
  label4.classList.remove(activeClass);
  label5.classList.remove(activeClass);
  label6.classList.remove(activeClass);
  label7.classList.remove(activeClass);
  label8.classList.remove(activeClass);
  label9.classList.remove(activeClass);
  label10.classList.add(activeClass);
  counter = 10;
});

for (let i = 1; i < 11; i++) {
  if (document.querySelector("#radio" + i).checked) {
    counter = i;
  }
}

backGalleryPhotoButton.addEventListener("click", backGalleryPhoto);
nextGalleryPhotoButton.addEventListener("click", nextGalleryPhoto);

function backGalleryPhoto() {
  if (counter == 1) {
    counter = 10;
  } else {
    counter--;
  }

  document.querySelector("#radio" + counter).checked = true;

  if (document.querySelector("#radio" + counter).checked) {
    let labelChecked = document.querySelector("#label" + counter);

    label1.classList.remove(activeClass);
    label2.classList.remove(activeClass);
    label3.classList.remove(activeClass);
    label4.classList.remove(activeClass);
    label5.classList.remove(activeClass);
    label6.classList.remove(activeClass);
    label7.classList.remove(activeClass);
    label8.classList.remove(activeClass);
    label9.classList.remove(activeClass);
    label10.classList.remove(activeClass);
    labelChecked.classList.add(activeClass);
  }
}

function nextGalleryPhoto() {
  if (counter == 10) {
    counter = 1;
  } else {
    counter++;
  }

  document.querySelector("#radio" + counter).checked = true;

  if (document.querySelector("#radio" + counter).checked) {
    let labelChecked = document.querySelector("#label" + counter);

    label1.classList.remove(activeClass);
    label2.classList.remove(activeClass);
    label3.classList.remove(activeClass);
    label4.classList.remove(activeClass);
    label5.classList.remove(activeClass);
    label6.classList.remove(activeClass);
    label7.classList.remove(activeClass);
    label8.classList.remove(activeClass);
    label9.classList.remove(activeClass);
    label10.classList.remove(activeClass);
    labelChecked.classList.add(activeClass);
  }
}

// PHOTOS ROW

// let imagesPhotosRow = document.querySelectorAll('.img')

// setInterval(function() {
//   let randomNumber = Math.floor(Math.random() * 15)

//   if (randomNumber == 0) {
//     randomNumber = 1
//   }

//   let randomPhoto = Math.floor(Math.random() * 5)
//     imagesPhotosRow[randomPhoto].style.backgroundImage = `url(img/ourhistory/${randomNumber}.jpg)`
// }, 500)

// document.querySelector("#audio").volume = .1
