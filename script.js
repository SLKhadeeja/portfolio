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

// const sendEmail = () => { 
//   Email.send({ 
//     Host: "smtp.gmail.com", 
//     Username: "sender@email_address.com", 
//     Password: "Enter your password", 
//     To: 'receiver@email_address.com', 
//     From: "sender@email_address.com", 
//     Subject: "Sending Email using javascript", 
//     Body: "Well that was easy!!", 
//   }) 
//     .then(function (message) { 
//       alert("mail sent successfully") 
//     }); 
// } 