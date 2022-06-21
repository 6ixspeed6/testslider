let menuIcon = document.querySelector('.icon-menu')
let menuBody = document.querySelector('.menu__list')
let lockScroll = document.querySelector('body')

menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('_active')
   menuBody.classList.toggle('_active')
   lockScroll.classList.toggle('_lock')
})


