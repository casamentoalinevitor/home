// RESPONSIVE MENU

class MobileNavbar {
    constructor(mobileMenu, navList) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }

        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
)

mobileNavbar.init()

// COUNTDOWN

new Countdown({
    selector: '#timer',
    msgAfter: "O Evento Iniciou!",
    msgPattern: "{days}",
    dateEnd: new Date("2023-04-29T12:00:00"),
});

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// PHOTOS SLIDER

let backGalleryPhotoButton = document.querySelector('.btn-back')
let nextGalleryPhotoButton = document.querySelector('.btn-next')
let counter = 1

for (let i = 1; i < 6; i++) {
  if (document.querySelector('#radio' + i).checked) {
    counter = i
  }
}

backGalleryPhotoButton.addEventListener('click', backGalleryPhoto)
nextGalleryPhotoButton.addEventListener('click', nextGalleryPhoto)

function backGalleryPhoto() {
  if (counter == 1) {
    counter = 5
  } else {
    counter--
  }

  document.querySelector('#radio' + counter).checked = true
}

function nextGalleryPhoto() {
  if (counter == 5) {
    counter = 1
  } else {
    counter++
  }
  
  document.querySelector('#radio' + counter).checked = true
}

// PHOTOS ROW

let imagesPhotosRow = document.querySelectorAll('.img')
let imagePhotosRow1 = document.querySelector('#img1')
let imagePhotosRow2 = document.querySelector('#img2')
let imagePhotosRow3 = document.querySelector('#img3')
let imagePhotosRow4 = document.querySelector('#img4')
let imagePhotosRow5 = document.querySelector('#img5')

setInterval(function() {
  let randomNumber = Math.floor(Math.random() * 15)

  if (randomNumber == 0) {
    randomNumber = 1
  }

  console.log(randomNumber)

  let randomPhoto = Math.floor(Math.random() * 5)
  console.log('Foto:' + randomPhoto)

    imagesPhotosRow[randomPhoto].style.backgroundImage = `url(img/ourhistory/${randomNumber}.jpg)`
}, 2000)

function gerarNumeroAleatorio(elemento) {
  let randomNumber1 = Math.round(Math.random() * 15)
  let randomNumber2 = Math.round(Math.random() * 15)
  let randomNumber3 = Math.round(Math.random() * 15)
  let randomNumber4 = Math.round(Math.random() * 15)
  let randomNumber5 = Math.round(Math.random() * 15)

  if (randomNumber1 != randomNumber2 && randomNumber1 != randomNumber3 && randomNumber1 != randomNumber4 && randomNumber1 != randomNumber5) {
    imagePhotosRow1.style.backgroundImage = `url(img/ourhistory/${randomNumber1}.jpg)`
  }
}

document.querySelector("#audio").volume = .1