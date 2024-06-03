const form = document.querySelector('form');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let h = parseInt(height.value);
  console.log(h);
  let w = parseInt(weight.value);
  const results = document.querySelector('#results');

  if (h < 0 || isNaN(h) || h === '') {
    results.innerHTML = 'Please enter correct height';
  } else if (w < 0 || isNaN(w) || w === '') {
    results.innerHTML = 'Please enter correct weight';
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    // console.log(bmi);
    
    if(bmi < 18.6) {  
      results.innerHTML = `<span>BMI : ${bmi}, you are underweight </span>`;
    } else if(bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>BMI : ${bmi}in normal range</span>`;
    } else {
      results.innerHTML = `<span>BMI : ${bmi}, you are over weight</span>`;
    }

  }

  const guide = document.querySelectorAll("#weight-guide")

});