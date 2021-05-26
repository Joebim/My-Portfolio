const hamburger = document.querySelector(".hamburger")
const navLink = document.querySelector(".nav-link-wrapper")

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('show')
    console.log('testing')
})