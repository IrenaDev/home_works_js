export function oneNumber() {
  // Vars
  const btn = document.getElementById('sendOneNumber');
  const modalBodyText = document.getElementById('modal-text');

  function getNumbers(numb1, numb2, numb3) {
    modalBodyText.textContent = parseInt(numb1.toString() + numb2.toString() + numb3.toString());

    // For test
    console.log(parseInt(numb1.toString() + numb2.toString() + numb3.toString()));
  }

  /*---------------------------------
    Get numbers from DOM
  ---------------------------------*/
  btn.addEventListener('click', () => {
    const firstNumber = document.getElementById('oneNumberFirst').value;
    const secondNumber = document.getElementById('oneNumberSecond').value;
    const thirdNumber = document.getElementById('checkThirdNumber').value;

    getNumbers(firstNumber, secondNumber, thirdNumber);
  });
}
