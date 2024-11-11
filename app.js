'use strict';

//store dom elements
const countEl = document.querySelector('.count');
const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const btnIncrease = document.querySelector('.btn-increase');
//initialize a count variable
let count = 0;

const countColor = function () {
  if (count === 0) {
    countEl.style.color = '#000';
  } else if (count > 0) {
    countEl.style.color = 'green';
  } else {
    countEl.style.color = 'red';
  }
};

// When user clicks 'increase' button
btnIncrease.addEventListener('click', function () {
  count++;
  countColor();
  countEl.textContent = count;
});

// When user clicks 'decrease' button
btnDecrease.addEventListener('click', function () {
  count--;
  countColor();
  countEl.textContent = count;
});

// When user clicks 'decrease' button
btnReset.addEventListener('click', function () {
  count = 0;
  countColor();
  countEl.textContent = count;
});
