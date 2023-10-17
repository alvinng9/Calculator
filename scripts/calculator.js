let calculation = '';

document.querySelector('.js-seven')
  .addEventListener('click', () => {
    calculation += '7';
    display();
  });

document.querySelector('.js-eight')
  .addEventListener('click', () => {
    calculation += '8';
    display();
  });

document.querySelector('.js-nine')
  .addEventListener('click', () => {
    calculation += '9';
    display();
  });

document.querySelector('.js-four')
  .addEventListener('click', () => {
    calculation += '4';
    display();
  });

document.querySelector('.js-five')
  .addEventListener('click', () => {
    calculation += '5';
    display();
  });

document.querySelector('.js-six')
  .addEventListener('click', () => {
    calculation += '6';
    display();
  });

document.querySelector('.js-one')
  .addEventListener('click', () => {
    calculation += '1';
    display();
  });

document.querySelector('.js-two')
  .addEventListener('click', () => {
    calculation += '2';
    display();
  });

document.querySelector('.js-three')
  .addEventListener('click', () => {
    calculation += '3';
    display();
  });

document.querySelector('.js-zero')
  .addEventListener('click', () => {
    calculation += '0';
    display();
  });

document.querySelector('.js-decimal')
  .addEventListener('click', () => {
    calculation += '.';
    display();
  });

document.querySelector('.js-divide')
  .addEventListener('click', () => {
    calculation += '/';
  });

document.querySelector('.js-multiply')
  .addEventListener('click', () => {
    calculation += '*';
  });

document.querySelector('.js-subtract')
  .addEventListener('click', () => {
    calculation += '-';
  });

document.querySelector('.js-add')
  .addEventListener('click', () => {
    calculation += '+';
  });

document.querySelector('.js-reset')
  .addEventListener('click', () => {
    calculation = '0';
    display();
    calculation = '';
  });

document.querySelector('.js-calculate')
  .addEventListener('click', () => {
    calculate();
  });

document.querySelector('.js-percent')
  .addEventListener('click', () => {
    calculation/= 100;
    calculate();
  })

document.querySelector('.js-postive-negative')
  .addEventListener('click', () => {
    if (calculation.slice(0,1) === '-') {
      calculation = `${eval(`calculation*-1`)}`;
    } else {
      calculation = `-${calculation}`;
    }
    display();
  })


function display() {
  const inputElement = document.querySelector('.js-input');
  if(calculation > 999999999999) calculation = 999999999999;
  inputElement.innerHTML = calculation;
}

function calculate() {
  calculation = eval(calculation);
  display();
  calculation = '';
}