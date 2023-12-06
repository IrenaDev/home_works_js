import * as bootstrap from 'bootstrap';
import './jsBasics.scss';

// Vars

const currentYear = new Date().getFullYear();

const formName = document.querySelector('.form-name');
const formBirthYear = document.querySelector('.form-birth-year');
const formPerimeterSquare = document.querySelector('.form-perimeter-square');

const sendNameBtn = document.getElementById('sendName');
const sendBirthYear = document.getElementById('sendBirthYear');
const sendPerimeterSquare = document.getElementById('sendPerimeterSquare');

const modalBodyText = document.getElementById('modal-text');

/*---------------------
  Send Name Form
---------------------*/

sendNameBtn.addEventListener('click', () => {
  const name = document.getElementById('floatingInputName').value;

  if (name) {
    modalBodyText.textContent = `Hello ${name}`;
    formName.classList.add('d-none');
    formBirthYear.classList.remove('d-none');
  } else {
    modalBodyText.textContent = `The field is not filled! Enter your name, please!!!`;
  }
});

/*---------------------
  Send Birth Year Form
---------------------*/

sendBirthYear.addEventListener('click', () => {
  const birthYear = document.getElementById('floatingInputBirthYear').value;

  if (birthYear) {
    const age = currentYear - birthYear;

    modalBodyText.textContent = `You are ${age} years old`;
    formBirthYear.classList.add('d-none');
    formPerimeterSquare.classList.remove('d-none');
  } else {
    modalBodyText.textContent = `The field is not filled! Enter your year of birth, please`;
  }
});

/*----------------------------
  Send Perimeter Square  Form
-----------------------------*/

sendPerimeterSquare.addEventListener('click', () => {
  const squareSideLength = document.getElementById('floatingInputSquareSideLength').value;

  if (squareSideLength) {
    const perimeterSquare = squareSideLength * 4;

    modalBodyText.textContent = `The perimeter of square are ${perimeterSquare}`;
  } else {
    modalBodyText.textContent = `The field is not filled! Enter the length of the side of the square, please`;
  }
});
