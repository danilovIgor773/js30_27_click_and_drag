import './index.scss';

const slider = document.querySelector('.items');
//console.log(slider);
let startX;
let isDown = false;
let scrollLeft;

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  //console.log({startX, scrollLeft});
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown){
    return;
  }
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  console.log(walk);
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
