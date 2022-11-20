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