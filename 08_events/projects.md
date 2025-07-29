//background color changing project


const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const changeBgColor = function () {
  document.body.style.backgroundColor = randomColor();
};

const StartChangingColor = function () {
  if(!intervalId)
  intervalId = setInterval(changeBgColor, 1000);
};

document.querySelector('#start').addEventListener('click', StartChangingColor);

const StopChangingColor = function () {
  clearInterval(intervalId);
  intervalId=null;
};

document.querySelector('#stop').addEventListener('click', StopChangingColor);
