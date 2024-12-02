const randomNumber1 = Math.floor(Math.random()*6)+1;
const randomImage = 'dice'+ randomNumber1 + '.png';
const imageSource = 'images/'+randomImage;

document.querySelectorAll('img')[0].setAttribute('src',imageSource);

const randomNumber2 = Math.floor(Math.random()*6)+1;
const randomImage2 = 'dice'+ randomNumber2 + '.png';
const imgSource = 'images/'+randomImage2;

document.querySelectorAll('img')[1].setAttribute('src',imgSource);

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 1 win....'
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 2 win....'
}
else{
    document.querySelector('h1').innerHTML = 'Draw....'
}

document.querySelector('button').addEventListener('click',function(){
    window.location.reload();
})