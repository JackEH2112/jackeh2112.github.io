let images = document.getElementsByClassName('showMe')

let clickers = document.getElementsByClassName('clickMe')

function hideImages(images){
    for (i=0; i<images.length; i++){
        images[i].style.display = 'none';
    }
}

window.onload = hideImages(images);

function toggleImages(argument){
    if(argument.style.display === 'none'){
        argument.style.display = 'block';
        console.log('Hello!');
    }
    else{
        argument.style.display = 'none';
        console.log('Goodbye!');
    }
}

clickers[0].onclick = function(){
    toggleImages(images[0]);
}
clickers[1].onclick = function(){
    toggleImages(images[1]);
}

const navigationBar = document.querySelector('nav');
//const htmlElem = document.querySelector(':root')

document.addEventListener('scrollend', fadeNavOut);
navigationBar.addEventListener('mouseover', fadeNavIn);

function fadeNavOut() {
    console.log('Scrolling ended, goodnight');
    navigationBar.classList.remove('fadein');
    navigationBar.classList.add('fadeout');
}

function fadeNavIn(){
    console.log('Hover! Hello again');
    navigationBar.classList.remove('fadeout');
    navigationBar.classList.add('fadein');
}
    

let email = document.getElementById('myEmail')

console.log(email);

function screenWidthRestrictionOne(x){
    if (x.matches){
        email.style.display = 'none'
    }
    else{
        email.style.display = 'block'
    }
}

var x = window.matchMedia('(max-width: 1024px')

screenWidthRestrictionOne(x);

x.addEventListener('change', function(){
    screenWidthRestrictionOne(x);
});

let column = document.getElementById('size')

function screenWidthRestrictionTwo(y){
    if (y.matches){
        column.cols = "45  ";
    }
    else{
        column.cols = "30";
    }
}

var y = window.matchMedia('(orientation:portrait)')

screenWidthRestrictionTwo(y);

y.addEventListener('change', function(){
    screenWidthRestrictionTwo(y);
});

