const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

var elemCont = document.querySelector('.elem-container')
var fixed = document.querySelector('.fixed-img')
var elems = document.querySelectorAll('.elem')

elems.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
        var img = e.getAttribute('data-img')
        fixed.style.backgroundImage = `url(${img})`
    })
})

elemCont.addEventListener('mouseenter', function (d) {
    fixed.style.display = "block"
})

elemCont.addEventListener('mouseleave', function (d) {
    fixed.style.display = "none"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    freeMode: true,
});

var loader = document.querySelector('.loader')
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);