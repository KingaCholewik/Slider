const slideList = [
  {
    img: 'image1.jpg',
    text: 'First text',
  },
  {
    img: 'image2.jpg',
    text: 'Second text',
  },
  {
    img: 'image3.jpg',
    text: 'Third text',
  },
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

//Interface
const time = 5000;
let active = 0;
let indexInterval;

//Implementation
const changeDot = () => {
  let activeDot = dots.findIndex((dot) => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};

const keyChangeSlide = (e) => {
  clearInterval(indexInterval);
  if (e.keyCode === 37) {
    if (active === 0) {
      active = slideList.length;
    }
    active--;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
  } else if (e.keyCode === 39) {
    active++;
    if (active === slideList.length) {
      active = 0;
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
  }
  indexInterval = setInterval(changeSlide, time);
};

indexInterval = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide);
