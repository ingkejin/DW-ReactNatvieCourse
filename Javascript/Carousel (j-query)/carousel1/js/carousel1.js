let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
console.log(btn1, btn2, btn3);

btn1.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(0)';
})

btn2.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
})

btn3.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
})