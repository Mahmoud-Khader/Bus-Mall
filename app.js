/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
'use strict';
//Global Elements

let leftImageElement = document.getElementById('leftImage');
let rightImageElement = document.getElementById('rightImage');
let middleImageElement = document.getElementById('middleImage');
let divElement = document.getElementById('images-div');
let resultsList = document.getElementById('results');

let leftImageIndex;
let rightImageIndex;
let middleImageIndex;
let maxAttempts = 25;
let attemptsCounter = 0;

let allImages = [];

function Images(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.views = 0;
  allImages.push(this);
}

new Images('bag', 'img/bag.jpg');
new Images('banana', 'img/banana.jpg');
new Images('bathroom', 'img/bathroom.jpg');
new Images('boots', 'img/boots.jpg');
new Images('breakfast', 'img/breakfast.jpg');
new Images('bubblegum', 'img/bubblegum.jpg');
new Images('chair', 'img/chair.jpg');
new Images('cthulhu', 'img/cthulhu.jpg');
new Images('dog-duck', 'img/dog-duck.jpg');
new Images('dragon', 'img/dragon.jpg');
new Images('pen', 'img/pen.jpg');
new Images('pet-sweep', 'img/pet-sweep.jpg');
new Images('scissors', 'img/scissors.jpg');
new Images('sweep', 'img/sweep.png');
new Images('shark', 'img/shark.jpg');
new Images('tauntaun', 'img/tauntaun.jpg');
new Images('unicorn', 'img/unicorn.jpg');
new Images('water-can', 'img/water-can.jpg');
new Images('wine-glass', 'img/wine-glass.jpg');

// random Index
function randomIndex() {
  return Math.floor(Math.random() * allImages.length);
}

// Render Function

function render() {
  leftImageIndex = randomIndex();
  rightImageIndex = randomIndex();
  middleImageIndex = randomIndex();

  while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex) {

    leftImageIndex = randomIndex();
    rightImageIndex = randomIndex();
  }

  leftImageElement.src = allImages[leftImageIndex].source;
  rightImageElement.src = allImages[rightImageIndex].source;
  middleImageElement.src = allImages[middleImageIndex].source;

  allImages[leftImageIndex].views++;
  allImages[rightImageIndex].views++;
  allImages[middleImageIndex].views++;

  console.log(allImages);
}
render();

divElement.addEventListener('click', userClick);

function userClick(event) {

  if (attemptsCounter < maxAttempts) {

    if (event.target.id === 'leftImage') {
      allImages[leftImageIndex].votes++;

    } else if (event.target.id === 'rightImage') {
      allImages[rightImageIndex].votes++;

    } else {
      allImages[middleImageIndex].votes++;
    }
    attemptsCounter++;
    render();


  } else {
    divElement.removeEventListener('click', userClick);
    /*leftImageElement.removeEventListener('click', userClick);
        rightImageElement.removeEventListener('click', userClick);
        middleImageElement.removeEventListener('click', userClick);*/
    let list = document.getElementById('results');
    let btn = document.getElementById('btn');
    btn.addEventListener('click', viewResult);
    function viewResult() {

      let liElement;
      for (let i = 0; i < allImages.length; i++) {
        liElement = document.createElement('li');
        list.appendChild(liElement);
        liElement.textContent = `${allImages[i].name} has ${allImages[i].votes}  votes and has ${allImages[i].views} Images shown `;

      }
    }
  }

}
