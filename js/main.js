const curtain = document.querySelector('.curtain');
const lamp = document.querySelector('.lamp');
const hang = document.querySelector('.hang');
const scene = document.querySelector('.scene');
const rabbit = document.querySelector('.rabbit');
const pigeon = document.querySelector('.pigeon');
const hat = document.querySelector('.hat');

curtain.addEventListener('click', () => {
  curtain.classList.toggle('active');
});

lamp.addEventListener('mousedown', () => {
  hang.style.transform = `translateY(5px)`;
});

lamp.addEventListener('mouseup', () => {
  hang.style.transform = `translateY(0px)`;
});

lamp.addEventListener('click', () => {
  scene.classList.toggle('hidden');
});

function changeAnimals()
{
  rabbit.classList.toggle('put-in');
  rabbit.classList.toggle('pull-out');
  pigeon.classList.toggle('put-in');
  pigeon.classList.toggle('pull-out');
}

hat.addEventListener('click', changeAnimals);

rabbit.addEventListener('click', changeAnimals);

pigeon.addEventListener('click', changeAnimals);
