const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

// console.log (rightbtn)
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display = "none"
})
// ------------------Slider----------------
const imgnumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')

rightbtn.addEventListener("click",function(){
    index = index + 1
    if(index > imgnumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})

leftbtn.addEventListener("click",function(){
    index = index - 1
    if(index <= 0){
        index = imgnumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.left = index * 100 + "%"
})
/* -----------------Slider1---------------------------------*/
const imgnumberLi = document.querySelectorAll('.slider-content-left-bottom li')
let imageactive = document.querySelector('.active')
imgnumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"       
        image.classList.add("active")
    })
})
function removeactive(){
    let imageactive = document.querySelector('.active')
    imageactive.classList.remove("active")
}
/* ----------slider2---------*/
function imgauto(){
    index = index + 1
    if(index > imgnumber.length-1){
        index = 0
    }
    removeactive()
    imgnumberLi[index].classList.add("active")
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
}
setInterval(imgauto,1000)
