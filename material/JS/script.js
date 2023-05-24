/*  SHOW MENU */
const showMenu = function(toggleID, navID){
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navID);

    if(toggle && nav)
    {
        toggle.addEventListener('click', function(){
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*  REMOVE MOBILE MENU */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(function(n){
    n.addEventListener('click', linkAction)
})


/*  SCROLL SECTION ACTIVE LINK  */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(function(current){
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* CHANGE HEADER BACKGROUND */
function scrollHeader(){
    const header = document.getElementById('header')
    {
        if(this.scrollY >= 200)
        {
            header.classList.add('scroll-header')
        }
        else{
            header.classList.remove('scroll-header')
        }
    }
}
window.addEventListener('scroll', scrollHeader)

/* SHOW SCROLL TOP */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    {
        if(this.scrollY >= 560)
        {
            scrollTop.classList.add('show-scroll')
        }
        else{
            scrollTop.classList.remove('show-scroll')
        }
    }
}
window.addEventListener('scroll', scrollTop)

/* FILTER PORTFOLIO */
const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 300
    }
});

/* LINK PORTFOLIO */
const linkPortfolio = document.querySelectorAll('.portfolio_item')

function activePortfolio(){
    if(linkPortfolio)
    {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))


/* TESTIMONIAL SWIPER */
const swiper = new Swiper('.testimonial_container', {
    
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
});

/* G-SAP ANIMATION*/
gsap.from('.home_img', {opacity: 0, duration: 2,  delay:.5,  x:60}) 
gsap.to('.home_data', {opacity: 0, duration: 2,  delay:.8,  y:25}) 