export function getNumbers() {
  //Vars
  let result = null;
  const sendCheckNumbers = document.getElementById('sendCheckNumbers');
  const modalBodyText = document.getElementById('modal-text');

  /*---------------------------------
    Comparison of numbers
  ---------------------------------*/
  function checkNumbers(numb1, numb2) {
    if (numb1 < numb2) {
      return (result = -1);
    } else if (numb1 > numb2) {
      return (result = 1);
    } else if (numb1 === numb2) {
      return (result = 0);
    }
  }

  /*---------------------------------
    Get numbers from DOM
  ---------------------------------*/
  sendCheckNumbers.addEventListener('click', () => {
    const firstNumber = document.getElementById('checkFirstNumber').value;
    const secondNumber = document.getElementById('checkSecondtNumber').value;

    checkNumbers(firstNumber, secondNumber);
    modalBodyText.textContent = `Result: ${result}`;

    // For test
    console.log(result);
  });
}
