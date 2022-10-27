const main = document.querySelector('main')
const mode = document.querySelector('.mode')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const footer = document.querySelector('footer')
const sub2 = document.querySelector('.sub2')
const content = document.querySelectorAll('.content')
const infoSub = document.querySelectorAll('.info-sub')
const box1 = document.querySelectorAll('.box1')
const nav1 = document.querySelectorAll('.nav1')

mode.addEventListener('click', function(){
    moon.classList.toggle('display-moon')
    sun.classList.toggle('remove-sun')
    main.classList.toggle('main-change')
    footer.classList.toggle('footer-change')
    sub2.classList.toggle('text-change')
    content.forEach(function(contents){
        contents.classList.toggle('color-change')
    })
    infoSub.forEach(function(infos){
        infos.classList.toggle('color-change')
    })
    box1.forEach(function(boxes){
        boxes.classList.toggle('color-change')
    })
    nav1.forEach(function(navs){
        navs.classList.toggle('nav-change')
    })
})