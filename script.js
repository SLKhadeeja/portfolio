const navElement = document.querySelector(".navbar");
const navButton = document.querySelector("#nav-button");
const sidebar = document.querySelector(".sidebar")

const changeToSolidNav = () => {
  window.onscroll = function (e){
    if (this.scrollY > 50) {
      navElement.classList.add('solid');
    } else {
      navElement.classList.remove('solid');
    }
  }
}

const openSidebar = () => {
  sidebar.classList.add('open');
}

const closeSidebar = () => {
  sidebar.classList.remove('open');
}

window.addEventListener("scroll", changeToSolidNav);