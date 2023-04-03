const billInput = document.getElementById('bill');
const tipInputs = document.querySelectorAll('input[name="tip"]');
const peopleInput = document.getElementById('people');
const tipAmountOutput = document.getElementById('tipAmount');
const totalOutput = document.getElementById('total');

function calculateTip() {
  const billAmount = parseFloat(billInput.value);
  const tipPercent = parseFloat(document.querySelector('input[name="tip"]:checked').value);
  const numOfPeople = parseInt(peopleInput.value);

  const tipAmount = billAmount * tipPercent;
  const totalAmount = billAmount + tipAmount;
  const tipPerPerson = tipAmount / numOfPeople;
  const totalPerPerson = totalAmount / numOfPeople;

  tipAmountOutput.textContent = '$' + tipPerPerson.toFixed(2);
  totalOutput.textContent = '$' + totalPerPerson.toFixed(2);
}

billInput.addEventListener('input', calculateTip);
tipInputs.forEach(input => input.addEventListener('input', calculateTip));
peopleInput.addEventListener('input', calculateTip);