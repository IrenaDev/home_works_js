export function getFactorial() {
  const btn = document.getElementById('sendfactorialtNumber');
  const modalBodyText = document.getElementById('modal-text');

  /*---------------------------------
    Galculation factorial
  ---------------------------------*/
  function factorial(num) {
    let result = 0;

    if (isNaN(num)) {
      throw new Error(`Not a number`);
    }

    if (num < 0) {
      throw new Error(`error`);
    }

    const calculation = n => (result = n ? n * calculation(n - 1) : 1);
    calculation(num);

    modalBodyText.textContent = `The factorial number ${num} is ${result}`;

    // For test
    console.log(`The factorial number ${num} is ${result}`);
  }

  /*---------------------------------
    Get numbers from DOM
  ---------------------------------*/
  btn.addEventListener('click', () => {
    const factorialtNumber = document.getElementById('factorialtNumber').value;

    factorial(factorialtNumber);
  });
}
