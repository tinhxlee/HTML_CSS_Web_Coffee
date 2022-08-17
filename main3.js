
var images = [
    './image/Slider/1.png',
    './image/Slider/2.jpg',
    './image/Slider/3.jpg',
    './image/Slider/4.jpg',
    
];
var num = 0 ;
function next(){
    var slider = document.getElementById('slider');
    num ++ ;
    if(num >= images.length)
    {
        num = 0 ;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
setInterval(function(){
    next();

},5000)

// Model buy
const model = document.querySelector('.model-buy');
const buyBtns = document.querySelectorAll('.buy');
function showLogin(){
    model.style.display = 'flex';
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showLogin);
}
function closeLogin(){
    model.style.display = 'none';
}
model.addEventListener('click',closeLogin);
// Input email
const btnEmail = document.querySelector('.btn');
let modelEmail = document.querySelector('.success-email')
let inputID = document.getElementById('input-id');
function success(){
    if(inputID.value == ''){
        alert('Hay nhap email');
    }
    else {
        modelEmail.style.display = 'flex';
    }
}
function closeSuccess(){
    modelEmail.style.display = 'none';
}
modelEmail.addEventListener('click',closeSuccess);
// Mobile - menu
let menuBtn = document.getElementById('menu-mobile-id');
let menuList = document.getElementById('nav-list-id');
menuBtn.addEventListener('click',displayListMenu);
function displayListMenu(){
    if(menuList.style.display == 'none'){
        menuList.style.display = 'block';
    }
    else{
        menuList.style.display = 'none';
    }
}
