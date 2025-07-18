https://stackblitz.com/edit/dom-project-chaiaurcode-frjouy6y?file=.vscode%2Fsettings.json,1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html

--------------------------------------------------------------------------------------------------------------------

project 1 solution-->

const buttons=document.querySelectorAll('.button')
const body= document.querySelector('body')

buttons.forEach(function (button){
   button.addEventListener('click', function(e){
     body.style.backgroundColor= e.target.id;
   })
})


--------------------------------------------------------------------------------------------------------------------
project 2 solution->>

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML =  ` ${height} is not a valid height`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML =  ` ${weight} is not a valid weight`;
  }
  else{
     const bmi= (weight/((height*height)/10000)).toFixed(2)
     results.innerHTML=`${bmi}`
     if(bmi<18.6)
     bmid.innerHTML="You are underweight"
     else if(bmi>18.6 && bmi<24.9)
     bmid.innerHTML="You are having normal weight"
     else
     bmid.innerHTML="You are overweight"
  }
});

--------------------------------------------------------------------------------------------------------------------

