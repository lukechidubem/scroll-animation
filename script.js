'use strict';

const boxes = document.querySelectorAll('.box');

const scrolling = function () {
  const trigger = (window.innerHeight / 5) * 4;
  boxes.forEach(function (box) {
    const boxTop = box.getBoundingClientRect().top;
    if (trigger > boxTop) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
};

scrolling();
window.addEventListener('scroll', scrolling);
