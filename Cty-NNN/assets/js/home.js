const btn = document.querySelector('.header-btn');
const subnav = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');
const header = document.querySelector('.header-menu');
var heightNow =100;
//show menu con
btn.addEventListener("click", () => {
    subnav.classList.toggle("show-nav")
    logo.classList.toggle("show-logo")
})

function showSubmenu(cl){
    const item = document.querySelectorAll('.item-submenu');
    const icon = document.querySelectorAll('.icon')
    for( let i =0; i<item.length; i++){
        if(i != cl){
        item[i].classList.remove('show-submenu');  
        }
    }
    item[cl].classList.toggle('show-submenu');
    icon[cl].classList.toggle('show-icon')
}


// phan slide
window.addEventListener("scroll", function (event) {
    const scroll = this.scrollY;
    let mainSlide = this.document.getElementById("main-slide").offsetHeight;
    let main = this.document.getElementById("main-slide");
    let right = this.document.getElementById("right").offsetHeight;
    const slide = this.document.getElementById('img');
    let mainContent = this.document.querySelector('.main-content').offsetHeight;

    let cao = mainContent - mainSlide -100;
    main.style.height=`${right}px`
    if( scroll > cao ){
        slide.style.position='fixed';
        slide.style.top = '0';
        slide.style.width = '50%';
    }
    if( scroll < cao ){
        slide.style.position='relative';
        slide.style.width = '50%';
    }
    if(scroll > (cao + right - slide.offsetHeight - 100)){
        slide.style.position='absolute';
        slide.style.bottom='0';
        slide.style.top = `${right - slide.offsetHeight}px`;
        slide.style.left = '0';
        slide.style.width = '50%';
    }

    //phan menu
    if(scroll < 100){
        header.classList.remove("show-up")
        logo.classList.remove("show-logo")
        header.classList.remove("show-dow")
        header.style.width="100%"

    }
    console.log(scroll)
    if(scroll < heightNow && scroll > 100){
        logo.classList.add("show-logo")
        header.classList.add("show-up")
        header.classList.remove("show-dow")
        header.style.width="100%"


      
    } if(scroll > heightNow && scroll > 100) {
        header.classList.remove("show-up")
        header.classList.add("show-dow")
        header.style.width="100%"

    }
     heightNow = scroll;
});


